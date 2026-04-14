# Cognitive Load Analyzer

CLI tool to analyze JavaScript code complexity and estimate how difficult code is to understand using AST-based analysis.

## Features

* Detects nesting depth
* Measures file length
* Analyzes condition complexity
* Counts variables
* AST-based function and loop detection
* Cognitive load scoring system
* CLI flags for customization

## Installation

Run without installing:
npx divyansh-cognitive-load-analyzer

Install globally:
npm install -g divyansh-cognitive-load-analyzer

Run:
cla

## Usage

Basic:
cla

Verbose output:
cla --verbose

Limit file size:
cla --max-lines=100

## Example Output

Cognitive Load Analyzer

File: src/app.js
Nesting Depth: 4
Lines: 120
Condition Complexity: 3
Variables: 25
Functions: 6
Loops: 2
Score: 4/10

Suggestions:

* Reduce nesting
* Break large file
* Simplify conditions

## Project Structure

bin/ → CLI entry
lib/ → core logic
metrics/ → analysis modules
astAnalyzer.js → AST-based analysis

## How It Works

The tool scans JavaScript files, analyzes structure using AST parsing, and calculates a cognitive load score based on complexity metrics.

## Future Improvements

* Code smell detection
* AI-based suggestions
* Support for multiple languages
* VS Code extension

## Author

Divyansh
