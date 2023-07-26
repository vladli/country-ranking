export const componentPositions = ["top", "bottom", "left", "right"] as const;
export const componentShapes = ["circle", "square"] as const;
export const componentSizes = ["lg", "md", "sm", "xs"] as const;
export const componentStatuses = [
  "info",
  "success",
  "warning",
  "error",
] as const;
export const brandColors = ["primary", "secondary", "accent"] as const;
export const componentColors = [
  ...brandColors,
  "ghost",
  "neutral",
  ...componentStatuses,
] as const;
export const bgColors = [
  "base-100",
  "base-200",
  "base-300",
  "neutral",
] as const;

export type ComponentColor = (typeof componentColors)[number];

export type ComponentPosition = (typeof componentPositions)[number];
export type ComponentShape = (typeof componentShapes)[number];
export type ComponentSize = (typeof componentSizes)[number];
export type ComponentStatus = (typeof componentStatuses)[number];
export type ComponentBrandColors = (typeof brandColors)[number];
export type ComponentBgColors = (typeof bgColors)[number];
