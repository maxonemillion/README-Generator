// const choices = require('inquirer/lib/objects/choices');

function generateMarkdown(data) {

    return `
    
    # ${data.title}

    
    ## Description 
    ### ${data.description}
    
    -----

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [Information](#info)
    

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    This project is licensed by [${data.license}]

    ## Contribution
    ${data.contribution}

    ## Tests
    ${data.tests}

    ## Information
    [Github profile]("https://github.com/" + ${data.user})
    [Email]${data.email}

    `
}

module.exports = generateMarkdown; 