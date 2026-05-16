// @ts-nocheck
// التمرين 6: Largest Rectangle in Histogram
// الطريقة: Stack (المكدس) - O(n)

/**
 * إيجاد أكبر مساحة مستطيل في المدرج التكراري
 * @param heights - مصفوفة ارتفاعات الأعمدة
 * @returns أكبر مساحة ممكنة
 */
const largestRectangleArea = (heights: number[]): number => {
  if (!heights || heights.length === 0) return 0;

  const stack: number[] = []; // مكدس لتخزين الفهارس
  let maxArea = 0;

  // نمر على جميع الأعمدة
  for (let i = 0; i < heights.length; i++) {
    // طالما العمود الحالي أقل من العمود الموجود في أعلى المكدس
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const height = heights[stack.pop()]; // ارتفاع العمود
      const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
    stack.push(i);
  }

  // معالجة الأعمدة المتبقية في المكدس
  while (stack.length > 0) {
    const height = heights[stack.pop()];
    const width =
      stack.length === 0
        ? heights.length
        : heights.length - stack[stack.length - 1] - 1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
};

const heights1 = [6, 2, 5, 4, 5, 1, 6];
console.log("Inputs:", heights1);
const result1 = largestRectangleArea(heights1);
console.log(`Rusult : ${result1}`);

const heights2 = [2, 1, 5, 6, 2, 3];
console.log("\nInputs:", heights2);
const result2 = largestRectangleArea(heights2);
console.log(`Rusult : ${result2}`);

const heights3 = [2, 4];
console.log("\nInputs:", heights3);
const result3 = largestRectangleArea(heights3);
console.log(`Rusult : ${result3}`);

const heights4 = [1, 2, 3, 4, 5];
console.log("\nInputs:", heights4);
const result4 = largestRectangleArea(heights4);
console.log(`Rusult : ${result4}`);

const heights5 = [5, 5, 5, 5];
console.log("\nInputs:", heights5);
const result5 = largestRectangleArea(heights5);
console.log(`Rusult : ${result5}`);
