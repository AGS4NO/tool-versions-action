# Tool Versions Action V1

![CI](https://github.com/actions/typescript-action/actions/workflows/ci.yml/badge.svg)
[![CodeQL](https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml)
[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)
[![dist/](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml/badge.svg)](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml)
[![Linter](https://github.com/actions/typescript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)

This action reads versions from an asdf compatible `.tool-versions` file and
sets the versions as outputs in your workflow.

Variables are available in the following format:
`${{ steps.tool-versions-action.outputs.nodejs-version }}`

Where `tool-versions-action` is defined as the action's step ID.

## Usage

To include the action in a workflow in another repository, you can use the
`uses` syntax with the `@` symbol to reference a specific branch, tag, or commit
hash.

```yaml
steps:
  - name: Checkout
    id: checkout
    uses: actions/checkout@v4

  - name: Parse Tool Versions
    id: tool-versions-action
    uses: AGS4NO/tool-versions-action@v1
    with:
      file: .tool-versions

  - name: Print Tool Versions Output
    id: output
    run: echo "NodeJS Version ${{ steps.tool-versions-action.outputs.nodejs-version }}"

  - name: Setup Node.js
    id: setup-node
    uses: actions/setup-node@v4
    with:
      node-version: ${{ steps.tool-versions-action.outputs.nodejs-version }}
      cache: npm

```
