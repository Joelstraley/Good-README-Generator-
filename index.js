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
        type: "checkbox",
        message: "What type of license does this project hold?",
        name: "license",
        choices: ["MIT", "Public Domain"],
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
        message: "What is your email address",
        name: "email",
    },
    ])
     .then((data) => {
        const { title, description, url, installation, usage, screenshot, license, testing } = data;
        const generateMD = 
        }`
# ${title}\n 
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
## [License](#license)\n`

        

                ;

fs.writeFile("README.MD", generateMD, err => err ? console.error : console.log("success")) 


     });








