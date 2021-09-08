var shell = require('shelljs')

let username = process.argv[2]


/**
 * Check that git is installed
 */
if (!shell.which('git')) {
    shell.echo('Git must be installed for this command to be successful')
    shell.exit(1)
}

/**
 * Validate username parameter
 */
if (!username.match(/^([A-Z][a-z]+\s?)+$/g)) {
    shell.echo('Invalid user name passed')
    return shell.exit(1)
}


/**
 * Generate filename
 */
let filename = username.replace(/\s+/g, '-').toLocaleLowerCase();


/**
 * Ensure file does not exist
 */
let fileExist = false
shell.ls('content/resumes').forEach(function(file) {
    if (file == `${filename}.md`) {
        fileExist = true
    }
})

if (fileExist) {
    shell.echo(`Resume for "${username}" already exist`)
    shell.exit(1)
}

/**
 * Checkout to new branch
 */
shell.exec(`git checkout -B feature/resume/${filename}`)

/**
 * copy files
 */
shell.cp('-f', 'stub/resume/default.md', `content/resumes/${filename}.md`)
shell.cp('-f', 'stub/resume/default-payload.js', `resume-payloads/${filename}.js`)

shell.echo(`Resume for ${username} has been created. Do well to modify the contents of /content/resumes/${filename}.md and /resume-payloads/${filename}.js`)