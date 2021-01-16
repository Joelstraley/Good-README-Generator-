const fs = require('fs');
const inquirer = require('inquirer');

// Contributing, Tests, and Questions

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
        choices: ["MIT", "Public Domain", ],
    },

   
    ])
     .then((data) => {
        const { title, description, url, installation, usage, screenshot, license,  } = data;
        const generateMD =(
        switch (license) {
            case 'MIT':
            `
        # ${title}\n 'MIT': [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)## 
        ${description}\n 
        [View Live Site](${url})\n 
        ## Table of Contents\n \n
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
        ## [License](#license)`

                `MIT License

                Copyright (c) 2021
                
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.`
                break;
            case 'Public Domain':
                `# ${title}\n ## 
                ${description}\n 
                [View Live Site](${url})\n 
                ## Table of Contents\n \n
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
                ## [License](#license)`
        
                        `MIT License
        
                        Copyright (c) 2021
                        
                        Permission is hereby granted, free of charge, to any person obtaining a copy
                        of this software and associated documentation files (the "Software"), to deal
                        in the Software without restriction, including without limitation the rights
                        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        copies of the Software, and to permit persons to whom the Software is
                        furnished to do so, subject to the following conditions:
                        
                        The above copyright notice and this permission notice shall be included in all
                        copies or substantial portions of the Software.
                        
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                        SOFTWARE.`







            
        }
        
        

        

                );

fs.writeFile("README.MD", generateMD, err => err ? console.error : console.log("success")) 


     });
