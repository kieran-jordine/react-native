export function gridOption(
  width: number,
  marginVertical: number,
  gutterSpace: number,
  numberOfColumns?: number,
) {
  const safeWidth = width - marginVertical;
  const columnCount = numberOfColumns ?? (width > 800 ? 3 : 2);
  return {
    columnWidth: (safeWidth - (columnCount + 1) * gutterSpace) / columnCount,
    columnCount,
  };
}
