import React, { useEffect, useState,  useRef } from 'react';
import styled from '@emotion/styled';
import { HandleColors } from './';

export interface HandleProps {
  x: number;
  y: number;
  size: number;
  handleSize: number;
  colors?: HandleColors;
}

const HandleBase = styled.circle``;
const HandlePulse = styled.circle`
  transform-box: fill-box;
  transform-origin: center center;
  animation-timing-function: ease-out;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-name: pulse;
  @keyframes pulse {
    0% {
      transform: scale(1.4);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1.4);
    }
  }
  
`;

export const DEFAULT_HANDLE_COLORS = {
  handle: '#fff',
  icon: '#111',
  pulse: 'rgba(0,0,0,0.3)'
}

export function Handle({
  x = 0,
  y = 0,
  size = 30,
  handleSize = 8,
  colors = DEFAULT_HANDLE_COLORS
}: HandleProps) {
  const double = handleSize * 2;
  const _colors = {
    ...DEFAULT_HANDLE_COLORS,
    ...colors,
  };
  const ref = useRef<SVGRectElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [angle, setAngle] = useState(0);
  const iconLineSpacing = handleSize / 3;
  const halfHandle = handleSize / 2;
  const lineThickness = 1;
  const verticalOffset = lineThickness + ((halfHandle + (iconLineSpacing * 2)) - halfHandle);
  const offsetToCenter = (handleSize - verticalOffset / 2);

  

  useEffect(() => {
    if (ref.current && svgRef.current) {
      const bubbleBounding = ref.current.getBoundingClientRect();
      const svgBounding = svgRef.current.getBoundingClientRect();
      var redX = bubbleBounding.left + bubbleBounding.width / 2;
      var redY = bubbleBounding.top + bubbleBounding.height / 2;

      var blueX = svgBounding.left + svgBounding.width / 2;
      var blueY = svgBounding.top + svgBounding.height / 2;

      var X = blueX - redX;
      var Y = blueY - redY;
      setAngle(Math.atan2(Y, X) + Math.PI/2);
    }
  }, [ref, x, handleSize, y]);

  
  return <svg ref={svgRef} width={size + double} height={size + double} viewBox={`-${handleSize} -${handleSize} ${size + double} ${size + double}`}>
    <HandlePulse
      r={handleSize}
      cx={x}
      cy={y}
      fill={_colors.pulse}
      fillOpacity="0.2"
    />
    <HandleBase
      r={handleSize}
      cx={x}
      cy={y}
      fill={_colors.handle}
    />
    <g style={{
      transform: `translate3d(${x - (handleSize)}px, ${y - (handleSize)}px, 0)`,
      cursor: 'grab'
    }}>
      <svg width={double} height={double} viewBox={`0 0 ${double} ${double}`}>
        <rect ref={ref} fill="transparent" width={double} height={double}></rect>
        <g style={{
          transform: `rotate(${angle}rad)`,
          transformOrigin: 'center center'
        }}>
          <rect fill={_colors.icon} x={halfHandle} y={0 + offsetToCenter} width={handleSize} height={lineThickness}></rect>
          <rect fill={_colors.icon} x={halfHandle} y={iconLineSpacing + offsetToCenter} width={handleSize} height={lineThickness}></rect>
          <rect fill={_colors.icon} x={halfHandle} y={iconLineSpacing * 2 + offsetToCenter} width={handleSize} height={lineThickness}></rect>
        </g>
      </svg>
    </g>
  </svg>
}