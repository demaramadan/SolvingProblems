# 📘 Algorithm Solutions Repository

This repository contains my solutions to 7 classical algorithm and data structure problems.  
Each solution is implemented in **TypeScript/JavaScript** with clarity, efficiency, and practical visualizations where applicable.

---

## 📑 Table of Contents

| #   | Exercise                           | Problem Type             | Algorithm / Approach           | Time Complexity | Key Highlight                    |
| --- | ---------------------------------- | ------------------------ | ------------------------------ | --------------- | -------------------------------- |
| 1   | Flood Fill                         | Matrix / Graph Traversal | BFS (Iterative Queue)          | O(m × n)        | Changes connected region color   |
| 2   | Trapping Rainwater                 | Array / Two Pointers     | Brute Force + Visualization    | O(n²)           | Visual diagram of water trapping |
| 3   | Climbing Stairs                    | Math / DP                | Binet's Formula (Golden Ratio) | O(1)            | Closed-form Fibonacci solution   |
| 4   | Jump Game                          | Greedy / Array           | Greedy (max reach)             | O(n)            | Early exit optimization          |
| 5   | Rod Cutting                        | Dynamic Programming      | Bottom-up DP                   | O(n²)           | Unbounded knapsack variant       |
| 6   | Largest Rectangle in Histogram     | Stack / Monotonic Stack  | Monotonic Stack                | O(n)            | Classic stack application        |
| 7   | Maximal Rectangle in Binary Matrix | Stack + DP               | Row-wise histogram + Stack     | O(m × n)        | Reduces 2D to 1D problem         |

---

## 🔍 Exercise Details

### 1. Flood Fill

- **Problem**: Change the color of a connected region in a 2D grid starting from `(sr, sc)`.
- **Solution**: BFS using a queue.
- **Edge Cases**: Starting cell already has the new color, invalid coordinates.

### 2. Trapping Rainwater

- **Problem**: Given elevation heights, compute how much water can be trapped after rain.
- **Solution**: For each position, find left max and right max, then water = `min(leftMax, rightMax) - height[i]`.
- **Visualization**: Prints a 2D diagram (`█` = wall, `*` = water).

### 3. Climbing Stairs

- **Problem**: Count distinct ways to climb `n` steps taking 1 or 2 steps at a time.
- **Solution**: Closed-form using Fibonacci (Binet's formula) without loops or recursion.
- **Formula**: `ways(n) = F(n+1)` where `F` is Fibonacci.

### 4. Jump Game

- **Problem**: Starting from index 0, can you reach the last index? Each element is max jump length.
- **Solution**: Greedy – track the farthest reachable index.
- **Optimization**: Early return if `maxReach >= last index`.

### 5. Rod Cutting

- **Problem**: Given rod length `n` and price array (index = length), maximize profit by cutting.
- **Solution**: Bottom-up DP `dp[i] = max(price[j] + dp[i-j])` for `j = 1..i`.
- **Note**: Price array is 1-based (index 0 unused).

### 6. Largest Rectangle in Histogram

- **Problem**: Find largest rectangular area in a histogram.
- **Solution**: Monotonic stack storing indices of increasing heights.
- **Key**: When popping, width is determined by the next smaller element on both sides.

### 7. Maximal Rectangle in Binary Matrix

- **Problem**: Largest rectangle containing only 1's in a binary matrix.
- **Solution**: Treat each row as base of a histogram and apply `largestRectangleArea`.
- **Transformation**: `heights[j] = matrix[i][j] == 1 ? heights[j] + 1 : 0`.

---

## 🚀 How to Run

All solutions are written in TypeScript/JavaScript and can be run with:

```bash
# For any exercise file (e.g., exercise1.ts)
npx ts-node exercise1.ts

# Or if using Node.js with plain JS
node exercise1.js
```
