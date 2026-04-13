//this checks the number of variables declared in the code
export function countVariables(code) { 
  const matches = code.match(/(let|const|var)\s+/g) || []; 
  return matches.length; 
}