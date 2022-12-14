import { angleToPosition } from "./utils";
import { START_ANGLE, END_ANGLE } from "./constants";



interface ArcProps {
  innerRadius: number;
  thickness: number;
  svgSize: number;
}

export function drawArc({
  innerRadius,
  thickness,
  svgSize,
}: ArcProps) {
  const largeArc = END_ANGLE - START_ANGLE >= 180;
  const outerRadius = innerRadius + thickness;
  const innerArcStart = angleToPosition(
    START_ANGLE,
    innerRadius,
    svgSize
  );
  const startPoint = `
    M ${innerArcStart.x},${innerArcStart.y}
  `;
  const innerArcEnd = angleToPosition(
    END_ANGLE,
    innerRadius,
    svgSize
  );
  const innerArc = `
    A ${innerRadius} ${innerRadius} 0
      ${largeArc ? "1" : "0"}
      0
      ${innerArcEnd.x} ${innerArcEnd.y}
  `;

  const outerArcStart = angleToPosition(
    END_ANGLE,
    outerRadius,
    svgSize
  );
  const firstButt = `
    A ${thickness / 2} ${thickness / 2} 0
      ${largeArc ? "1" : "0"}
      1
      ${outerArcStart.x} ${outerArcStart.y}
  `;

  const outerArcEnd = angleToPosition(
    START_ANGLE,
    outerRadius,
    svgSize
  );
  const outerArc = `
    A ${outerRadius} ${outerRadius} 0
      ${largeArc ? "1" : "0"}
      1
      ${outerArcEnd.x} ${outerArcEnd.y}
  `;

  const secondButt = `
    A ${thickness / 2} ${thickness / 2} 0
      ${largeArc ? "1" : "0"}
      1
      ${innerArcStart.x} ${innerArcStart.y}
  `;

  return startPoint + innerArc + firstButt + outerArc + secondButt + " Z";
}