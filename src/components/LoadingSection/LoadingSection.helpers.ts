import { EMIT_RADIUS } from "./LoadingSection.constants";

export function generateDirectionalArray(numberOfDirections: number) {
  const directionalArray = [];
  const angularDivisions = (2 * Math.PI) / numberOfDirections;
  let currentAngle = 0;
  for (let i = 0; i < numberOfDirections; i++) {
    directionalArray.push({
      x: Math.ceil(EMIT_RADIUS * Math.cos(currentAngle)),
      y: Math.ceil(EMIT_RADIUS * Math.sin(currentAngle)),
      delay: Math.random() * 3.0,
    });

    currentAngle += angularDivisions;
  }
  return directionalArray;
}
