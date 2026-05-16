// @ts-nocheck
// Jump Game
const canJump = (arr: number[]): boolean => {
  let maxReach = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + arr[i]);
    if (maxReach >= arr.length - 1) {
      return true;
    }
  }

  return false;
};
let arr: number[] = [2, 3, 1, 1, 4];
let arr2: number[] = [3, 2, 1, 0, 4];
console.log("[" + arr.join(", ") + "]" + " => " + canJump(arr)); // true
console.log("[" + arr2.join(", ") + "]" + " => " + canJump(arr2)); // false
