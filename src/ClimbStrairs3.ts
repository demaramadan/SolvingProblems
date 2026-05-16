// التمرين 3: حساب عدد الطرق لتسلق الدرج
const climbStairsMath = (n: number): number => {
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  const psi = (1 - sqrt5) / 2;

  const fib = (Math.pow(phi, n + 1) - Math.pow(psi, n + 1)) / sqrt5;

  return Math.round(fib);
};

const explainClimbingStairs = (n: number): void => {
  console.log(`\n📊 Step: ${n}`);
  console.log(`✅ CountOfWays: ${climbStairsMath(n)}`);
};

explainClimbingStairs(1);
explainClimbingStairs(2);
explainClimbingStairs(3);
explainClimbingStairs(4);
explainClimbingStairs(5);
explainClimbingStairs(10);
