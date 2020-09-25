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
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})


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