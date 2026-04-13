import fs from "fs";
import { getJSFiles } from "./scanner.js";
import { getNestingDepth } from "./metrics/nesting.js";
import { getFunctionLength } from "./metrics/functionLength.js";
import { getConditionComplexity } from "./metrics/conditions.js";
import { countVariables } from "./metrics/variables.js";
import { generateReport } from "./report.js";

export function analyzeProject() {
  console.log("\n📊 Cognitive Load Analyzer\n");

  const files = getJSFiles(process.cwd());

  if (files.length === 0) {
    console.log("No JavaScript files found.");
    return;
  }

  files.forEach(file => {
    const code = fs.readFileSync(file, "utf-8");

    const metrics = {
      depth: getNestingDepth(code),
      length: getFunctionLength(code),
      complexity: getConditionComplexity(code),
      variables: countVariables(code)
    };

    generateReport(file, metrics);
  });
}