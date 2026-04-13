export function getConditionComplexity(code) { 
  const matches = code.match(/if\s*\(.*\)/g) || []; 

  let complexity = 0; 

  matches.forEach(cond => { 
    if (cond.includes("&&") || cond.includes("||")) { 
      complexity++; 
    }
  });

  return complexity; 
}