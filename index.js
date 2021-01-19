const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
     {
       type: "input",
       message: "What is your project's title?",
       name: "title"
    },
    {
        type: "input",
        message: "Describe your project",
        name: "description"
    },
    {
        type: "input",
        message: "What is the live link to your project?",
        name: "url",
    }, 
    {
        type: "input",
        message: "What are the steps required to install your project?",
        name: "installation",
    }, 
    {
        type: "input",
        message: "Provide instructions and examples of usage",
        name: "usage",
    }, 
    {
        type: "input",
        message: "Please provide a relative path link to a screenshot",
        name: "screenshot",
    }, 
    {  
        type: "list",
        message: "What type of license does this project hold?",
        name: "useLicense",
        choices: ["MIT", "Apache", "Public Domain"],
    },
    {
        type: "input",
        message: "Any guidelines on how you wish others to contribute?",
        name: "contribute",
    },
    {
        type: "input",
        message: "Are there any testing instructions?",
        name: "testing",
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "gitHub",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your name?",
        name: "userName",
    },
    ])
     .then((data) => {
        const { title, description, url, installation, usage, screenshot, useLicense, contribute, testing, gitHub, email, userName, } = data;
        switch (useLicense) {
            case "MIT": {
                let licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
                let licenseText =`This is free and unencumbered software released into the public domain.`
                break;
        }
            case "Apache": {
                let licenseBadge = "Apache"
                let licenseText = "Apache"
            }
            default: {" "
           }   break;
        };




        const generateMD = 
        `
# ${title} ${this.licenseBadge}\n 
## ${description}\n 
[View Live Site](${url})
## Table of Contents
* <a name="installation">Installation</a>
* <a name="usage">Usage</a>
* <a name="license">License</a>
* <a name="contributing">Contributing</a>
* <a name="tests">Tests</a>
* <a name="questions">Questions</a> \n
## [Installation](#installation) \n
${installation}\n
## [Usage](#usage) 
${usage}\n
![alt text](${screenshot})
## [License](#license)\n
${this.licenseText}
## Contributing
${contribute}
## Tests
${testing}
## Questions
For questions please reach out to [github.com/${gitHub}](github.com/${gitHub}) 
or email me at [${email}](mailto:${email})
 `       

                ;

fs.writeFile("README.MD", generateMD, err => err ? console.error : console.log("success")) 


     });








