import { HEIGHT_MULTIPLIER } from './constants';
import styled from '@emotion/styled';



const AnimatedRect = styled.rect`
  transition: 0.3s ease;
  transition-property: color, fill;
`;

const GrowingRect = styled.rect`
  transition: 0.3s ease;
  transition-property: y, height, color, fill;
`;

const GrowingCircle = styled.circle`
  transition: 0.3s ease;
  transition-property: cy, color, fill;
`;

const AnimatedCircle = styled.circle`
  transition: 0.3s ease;
  transition-property: color, fill;
`;

export interface ThermometerProps {
  min: number;
  max: number;
  value: number;
  size: number;
  thickness?: number;
  className?: string;
  textColor?: string;
  suffix?: string;
}
export function Thermometer({
  min,
  max,
  value,
  size,
  thickness = 20,
  className,
  suffix
}: ThermometerProps) {
  const height = size * HEIGHT_MULTIPLIER;
  const center = size / 2;
  // calculate the size of the main bottom circle based on the input size
  const circleSize = (size - (thickness * 4.5)) / 2;
  const radius = circleSize / 2;
  // input value percentage between min and max
  const percent = ((value - min) * 100) / (max - min);
  // / 100 * percent
  const fullBarHeight = (height - circleSize - radius);
  // the minimum value the growing center should go to
  const growingMinY = fullBarHeight - radius;
  // the max height the growing center should go to
  const growingMaxY = radius;
  // animating height based on value of slider
  const scaling = ((growingMaxY - growingMinY) * percent / 100) + growingMinY;
  const innerCircleRadius = circleSize - (thickness * 2);
  return <svg className={className} width={size} height={height} style={{
    color: `var(--thermostat-color, transparent)`
  }}>
    <mask id="innerMask">
      <AnimatedRect id="mask-fill" x="0" y="0" width={size} height={height} fill="white" />
      <AnimatedCircle id="center-circle-mask" cx={center} cy={height - circleSize} r={circleSize - thickness}  />
      <AnimatedCircle id="top-cap-mask" cx={center} cy={circleSize - thickness - ((circleSize - thickness * 2) / 2)} r={(circleSize - thickness * 2) / 2} />
      <AnimatedRect id="inside-thermo-mask" x={center - radius + thickness} y={radius} width={circleSize - thickness * 2} height={height - circleSize - radius} />
    </mask>
    <AnimatedCircle id="main-circle" fill="currentColor" cx={center} cy={height - circleSize} r={circleSize} mask="url(#innerMask)" />
    <AnimatedCircle id="top-cap" fill="currentColor" cx={center} cy={radius} r={radius} mask="url(#innerMask)" />
    <AnimatedCircle id="center-circle" fill="currentColor" cx={center} cy={height - circleSize} r={innerCircleRadius} />
    <AnimatedRect id="thermo-sides" fill="currentColor" x={center - radius} y={radius} width={circleSize} height={height - circleSize - radius}  mask="url(#innerMask)" />
    <text style={{
      userSelect: 'none'
    }} fontSize={innerCircleRadius} textAnchor="middle" x={center} y={height - circleSize} dominantBaseline="central" alignmentBaseline="central">
      {value}
      {typeof suffix !== 'undefined' && <tspan dx="0" dy={-innerCircleRadius / 4} style={{
        fontSize: innerCircleRadius / 4
      }}>{suffix}</tspan>}
    </text>
    <g>
      <GrowingCircle id="growing-thermo-cap" fill="currentColor" cx={center} cy={scaling} r={(circleSize - thickness * 4) / 2} />
      <GrowingRect id="growing-thermo" fill="currentColor" x={center - radius + (thickness * 2)} y={scaling} width={circleSize - thickness * 4} height={fullBarHeight - scaling} />
    </g>
  </svg>
}