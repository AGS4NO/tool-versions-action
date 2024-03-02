# Tool Versions Action V1

![CI](https://github.com/actions/typescript-action/actions/workflows/ci.yml/badge.svg)
[![CodeQL](https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/actions/typescript-action/actions/workflows/codeql-analysis.yml)
[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)
[![dist/](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml/badge.svg)](https://github.com/actions/typescript-action/actions/workflows/check-dist.yml)
[![Linter](https://github.com/actions/typescript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)

This action reads versions from an asdf compatible `.tool-versions` file and
sets the versions as environment variables in your workspace.

Variables are available in the following format: `TOOL_VERSION=X.X.X`.

## Usage

To include the action in a workflow in another repository, you can use the
`uses` syntax with the `@` symbol to reference a specific branch, tag, or commit
hash.

```yaml
steps:
  - name: Checkout
    id: checkout
    uses: actions/checkout@v4

  - name: Test Local Action
    id: tool-versions-action
    uses: AGS4NO/tool-versions-action@v1 # Commit with the `v1` tag
    with:
      file: .tool-versions

  - name: Print Output
    id: output
    run: echo "${{ env.NODEJS_VERSION }}"
```
