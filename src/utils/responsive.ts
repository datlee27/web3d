/**
 * Responsive Utilities
 * Chuyển đổi px sang % dựa trên Figma frame 1920px
 */

const FIGMA_FRAME_WIDTH = 1920;

/**
 * Chuyển đổi px sang % dựa trên frame width
 * @param px - Giá trị pixel cần chuyển
 * @param baseWidth - Chiều rộng frame gốc (mặc định 1920)
 * @returns Chuỗi phần trăm
 */
export const pxToPercent = (
  px: number,
  baseWidth: number = FIGMA_FRAME_WIDTH,
): string => {
  return `${((px / baseWidth) * 100).toFixed(5)}%`;
};

/**
 * Chuyển đổi nhiều giá trị px sang %
 * @param values - Mảng các giá trị px
 * @param baseWidth - Chiều rộng frame gốc
 * @returns Mảng các chuỗi phần trăm
 */
export const pxToPercentBatch = (
  values: number[],
  baseWidth: number = FIGMA_FRAME_WIDTH,
): string[] => {
  return values.map((px) => pxToPercent(px, baseWidth));
};

/**
 * Tạo style object với % conversion
 * @param styles - Object chứa các giá trị px
 * @returns Object với giá trị đã convert sang %
 */
export const createResponsiveStyles = (styles: {
  width?: number;
  left?: number;
  right?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingLeft?: number;
  paddingRight?: number;
  [key: string]: string | number | undefined;
}): React.CSSProperties => {
  const converted: React.CSSProperties = { ...styles };

  // Convert horizontal measurements to %
  if (styles.width !== undefined) converted.width = pxToPercent(styles.width);
  if (styles.left !== undefined) converted.left = pxToPercent(styles.left);
  if (styles.right !== undefined) converted.right = pxToPercent(styles.right);
  if (styles.marginLeft !== undefined)
    converted.marginLeft = pxToPercent(styles.marginLeft);
  if (styles.marginRight !== undefined)
    converted.marginRight = pxToPercent(styles.marginRight);
  if (styles.paddingLeft !== undefined)
    converted.paddingLeft = pxToPercent(styles.paddingLeft);
  if (styles.paddingRight !== undefined)
    converted.paddingRight = pxToPercent(styles.paddingRight);

  return converted;
};

/**
 * Breakpoints cho responsive design
 */
export const breakpoints = {
  mobile: 375,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
  wide: 1920,
  ultraWide: 2560,
} as const;

/**
 * Media queries
 */
export const mediaQueries = {
  mobile: `@media (max-width: ${breakpoints.tablet - 1}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.laptop - 1}px)`,
  laptop: `@media (min-width: ${breakpoints.laptop}px) and (max-width: ${breakpoints.desktop - 1}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
  wide: `@media (min-width: ${breakpoints.wide}px)`,
} as const;

/**
 * Tính toán responsive value dựa trên viewport
 * @param pxValue - Giá trị px gốc
 * @param currentViewport - Viewport hiện tại
 * @returns Giá trị px tương ứng
 */
export const getResponsiveValue = (
  pxValue: number,
  currentViewport: number = window.innerWidth,
): number => {
  return (pxValue / FIGMA_FRAME_WIDTH) * currentViewport;
};

/**
 * Common responsive widths (% values)
 */
export const responsiveWidths = {
  full: "100%",
  container: "72.70833%", // 1396px
  section: "35.83333%", // 688px
  card: "22.03125%", // 423px
  half: "50%",
  third: "33.33333%",
  quarter: "25%",
} as const;

/**
 * Common left positions (% values)
 */
export const responsivePositions = {
  left: {
    start: "13.64583%", // 262px
    center: "43.125%", // 828px
    end: "67.70833%", // 1300px
  },
} as const;

export default {
  pxToPercent,
  pxToPercentBatch,
  createResponsiveStyles,
  breakpoints,
  mediaQueries,
  getResponsiveValue,
  responsiveWidths,
  responsivePositions,
};
