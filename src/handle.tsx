import styled from '@emotion/styled';
import { HandleColors } from '.';

export interface HandleProps extends React.ComponentProps<'div'> {
  trackThickness: number;
  size: number;
  handleSize: number;
  colors?: HandleColors;
}

const HandleBase = styled.div<{
  radius: number;
  color: string;
}>`
  position: absolute;
  width:${props => props.radius * 2}px;
  height:${props => props.radius * 2}px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  &:after {
    content: '';
    background: rgba(0,0,0,0.2);
    transform-box: fill-box;
    transform-origin: center center;
    animation-timing-function: ease-out;
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    animation-name: pulse;
    position: absolute;
    inset:0;
    border-radius: 50%;
    z-index: 1;
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
  }
  &:before {
    content: '';
    position: absolute;
    inset:0;
    border-radius: 50%;
    background-color: ${props => props.color};
    z-index: 2;
  }
  svg {
    position: absolute;
    inset: 0;
    z-index: 3;
  }
`;


export const DEFAULT_HANDLE_COLORS = {
  handle: '#fff',
  icon: '#111',
  pulse: 'rgba(0,0,0,0.3)'
}

export function Handle({
  size = 30,
  handleSize = 8,
  trackThickness,
  colors = DEFAULT_HANDLE_COLORS,
  ...rest
}: HandleProps) {
  const double = handleSize * 2;
  const _colors = {
    ...DEFAULT_HANDLE_COLORS,
    ...colors,
  };
  const iconLineSpacing = handleSize / 3;
  const halfHandle = handleSize / 2;
  const lineThickness = 1;
  const verticalOffset = lineThickness + ((halfHandle + (iconLineSpacing * 2)) - halfHandle);
  const offsetToCenter = (handleSize - verticalOffset / 2);
  return <HandleBase radius={handleSize} color={_colors.handle} style={{
    transform: `translate3d(${((size / 2) + (handleSize - trackThickness  / 2)) * -1}px, -50%, 0)`
  }} {...rest}>
    <svg width={double} height={double} viewBox={`0 0 ${double} ${double}`}>
      <g>
        <rect fill={_colors.icon} y={halfHandle} x={0 + offsetToCenter} height={handleSize} width={lineThickness}></rect>
        <rect fill={_colors.icon} y={halfHandle} x={iconLineSpacing + offsetToCenter} height={handleSize} width={lineThickness}></rect>
        <rect fill={_colors.icon} y={halfHandle} x={iconLineSpacing * 2 + offsetToCenter} height={handleSize} width={lineThickness}></rect>
      </g>
    </svg>
  </HandleBase>
}