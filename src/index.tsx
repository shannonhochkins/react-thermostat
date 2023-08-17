import React, { useEffect, useRef, useState, useMemo, useCallback, useLayoutEffect } from "react";
import styled from '@emotion/styled';
import { useGesture } from '@use-gesture/react';
import {
  positionToAngle,
  valueToAngle,
  angleToValue,
  merge,
} from "./utils";
import { drawArc } from "./arc";
import { DialLines } from './dialLines';
import { Thermometer as ThermometerBase } from './thermometer';
import { Handle, DEFAULT_HANDLE_COLORS } from './handle';
import { HEIGHT_MULTIPLIER, THICKNESS_DIVISOR, CANVAS_WIDTH, CANVAS_HEIGHT } from './constants';
import "@fontsource/roboto/300.css";

const Wrapper = styled.div`
  position: relative;
`;

const ColorPicker = styled.canvas`
  position: absolute;
  z-index: -1;
  visibility: hidden;
`;

const HandleContainer = styled.div`
  position: absolute;
  z-index: 3;
  inset: 0;
  width: 100%;
  height: 100%;
`;


const Thermometer = styled(ThermometerBase)<{
  color: string;
  handleSize: number;
}>`
  color: ${props => props.color};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;

interface GradientProps {
  width: number;
  height: number;
  trackColors: string[];
}
const Gradient = styled.div<GradientProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  ${props => {
    const transition = [...props.trackColors].map((_, index) => `--thermostat-color-${index} 0.3s ease`).join(', ')
    return `
      transition: ${transition};
    `;
  }}
`;

const Arc = styled.svg`
  position: relative;
`;

const HANDLE_DEFAULTS = {
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

export interface HandleColors {
  handle?: string;
  icon?: string;
  pulse?: string;
}

export interface HandleProps {
  size?: number;
  colors?: HandleColors;
}

export interface TrackProps {
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

export interface ThermostatProps extends Omit<React.ComponentProps<'div'>, 'onChange'> {
  min?: number;
  max?: number;
  value: number;
  valueSuffix?: string;
  onChange: (value: number) => void;
  handle?: HandleProps;
  disabled?: boolean;
  track?: TrackProps;
};

export function Thermostat({
  min = 0,
  max = 100,
  value,
  valueSuffix,
  handle: handleInput,
  track: trackInput,
  onChange,
  disabled,
  ...rest
}: ThermostatProps) {
  const [size, setSize] = useState(0);
  const updateSize = useCallback(() => {
    if (_parentRef.current) {
      const parentElement = _parentRef.current.parentElement;
      if (parentElement) {
        setSize(parentElement.clientWidth);
      }
    }
  }, []);

  useLayoutEffect(() => {
    updateSize();
    if (!_parentRef.current || !_parentRef.current.parentElement) return;
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(_parentRef.current.parentElement);
    // Clean up the observer on unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const handle = merge({
    ...HANDLE_DEFAULTS,
    size: size / 15
  }, handleInput || {});
  const track = merge({
    ...TRACK_DEFAULTS,
    thickness: size / 10,
  }, trackInput || {});
  const _containerRef = useRef<HTMLDivElement>(null);
  const _svgRef = useRef<SVGSVGElement>(null);
  const _parentRef = React.useRef<HTMLDivElement>(null);
  const _styleRef = useRef<HTMLStyleElement>(null)
  const _canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState('transparent');
  const _ctx = useRef<CanvasRenderingContext2D | null>(null);
  const trackInnerRadius = size / 2 - track.thickness;
  const thermoOffset = (track.thickness + (track.thickness / THICKNESS_DIVISOR));
  const height = size * HEIGHT_MULTIPLIER + thermoOffset;
  const handleAngle = useMemo(() => valueToAngle({
    value,
    min,
    max,
  }), [value, min, max]);


  useEffect(() => {
    const canvasRef = _canvasRef.current;
    if (canvasRef) {
      if (!_ctx.current) {
        _ctx.current = canvasRef.getContext('2d', { willReadFrequently: true });
      }
      if (_ctx.current) {
        const gradient = _ctx.current.createLinearGradient(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        track.colors?.forEach((color, index) => {
          const offset = index === 0 ? 0.2 : index === track.colors.length - 1 ? 0.8 : (index / (track.colors.length - 1));
          gradient.addColorStop(offset, color)
        });
        _ctx.current.fillStyle = gradient;
        _ctx.current.rect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        _ctx.current.fill();
      }
    }
    if (_styleRef.current) {
      const values = track.colors?.map((color, index) => {
         return `
          @property --thermostat-color-${index} {
            syntax: '<color>';
            initial-value: ${color};
            inherits: false;
          }
         `;
      });
      _styleRef.current.innerHTML = `
        ${values.join('\n')}
      `;
    }
  }, [track.colors]);

  useEffect(() => {
    const canvasRef = _canvasRef.current;
    // extract the colour from the hidden canvas
    if (canvasRef) {
      if (!_ctx.current) {
        _ctx.current = canvasRef.getContext('2d', { willReadFrequently: true });
      }
      // input value percentage between min and max
      if (_ctx.current) {
        const percent = ((value - min) * 100) / (max - min);
        const scaling = (CANVAS_WIDTH - 1) * percent / 100;
        const v = _ctx.current.getImageData(scaling, 1, 1, 1).data; 
        setColor(`rgb(${v[0]},${v[1]},${v[2]})`);
      }
    }
  }, [value, track.colors]);

  if (value < min || value > max) {
    throw new Error(`"value" should be between ${min} and ${max}`);
  }

  const arc = useMemo(() => drawArc({
    innerRadius: trackInnerRadius,
    thickness: track.thickness,
    svgSize: size,
  }), [trackInnerRadius, size, track.thickness]);

  const calculateValues = useCallback((x: number, y: number) => {
    if (!_containerRef.current) return;
    const angle = positionToAngle(x, y, _containerRef.current);
    const value = angleToValue({
      angle,
      min,
      max,
    });
    _containerRef.current.style.transform = `rotate(${angle}deg)`;
    onChange(value);
  }, [onChange]);

  const bind = useGesture(
    {
      onDrag: (state) => {
        if (!_containerRef.current || disabled) return;
        _containerRef.current.style.transition = state.dragging ? 'none' : 'transform 0.3s ease';
        calculateValues(...state.xy);
      },
      onDragStart: () => {
        if (!_containerRef.current || disabled) return;
        _containerRef.current.style.transition = 'none';
      },
      onDragEnd: (state) => {
        if (disabled || !_containerRef.current) return;
        _containerRef.current.style.transition = 'transform 0.3s ease';
        calculateValues(...state.xy);
      },
      onClick: (state) => {
        if (disabled || !_containerRef.current) return;
        _containerRef.current.style.transition = 'transform 0.3s ease';
        calculateValues(state.event.clientX, state.event.clientY);
      },
    },
    {
      drag: {
        filterTaps: true,
        pointer: {
          touch: true,
          mouse: true,
        }
      },
    }
  );

  return <Wrapper ref={_parentRef} {...rest}>
    <style ref={_styleRef}></style>
    <ColorPicker width={CANVAS_WIDTH} height={CANVAS_HEIGHT} ref={_canvasRef}></ColorPicker>
    {!disabled && <HandleContainer
      {...bind()}
      ref={_containerRef}
      style={{
        width: size,
        height: size,
        top: height - size,
        transform: `rotate(${handleAngle}deg)`,
      }}>
      <Handle trackThickness={track.thickness} colors={handle.colors} size={size} handleSize={handle.size} />
    </HandleContainer>}
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
        suffix={valueSuffix}
        thickness={track.thickness / THICKNESS_DIVISOR}
        size={size} />
      <svg width={size} height={size} y={height - size}>
        <foreignObject x={0} y={0} width={size} height={size} clipPath="url(#clip)">
          <Gradient 
            width={size}
            height={size}
            trackColors={track.colors || []}
            style={{
              background: `conic-gradient(from 0deg, ${[...(track.colors || [])].reverse().map((_, index) => {
                const offset = index === 0 ? 20 : index === track.colors.length - 1 ? 80 : (index / (track.colors.length - 1)) * 100;
                return `var(--thermostat-color-${(track.colors.length - 1) - index}) ${offset}%`;
              }).join(', ')}`,
            }} />
        </foreignObject>
          <mask id="arc-mask">
            <path d={arc} fill="white" />
          </mask>
          <clipPath id="clip">
            <path d={arc} /> 
          </clipPath>
        {track.markers.enabled && <DialLines
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
          />}
      </svg>
      
    </Arc>
  </Wrapper>
}
