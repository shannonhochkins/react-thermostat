import { MIN_ROTATION, MAX_ROTATION } from "./constants";
function calculateLinearCoefficients(minValue: number, maxValue: number) {
  // Normalize maxRotation to -230 if it's 130
  const normalizedMaxRotation = MAX_ROTATION - 360;
  // Calculate the slope
  const m = (maxValue - minValue) / (normalizedMaxRotation - MIN_ROTATION);
  // Calculate the intercept
  const b = minValue - m * MIN_ROTATION;
  return { m, b };
}

export function valueToAngle(params: {
  value: number;
  min: number;
  max: number;
}): number {
  const { value, min, max } = params;
  // Constants for the linear relationship
  const { m, b } = calculateLinearCoefficients(min, max);
  // Calculate the angle using the linear equation
  const angle = (value - b) / m;
  // Normalize the angle, considering 130 degrees as -230 degrees
  const normalizedAngle = angle < MAX_ROTATION ? angle : angle + 360;
  // Return the calculated angle
  return normalizedAngle;
}

export function angleToValue(params: {
  min: number;
  max: number;
  angle: number;
}): number {
  const { min, max, angle } = params;
  // Constants for the linear relationship
  const { m, b } = calculateLinearCoefficients(min, max);
  // Normalize the angle, considering 130 degrees as -230 degrees
  const normalizedAngle = angle < MAX_ROTATION ? angle : angle - 360;
  // Calculate the value using the linear equation
  const value = m * normalizedAngle + b;
  // clamp the values
  return Math.max(min, Math.min(max, value));
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

export function positionToAngle(x: number, y: number, div: HTMLDivElement): number {
  const containerBounding = div.getBoundingClientRect();
  const centerX = containerBounding.left + containerBounding.width / 2;
  const centerY = containerBounding.top + containerBounding.height / 2;

  // Calculate angle between center of container and current drag coordinates
  var angleRad = Math.atan2(centerY - y, centerX - x);
  
  // Convert angle from radians to degrees
  var angleDeg = Math.round((angleRad * 180) / Math.PI);
  const minAngle = MIN_ROTATION;
  const maxAngle = MAX_ROTATION;
  // Normalize the angle, considering 130 degrees as -230 degrees
  if (angleDeg > maxAngle) {
    angleDeg -= 360;
  }
  if (angleDeg > minAngle && angleDeg < maxAngle) {
    angleDeg = Math.round(angleDeg <= (minAngle + maxAngle) / 2 ? minAngle : maxAngle); // Clamp to the closest bound
  }
  return angleDeg;
}


interface IObject {
  [key: string]: any;
}

type TUnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

// istanbul ignore next
const isObject = (obj: any) => {
  if (typeof obj === "object" && obj !== null) {
    if (typeof Object.getPrototypeOf === "function") {
      const prototype = Object.getPrototypeOf(obj);
      return prototype === Object.prototype || prototype === null;
    }
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  return false;
};

export const merge = <T extends IObject[]>(
  ...objects: T
): TUnionToIntersection<T[number]> =>
  objects.reduce((result, current) => {
    if (Array.isArray(current)) {
      throw new TypeError(
        "Arguments provided to must be objects, not arrays."
      );
    }
    Object.keys(current).forEach((key) => {
      if (["__proto__", "constructor", "prototype"].includes(key)) {
        return;
      }
      if (Array.isArray(result[key]) && Array.isArray(current[key])) {
        result[key] = current[key];
      } else if (isObject(result[key]) && isObject(current[key])) {
        result[key] = merge(result[key] as IObject, current[key] as IObject);
      } else {
        result[key] = current[key];
      }
    });
    return result;
  }, {}) as any;

