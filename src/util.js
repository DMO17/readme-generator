const fs = require("fs");

const title = (answers) => {
  return `
  # ${answers.firstSet.title} ![${answers.lastSet.license}](https://img.shields.io/static/v1?label=${answers.lastSet.license}&message=License&color=green)`;
};

const tableOfContents = (answers) => {
  // const tOCArray = answers.firstSet.tableOfContent.split("");

  return answers.split(" ").forEach((each) => {
    return `
    - [${each}](#${each.toLowerCase()})
    
    `;
  });
};

// console.log(tableOfContents("description tests usage lisence install"));

const description = (answers) => {
  return `
## Description

${answers.firstSet.description}`;
};

const installation = (answers) => {
  return ` 
## Installation
  
Run the following script to install the packages required for the application:

\`\`\`
ADD TEXT HERE
\`\`\``;
};

const usage = (answers) => {
  return `
## Usage

To use the application run the following script:
  
\`\`\`
ADD TEXT HERE
\`\`\``;
};

const tests = (answers) => {
  return `
## Tests
  
To use the application run the following script:
  
\`\`\`
ADD TEXT HERE
\`\`\`
  `;
};

const contributors = (answers) => {
  return `
## Contributing
    
${answers.lastSet.contribution}`;
};

const license = (answers) => {
  return `
## License

${answers.lastSet.license}
  `;
};

const generateReadmeFileCode = (answers) => {
  return `
    ${title(answers)}

    ## Table of Contents

   
    
    ${description(answers)}
    
    ${usage(answers)}

    ${tests(answers)}

    ${contributors(answers)}
    
    ${license(answers)}
  `;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  generateReadmeFileCode,
  writeToFile,
};
