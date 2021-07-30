const generateMarkdown = (answers) => {
  // First create the Table of Contents header using template literals.   
  let toc = `## Table of Contents`;
//Then add selected content on the conditon that user input exists  - if so, concatenate using addition assignment operator. This adds a new line under the header Table of Content using template literals - this does not add the users answers yet.
  if (answers.installation !== '') toc += `
  - [Installation](#installation)`;

  if (answers.usage !== '') toc += `
  - [Usage](#usage)`;
  
  if (answers.features !== '') toc += `
  - [Features](#features)`;

  if (answers.contribute !== '') toc += `
  - [Contribute](#contribute)`;
  
  if (answers.credits !== '') toc += `
  - [Credits](#credits)`;

  if (answers.tests !== '') toc += `
  - [Tests](#tests)`;

  if (answers.license) toc += `
  - [License](#license)`;

  // Next create the main content for each section of the README using template literals 
  let sectionsContent = 
  `
  >Directions for use: Once you have customized your readme, remove any headings with no content and all the help text (including this). 

  # ${answers.title}
  
  ## Description 
  >Provide a short description explaining the what, why, and how of your project. 
  
  ${answers.description}

  `
  //insert the content of table of contents (generated above) into the main content.
  //the method used is interpolation
  // Add TOC to content of readme
  sectionsContent += toc;
  //Now we add the user input if it exists to add input to the placeholders. The user answers are added within the template literals markup.
  // If content exists, add Installation section
  if (answers.installation !== '')
  sectionsContent +=
  `

  ## Installation
  >Provide a step-by-step description of how to get the development environment running.  

  ${answers.installation}
  `
  ;
  
  // If content exists, add Usage section
  if (answers.usage !== '')
  sectionsContent +=

  `
  ## Usage 
  >Include further instructions and screenshots of project if applicable.

  ${answers.usage}

  `;
  
  // If content exists, add Features section
  if (answers.features !== '')
  sectionsContent +=

  `
  ## Features 
  >Include further instructions and screenshots of project if applicable.

  ${answers.features}

  `;
  // If content exists, add credits section
  if (answers.credits !== '')
  sectionsContent +=

  `
  ## Credits
  >List your collaborators, if any, with links to their GitHub profiles.
  >If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  >If you followed tutorials, include links to those here as well.  

  ${answers.credits}
 `;

  // If content exists, add contribute section
  if (answers.contribute !== '')
  sectionsContent +=
  `
  ## Contribute
  >If you created an application or package and would like other developers to contribute it.  

  ${answers.contribute}
`;
  
  // If content exists, add Tests section
  if (answers.tests !== '')
  sectionsContent +=
  `
  ## Tests
  >Go the extra mile and write tests for your application. Then provide examples on how to run them here.  

  ${answers.tests}
  `;

  // License section is required
  if (answers.license)
  sectionsContent +=
  `
 ## License
 This project is licensed under the MIT License

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
  `;
  //the users email and github username will be added - even if no content from input exists.
  sectionsContent +=
  `
  ## Questions
  Contact me if you have any questions about this project:

  - [Send me an email](mailto:${answers.email})

  You can find my projects on Github:
  - [Find me on Github](https://github.com/${answers.username}) 

  `
  return sectionsContent; //the return is necessary in this arrow function because there are multiple arguments.
  
}

module.exports = generateMarkdown;
