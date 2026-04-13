#!/usr/bin/env node
//this would work as the tigger button for the whole project, it would call the main function from the analyzer.js file which would then call all the other functions in the project to analyze the codebase and generate the report

import { analyzeProject } from "../lib/analyzer.js";

analyzeProject();