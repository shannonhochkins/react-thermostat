import { memo } from 'react';
import { merge } from './utils';
interface Tick {
  thickness: number;
  length: number;
  color: string;
  cap: 'round' | 'butt' | 'square'
}

export interface DialLinesProps {
  size: number;
  mask?: string | null;
  ticks?: {
    count?: number;
    every?: number;
    main?: Partial<Tick>;
    sub?: Partial<Tick>;
  };
}
const TICK_DEFAULTS_MAIN: Tick = {
  thickness: 3,
  length: 7,
  color: 'black',
  cap: 'round'
};
const TICK_DEFAULTS_SUB: Tick = {
  thickness: 1,
  length: 4,
  color: 'black',
  cap: 'round'
};
const TICK_DEFAULTS = {
  count: 48,
  every: 4,
  main: TICK_DEFAULTS_MAIN,
  sub: TICK_DEFAULTS_SUB
};

function DialLinesComponent({
  size,
  mask = null,
  ticks = TICK_DEFAULTS,
}: DialLinesProps & {
  size: number;
}) {

  const radius = size / 2;
  const {
    count,
    every,
    sub,
    main
  } = merge(TICK_DEFAULTS, ticks);
  console.log('re-rendering dial')
  return (
    <g mask={mask ? `url(#${mask})` : undefined}>
      {
        Array(count).fill(undefined).map((_, i) => {
          const cos = Math.cos(2 * Math.PI / count * i);
          const sin = Math.sin(2 * Math.PI / count * i);
          const isMain = i % every === 0;
          const {
            color,
            length,
            thickness,
            cap
          } = isMain ? main : sub;
          return (
            <line
              key={i}
              stroke={color}
              strokeWidth={thickness}
              strokeLinecap={cap}
              x1={cos * radius + radius}
              y1={sin * radius + radius}
              x2={cos * (radius - length) + radius}
              y2={sin * (radius - length) + radius}
            />
          );
        })
      }
    </g>
  );
}

export const DialLines = memo(DialLinesComponent);

