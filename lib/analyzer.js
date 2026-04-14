import fs from "fs";
import ora from "ora";
import { getJSFiles } from "./scanner.js";
import { getNestingDepth } from "./metrics/nesting.js";
import { getFunctionLength } from "./metrics/functionLength.js";
import { getConditionComplexity } from "./metrics/conditions.js";
import { countVariables } from "./metrics/variables.js";
import { analyzeAST } from "./astAnalyzer.js";
import { generateReport } from "./report.js";

export function analyzeProject(options = {}) {
  console.log("\nCognitive Load Analyzer\n");

  const spinner = ora("Analyzing project...").start();

  const files = getJSFiles(process.cwd());

  if (files.length === 0) {
    spinner.fail("No JavaScript files found.");
    return;
  }

  files.forEach(file => {
    const code = fs.readFileSync(file, "utf-8");

    const astMetrics = analyzeAST(code);

    const metrics = {
      depth: getNestingDepth(code),
      length: getFunctionLength(code),
      complexity: getConditionComplexity(code),
      variables: countVariables(code),
      functions: astMetrics.functionCount,
      loops: astMetrics.loopCount
    };

    if (options.maxLines && metrics.length > options.maxLines) return;

    generateReport(file, metrics, options);
  });

  spinner.succeed("Analysis complete");
}