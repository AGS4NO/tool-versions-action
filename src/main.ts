import * as core from '@actions/core'
import * as fs from 'fs'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    // Get the path to the ASDF tool-versions file from input
    const toolVersionsFilePath = core.getInput('file')
    // Check if the file exists
    if (!fs.existsSync(toolVersionsFilePath)) {
      throw new Error(`File not found: ${toolVersionsFilePath}`)
    }
    core.debug(`Loading tool versions from ${toolVersionsFilePath} ...`)
    // Read the contents of the tool-versions file
    const toolVersionsFileContent = fs.readFileSync(
      toolVersionsFilePath,
      'utf8'
    )

    // Parse the tool-versions file and set environment variables
    const lines = toolVersionsFileContent.split('\n')
    for (const line of lines) {
      // Skip comments and empty lines
      if (!line.trim() || line.trim().startsWith('#')) {
        return
      }

      const [tool, version] = line.split(/\s+/)
      const envVarName = `${tool.toUpperCase()}_VERSION`
      core.debug(`Setting ${envVarName} to ${version}`)
      core.exportVariable(envVarName, version)
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}
