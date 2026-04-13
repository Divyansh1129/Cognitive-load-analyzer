//recursivley scan the project directory and return a list of all the js files in the project, excluding node_modules and .git directories

import fs from "fs"; 
import path from "path"; 

export function getJSFiles(dir) { 
  let results = []; 

  const files = fs.readdirSync(dir); 

  for (let file of files) { 
    if (file === "node_modules" || file === ".git") continue; 

    const fullPath = path.join(dir, file); 
    const stat = fs.statSync(fullPath); 

    if (stat.isDirectory()) { 
      results = results.concat(getJSFiles(fullPath)); 
    } else if (file.endsWith(".js")) { 
      results.push(fullPath); 
    }
  }

  return results; 
}