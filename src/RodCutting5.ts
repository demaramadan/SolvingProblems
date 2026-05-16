// @ts-nocheck
// التمرين 5: Rod Cutting (تقطيع القضيب)

const rodCutting = (price: number[], n: number): number => {
  const dp: number[] = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    let maxProfit = 0;

    for (let j = 1; j <= i; j++) {
      const profit = price[j] + dp[i - j];
      maxProfit = Math.max(maxProfit, profit);
    }

    dp[i] = maxProfit;
  }

  return dp[n];
};

const test = (price: number[], n: number, expected: number): void => {
  const result = rodCutting(price, n);
  const status = result === expected ? "✅" : "❌";
  console.log(
    `${status} n=${n}, Price=[${price}] → (ExpectedProfit: ${expected})`,
  );
};

test([0, 1, 5, 8, 9], 4, 10);
test([0, 1, 5, 8, 9, 10], 5, 13);
test([0, 1, 5, 8, 9, 10, 17, 17, 20], 8, 22);
test([0, 3, 5, 8, 9, 10, 17, 17, 20], 8, 24);
test([0, 2, 3, 7, 8, 10], 5, 12);
