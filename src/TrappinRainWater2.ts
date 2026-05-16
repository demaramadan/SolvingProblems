// @ts-nocheck
// التمرين 2 :Trapping Rainwater
const visualizeRainwater = (heights: number[]): void => {
  const waterLevels = [];

  for (let i = 0; i < heights.length; i++) {
    let leftMax = 0;
    let rightMax = 0;

    for (let j = 0; j < i; j++) {
      leftMax = Math.max(leftMax, heights[j]);
    }

    for (let j = i + 1; j < heights.length; j++) {
      rightMax = Math.max(rightMax, heights[j]);
    }

    const water = Math.max(0, Math.min(leftMax, rightMax) - heights[i]);
    waterLevels.push(water);
  }

  const maxHeight = Math.max(...heights);

  console.log("\nVisualization:");

  for (let level = maxHeight; level > 0; level--) {
    let line = "";
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] >= level) {
        line += "█ ";
      } else if (heights[i] + waterLevels[i] >= level) {
        line += "* ";
      } else {
        line += ". ";
      }
    }
    console.log(`${level.toString().padStart(2)} │ ${line}`);
  }

  console.log("   └" + "─".repeat(heights.length * 2));
  console.log(
    `     ${Array.from({ length: heights.length }, (_, i) => i).join(" ")}`,
  );

  const totalWater = waterLevels.reduce((sum, w) => sum + w, 0);
  console.log(`\n💧 Total Trapped Water: ${totalWater}`);
};

const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
visualizeRainwater(heights);
