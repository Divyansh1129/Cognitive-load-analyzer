import * as acorn from "acorn";

export function analyzeAST(code) {
  const ast = acorn.parse(code, { ecmaVersion: "latest" });

  let functionCount = 0;
  let loopCount = 0;

  walk(ast);

  function walk(node) {
    if (!node) return;

    switch (node.type) {
      case "FunctionDeclaration":
      case "ArrowFunctionExpression":
        functionCount++;
        break;

      case "ForStatement":
      case "WhileStatement":
        loopCount++;
        break;
    }

    for (let key in node) {
      if (typeof node[key] === "object") {
        if (Array.isArray(node[key])) {
          node[key].forEach(walk);
        } else {
          walk(node[key]);
        }
      }
    }
  }

  return { functionCount, loopCount };
}