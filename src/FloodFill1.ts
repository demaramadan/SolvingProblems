// التمرين 1: ملء الفيضانات (Flood Fill)
const floodFill = (
  image: number[][],
  sr: number,
  sc: number,
  newColor: number,
): number[][] => {
  if (!image || image.length === 0) {
    return image;
  }

  if (sr < 0 || sr >= image.length) return image;

  const targetRow = image[sr];
  if (!targetRow) return image;
  if (sc < 0 || sc >= targetRow.length) return image;

  const oldColor = targetRow[sc];

  if (oldColor === newColor) return image;

  targetRow[sc] = newColor;
  const queue: [number, number][] = [[sr, sc]];
  let index = 0;

  const directions: [number, number][] = [
    [1, 0], // أسفل
    [-1, 0], // أعلى
    [0, 1], // يمين
    [0, -1], // يسار
  ];

  while (index < queue.length) {
    const [row, col] = queue[index] as [number, number];
    index++;

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < image.length &&
        newCol >= 0 &&
        newCol < (image[newRow]?.length ?? 0) &&
        image[newRow]?.[newCol] === oldColor
      ) {
        image[newRow]![newCol] = newColor;
        queue.push([newRow, newCol]);
      }
    }
  }
  return image;
};

const image1 = [
  [1, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
];

console.log("Original Image");
console.table(image1);

const result = floodFill(image1, 1, 1, 2);
console.log("Flood-filled Image");
console.table(result);
