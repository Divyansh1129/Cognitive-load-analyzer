import chalk from "chalk";

export function generateReport(file, metrics, options) {
  console.log(chalk.blue(`\n${file}`));

  console.log(`Nesting Depth: ${metrics.depth}`);
  console.log(`Lines: ${metrics.length}`);
  console.log(`Condition Complexity: ${metrics.complexity}`);
  console.log(`Variables: ${metrics.variables}`);
  console.log(`Functions: ${metrics.functions}`);
  console.log(`Loops: ${metrics.loops}`);

  let score = 10;

  if (metrics.depth > 3) score -= 2;
  if (metrics.length > 100) score -= 2;
  if (metrics.complexity > 2) score -= 2;
  if (metrics.variables > 20) score -= 2;
  if (metrics.functions > 10) score -= 1;
  if (metrics.loops > 5) score -= 1;

  let color;
  if (score > 7) color = chalk.green;
  else if (score > 4) color = chalk.yellow;
  else color = chalk.red;

  console.log(color(`Score: ${score}/10`));

  if (options.verbose) {
    console.log(chalk.gray("Suggestions:"));

    if (metrics.depth > 3) console.log("- Reduce nesting");
    if (metrics.length > 100) console.log("- Break large file");
    if (metrics.complexity > 2) console.log("- Simplify conditions");
    if (metrics.variables > 20) console.log("- Reduce variable usage");
  }
}