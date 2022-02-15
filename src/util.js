const fs = require("fs");

const randomColor = () => {
  const colors = ["green", "yellow", "blue", "red", "white", "pink"];
  const randomColorsIndex = Math.floor(Math.random() * colors.length);

  return colors[randomColorsIndex];
};

const title = (answers) => {
  return `
  # ${answers.firstSet.title} ![${
    answers.lastSet.license[0]
  }](https://img.shields.io/static/v1?label=${
    answers.lastSet.license[0]
  }&message=License&color=${randomColor()})`;
};

const tableOfContents = (answers) => {
  return `
## Table of Contents 

- [Description](#description)
${
  answers.secondSet.installationProcess ? "- [Installation](#installation)" : ""
}
${answers.secondSet.usageProcess ? "- [Usage](#usage)" : ""}
${answers.secondSet.testsProcess ? "- [Tests](#tests)" : ""}
- [Contribution](#contribution)
- [License](#license)
- [Contact](#contact)`;
};

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
${answers.secondSet.installationProcess}
\`\`\``;
};

const usage = (answers) => {
  return `
## Usage

To use the application run the following script:
  
\`\`\`
${answers.secondSet.usageProcess}
\`\`\``;
};

const tests = (answers) => {
  return `
## Tests
  
To use the application run the following script:
  
\`\`\`
${answers.secondSet.testsProcess}
\`\`\`
  `;
};

const contributors = (answers) => {
  return `
## Contribution
    
${answers.lastSet.contribution}`;
};

const license = (answers) => {
  return `
## License

${answers.lastSet.license[1]}
  `;
};

const contact = (answers) => {
  return `
## Contact 

If you have any Questions contact me using the following:

- GITHUB: https://github.com/${answers.lastSet.gitHubUsername}

- EMAIL: ${answers.lastSet.email}
  `;
};

const generateReadmeFileCode = (answers) => {
  return `
    ${title(answers)}

    ${tableOfContents(answers)}

    ${description(answers)}

    ${answers.secondSet.installationProcess ? installation(answers) : ""}
    
    ${answers.secondSet.usageProcess ? usage(answers) : ""}

    ${answers.secondSet.testsProcess ? tests(answers) : ""}

    ${contributors(answers)}
    
    ${license(answers)}

    ${contact(answers)}
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
