import React, { useEffect, useRef, useState } from "react";
import styled from '@emotion/styled';
import merge from "ts-deepmerge";
import {
  angleToPosition,
  positionToAngle,
  valueToAngle,
  angleToValue,
} from "./utils";
import { drawArc } from "./arc";
import { DialLines } from './dialLines';
import { Thermometer as ThermometerBase } from './thermometer';
import { Handle, HandleColors, DEFAULT_HANDLE_COLORS } from './handle';
import { HEIGHT_MULTIPLIER, THICKNESS_DIVISOR, CANVAS_WIDTH, CANVAS_HEIGHT } from './constants';

const Wrapper = styled.div`
  position: relative;
`;

const ColorPicker = styled.canvas`
  position: absolute;
  z-index: -1;
`;

interface HandleContainerProps {
  size: number;
  handleSize: number;
}

const HandleContainer = styled.div<HandleContainerProps>`
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-bottom: -${props => props.handleSize -3}px;
  margin-left: -${props => props.handleSize}px;
`;


const Thermometer = styled(ThermometerBase)<{
  color: string;
  handleSize: number;
}>`
  color: ${props => props.color};
  font-family: "Kanit", sans-serif;
  font-weight: 100;
`;

interface GradientProps {
  width: number;
  height: number;
}
const Gradient = styled.div<GradientProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

const Arc = styled.svg`
  position: relative;
`;

interface HandleProps {
  size?: number;
  colors?: HandleColors;
}

interface TrackProps {
  colors?: string[];
  thickness?: number;
  markers?: {
    enabled?: boolean;
    every?: number;
    count?: number;
    main?: {
      color?: string;
      length?: number;
      thickness?: number;
    };
    sub?: {
      color?: string;
      length?: number;
      thickness?: number;
    }
  }
}

type Props = {
  size?: number;
  min?: number;
  max?: number;
  value: number;
  onChange: (value: number) => void;
  handle?: HandleProps;
  disabled?: boolean;
  track?: TrackProps;
};

const HANDLE_DEFAULTS = {
  size: 20,
  colors: DEFAULT_HANDLE_COLORS
}
const TRACK_DEFAULTS = {
  colors: ['#cfac48', '#cd5401'],
  markers: {
    enabled: true,
    every: 5,
    count: 60,
    main: {
      color: 'black'
    },
    sub: {
      color: 'rgba(0,0,0,0.8)'
    }
  }
}


export function Thermostat({
  size = 200,
  min = 0,
  max = 100,
  value,
  handle: handleInput,
  track: trackInput,
  onChange,
  disabled,
}: Props) {
  const handle = merge(HANDLE_DEFAULTS, handleInput || {});
  const track = merge({
    ...TRACK_DEFAULTS,
    thickness: size / 10,
  }, trackInput || {});
  const _svgRef = useRef<SVGSVGElement>(null);
  const _handleRef = useRef<HTMLDivElement>(null)
  const _canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState('transparent');
  const trackInnerRadius = size / 2 - track.thickness;
  const thermoOffset = (track.thickness + (track.thickness / THICKNESS_DIVISOR));
  const height = size * HEIGHT_MULTIPLIER + thermoOffset;
  const handleAngle = valueToAngle({
    value,
    min,
    max,
  });
  const handlePosition = angleToPosition(
    handleAngle,
    trackInnerRadius + track.thickness / 2,
    size
  );
  const controllable = !disabled && Boolean(onChange);

  useEffect(() => {
    const canvasRef = _canvasRef.current;
    if (canvasRef) {
      const ctx = canvasRef.getContext('2d');
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        track.colors?.forEach((color, index) => {
          const offset = index === 0 ? 0.2 : index === track.colors.length - 1 ? 0.8 : (index / (track.colors.length - 1));
          gradient.addColorStop(offset, color)
        });
        ctx.fillStyle = gradient;
        ctx.rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        ctx.fill();
      }
    }
  }, [track.colors]);

  useEffect(() => {
    getColourFromValue();
  }, [value, track.colors]);

  if (value < min || value > max) {
    throw new Error(`"value" should be between ${min} and ${max}`);
  }

  function onMouseEnter(ev: React.MouseEvent<HTMLDivElement>) {
    if (ev.buttons === 1) {
      // The left mouse button is pressed, act as though user clicked us
      onMouseDown(ev);
    }
  };

  function onMouseDown(ev: React.MouseEvent<HTMLDivElement>) {
    const handleRef = _handleRef.current;
    if (handleRef) {
      handleRef.addEventListener("mousemove", processSelection);
      handleRef.addEventListener("mouseleave", removeMouseListeners);
      handleRef.addEventListener("mouseup", removeMouseListeners);
    }
    processSelection(ev);
  };

  function removeMouseListeners() {
    const handleRef = _handleRef.current;
    if (handleRef) {
      handleRef.removeEventListener("mousemove", processSelection);
      handleRef.removeEventListener("mouseleave", removeMouseListeners);
      handleRef.removeEventListener("mouseup", removeMouseListeners);
    }
  };

  function getColourFromValue() {
    const canvasRef = _canvasRef.current;
    if (canvasRef) {
      const ctx = canvasRef.getContext('2d');
      // input value percentage between min and max
      const percent = ((value - min) * 100) / (max - min);
      const scaling = (CANVAS_WIDTH - 1) * percent / 100;
      const v = ctx.getImageData(scaling, 1, 1, 1).data; 
      setColor(`rgb(${v[0]},${v[1]},${v[2]})`);
    }
  }

  function processSelection(ev: React.MouseEvent<HTMLDivElement> | MouseEvent) {
    if (!onChange || disabled) {
      // Read-only, don't bother doing calculations
      return;
    }
    const svgRef = _svgRef.current;
    if (!svgRef) {
      return;
    }
    // Find the coordinates with respect to the SVG
    const svgPoint = svgRef.createSVGPoint();
    const x = ev.clientX;
    const y = ev.clientY;
    svgPoint.x = x;
    // offset the Y by the size of the thermometer difference
    svgPoint.y = y - (height - size);
    const coordsInSvg = svgPoint.matrixTransform(
      svgRef.getScreenCTM()!.inverse()
    );
    const angle = positionToAngle(coordsInSvg, size);
    onChange(angleToValue({
      angle,
      min,
      max,
    }));
  };
  const arc = drawArc({
    innerRadius: trackInnerRadius,
    thickness: track.thickness,
    svgSize: size,
  });
  return <Wrapper>
    <ColorPicker width={CANVAS_WIDTH} height={CANVAS_HEIGHT} ref={_canvasRef}></ColorPicker>
    <Arc
      width={size}
      height={height}
      ref={_svgRef}
    >
      <Thermometer
        handleSize={handle.size}
        textColor={'rgba(0,0,0,0.9)'}
        color={color}
        value={Number(value.toFixed(0))} 
        min={min}
        max={max}
        thickness={track.thickness / THICKNESS_DIVISOR}
        size={size} />
      <foreignObject x="0" y={height - size} width={size} height={size} clipPath="url(#clip)">
        <Gradient 
          width={size}
          height={size}
          style={{
            backgroundImage: `conic-gradient(from 0deg, ${[...track.colors || []].reverse().map((color, index) => {
              const offset = index === 0 ? 20 : index === track.colors.length - 1 ? 80 : (index / (track.colors.length - 1)) * 100;
              return `${color} ${offset}%`;
            }).join(', ')}`
          }} />
      </foreignObject>
      <mask id="arc-mask">
        <path d={arc} fill="white" />
      </mask>
      <clipPath id="clip">
        <path d={arc} />
      </clipPath>
      {track.markers.enabled && <g transform={`translate(0, ${height - size})`}>
        <DialLines
          ticks={{
            every: track.markers.every,
            count: track.markers.count,
            main: {
              thickness: 2,
              length: track.thickness / 4,
              ...track.markers.main
            },
            sub: {
              thickness: 1,
              length: track.thickness / 8,
              ...track.markers.sub
            }
          }}
          mask="arc-mask"
          size={size}
          />
      </g>}
    </Arc>
    {!disabled && <HandleContainer
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onClick={(ev) => {
        // we could determine how close we are to the track here and only allow events when they're closer to the
        // arc, later job
        return controllable && ev.stopPropagation()
      }} ref={_handleRef} handleSize={handle.size} size={size + (handle.size * 2)}>
      <Handle colors={handle.colors} x={handlePosition.x} y={handlePosition.y} size={size} handleSize={handle.size} />
    </HandleContainer>}
  </Wrapper>
}
