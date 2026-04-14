import fs from "fs";
import path from "path";

export function getJSFiles(dir) {
  let results = [];

  const files = fs.readdirSync(dir);

  for (let file of files) {
    if (
      file === "node_modules" ||
      file === ".git" ||
      file === "dist" ||
      file === "build"
    ) continue;

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