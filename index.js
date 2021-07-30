// External packages
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require ('util');
const generateMarkdown = require ('./utils/generateMarkdown.js');
const writeFileAsync = util.promisify (writeToFile);

// Inquirer prompts for answers
const promptUser = () => {
  return inquirer.prompt ([
    {
        //I added instructions to let the user know what to expect.
      type: 'confirm',
      message: 'Add content when prompted. If no input is received, that section will not be added to your file. Enter to continue.',
      name: 'instructions',
    },

    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a short description of your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What steps are required to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions on how to use this project.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'If your project has a lot of features, include them here.',
      name: 'features',
    },
    {
      type: 'input',
      message: 'Include guidelines on how other developers can contribute to your project.',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'List your collaborators, third-party assets, and/or any tutorials that made your project possible.',
      name: 'credits',
    },
    {
      type: 'input',
      message: 'If applicable, provide any tests written for your application and provide examples on how to run them.',
      name: 'tests',
    },
    {
      type: 'confirm',
      message: 'Would you like to include a MIT license?',
      name: 'license',
    },
  ]);
};
// TODO: Create a function to write README file
function writeToFile (fileName, data) {
  fs.writeFile (fileName, data, err => {
    if (err) {
      return console.log (err);
    }
    console.log ('Success! Your README.md file has been generated');
  });
}

// TODO: Create a function to initialize app
const init = () => {
  promptUser ()
    .then (answers =>
      writeFileAsync ('./results/README.md', generateMarkdown (answers))
    )
    .then (() => console.log ('Successfully generated your README file.'))
    .catch (err => console.error (err));
};

init ();
