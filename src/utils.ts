import { START_ANGLE, END_ANGLE } from "./constants"

export function angleToValue(params: {
  angle: number;
  min: number;
  max: number;
}) {
  const { angle, min, max } = params;
  if (angle < START_ANGLE) {
    return min;
  } else if (angle > END_ANGLE) {
    return max;
  } else {
    const ratio = (angle - START_ANGLE) / (END_ANGLE - START_ANGLE);
    const value = ratio * (max - min) + min;
    return value;
  }
}

export function valueToAngle(params: {
  value: number;
  min: number;
  max: number;
}) {
  const { value, min, max } = params;
  const ratio = (value - min) / (max - min);
  const angle = ratio * (END_ANGLE - START_ANGLE) + START_ANGLE;
  return angle;
}

export function angleToPosition(
  degree: number,
  radius: number,
  svgSize: number
) {
  // js functions need radians, counterclockwise from positive x axis
  const angle = (90 + degree) % 360;
  const angleInRad = (angle / 180) * Math.PI;
  let dX: number;
  let dY: number;

  if (angleInRad <= Math.PI) {
    // we are in the upper two quadrants
    if (angleInRad <= Math.PI / 2) {
      dY = Math.sin(angleInRad) * radius;
      dX = Math.cos(angleInRad) * radius;
    } else {
      dY = Math.sin(Math.PI - angleInRad) * radius;
      dX = Math.cos(Math.PI - angleInRad) * radius * -1;
    }
  } else {
    // we are in the lower two quadrants
    if (angleInRad <= Math.PI * 1.5) {
      dY = Math.sin(angleInRad - Math.PI) * radius * -1;
      dX = Math.cos(angleInRad - Math.PI) * radius * -1;
    } else {
      dY = Math.sin(2 * Math.PI - angleInRad) * radius * -1;
      dX = Math.cos(2 * Math.PI - angleInRad) * radius;
    }
  }
  // dX and dY are calculated based on having (0, 0) at the center
  // Now, translate dX and dY to svg coordinates, where (0, 0) is at the top left
  const x = dX + svgSize / 2;
  const y = svgSize / 2 - dY;
  return { x, y };
}

export function positionToAngle(
  position: { x: number; y: number },
  svgSize: number,
) {
  const dX = position.x - svgSize / 2;
  // position.y increases downwards in svg
  const dY = svgSize / 2 - position.y; 
  // radians, counterclockwise from positive x axis
  let theta = Math.atan2(dY, dX); 
  if (theta < 0) {
    theta = theta + 2 * Math.PI;
  }
  // degrees, counterclockwise from positive x axis
  const degree = (theta / Math.PI) * 180; 
  return (270 + degree) % 360;
}
