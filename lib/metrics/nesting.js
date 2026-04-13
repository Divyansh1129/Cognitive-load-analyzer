//this chcks the nesting depth of the code, which is a measure of how many levels of nested blocks (like loops, conditionals, functions) there are in the code. A high nesting depth can indicate complex code that may be harder to understand and maintain.
export function getNestingDepth(code) {

  let maxDepth = 0; 
  let currentDepth = 0; 

  for (let char of code) { 
    if (char === "{") { 
      currentDepth++; 
      maxDepth = Math.max(maxDepth, currentDepth); 
    } else if (char === "}") { 
      currentDepth--; 
    }
  }

  return maxDepth; 
}