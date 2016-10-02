# Gap Lint Tool
GAP-Lint is a linter tool to detect errors and problems in GAP code. The grammar is defined in BNF and uses ANTLR4 to
generate parsers.

# Try Me

* [GAP Lint on Codemirror](https://mcmartins.github.io/gap-codemirror)

## How it works

GAP is a structured language and GAPLint traverses the code line by line looking for code quality compliance violations.
At the moment GAPLint does not perform static analysis.