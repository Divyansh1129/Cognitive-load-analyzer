import chalk from "chalk";

export function generateReport(file, metrics) {
  console.log(chalk.blue(`\n📄 ${file}`));

  console.log(`Nesting Depth: ${metrics.depth}`);
  console.log(`Lines: ${metrics.length}`);
  console.log(`Condition Complexity: ${metrics.complexity}`);
  console.log(`Variables: ${metrics.variables}`);

  let score = 10;

  if (metrics.depth > 3) score -= 2;
  if (metrics.length > 100) score -= 2;
  if (metrics.complexity > 2) score -= 2;
  if (metrics.variables > 20) score -= 2;

  let color;
  if (score > 7) color = chalk.green;
  else if (score > 4) color = chalk.yellow;
  else color = chalk.red;

  console.log(color(`Score: ${score}/10`));

  console.log(chalk.gray("💡 Suggestions:"));

  if (metrics.depth > 3) console.log("- Reduce nesting");
  if (metrics.length > 100) console.log("- Break large file");
  if (metrics.complexity > 2) console.log("- Simplify conditions");
  if (metrics.variables > 20) console.log("- Reduce variable usage");
}