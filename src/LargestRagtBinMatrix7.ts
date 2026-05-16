// @ts-nocheck
// ============================================
// التمرين 7: Largest Rectangle in Binary Matrix
// حل كامل في ملف واحد
// ============================================

/**
 * إيجاد أكبر مساحة مستطيل في مصفوفة ارتفاعات (Histogram)
 * @param heights - مصفوفة ارتفاعات الأعمدة
 * @returns أكبر مساحة مستطيل
 */
const largestRectangleArea = (heights: number[]): number => {
  if (!heights || heights.length === 0) return 0;

  const stack: number[] = [];
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()!];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const height = heights[stack.pop()!];
    const width =
      stack.length === 0
        ? heights.length
        : heights.length - stack[stack.length - 1] - 1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};

/**
 * إيجاد أكبر مستطيل في مصفوفة ثنائية (0 و 1)
 * @param matrix - مصفوفة ثنائية الأبعاد
 * @returns أكبر مساحة مستطيل تحتوي فقط على 1
 */
const maximalRectangle = (matrix: number[][]): number => {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return 0;
  }

  const rows = matrix.length;
  const cols = matrix[0].length;

  const heights: number[] = new Array(cols).fill(0);
  let maxArea = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 1) {
        heights[j] += 1;
      } else {
        heights[j] = 0;
      }
    }

    const currentArea = largestRectangleArea(heights);
    maxArea = Math.max(maxArea, currentArea);
  }

  return maxArea;
};

const printMatrix = (matrix: number[][], title: string = "المصفوفة"): void => {
  console.log(`\n📊 ${title}:`);
  for (let i = 0; i < matrix.length; i++) {
    let row = "";
    for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j] === 1 ? "█ " : ". ";
    }
    console.log(`   ${row}`);
  }
};

// المثال 1
const matrix1 = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0],
];

printMatrix(matrix1, "المثال 1");
const result1 = maximalRectangle(matrix1);
console.log(`\nLargestArea ${result1} (Expected: 5)`);
// مثال 2
const matrix2 = [
  [1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
];

printMatrix(matrix2, "مثال 2");
const result2 = maximalRectangle(matrix2);
console.log(`\n LargestArea ${result2} (Expected: 6)`);
// مثال 3
const matrix3 = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

printMatrix(matrix3, "مثال 3");
const result3 = maximalRectangle(matrix3);
console.log(`\n LargestArea: ${result3} (Expected: 12)`);

// مثال 4
const matrix4 = [[1]];
printMatrix(matrix4, "مثال 4");
const result4 = maximalRectangle(matrix4);
console.log(`\n LargestArea: ${result4} (Expected: 1)`);

// مثال 5
const matrix5 = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
printMatrix(matrix5, "مثال 5");
const result5 = maximalRectangle(matrix5);
console.log(`\n LargestArea: ${result5} (Expected: 0)`);

// مثال 6: عمود واحد
const matrix6 = [[1], [1], [1], [1], [1]];
printMatrix(matrix6, "مثال 6");
const result6 = maximalRectangle(matrix6);
console.log(`\n LargestArea: ${result6} (Expected: 5)`);
