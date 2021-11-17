const title = (answers) => {
  return `# TITLE ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=green)`;
};

const tableOfContents = (answers) => {
  return `
  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [License](#license)
    `;
};

const description = (answers) => {
  return `## Description

        ADD TEXT HERE`;
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
  return `## Contributing
    
    ADD TEXT HERE`;
};

const license = (answers) => {
  return `
  ## License

  ADD TEXT HERE
  `;
};

const generateReadmeFileCode = (answers) => {
  return `
    ${title(answers)}

    ${tableOfContents(answers)}
    
    ${description(answers)}
    
    ${usage(answers)}

    ${tests(answers)}

    ${contributors(answers)}
    
    ${license(answers)}
  `;
};

module.exports = {
  title,
  tableOfContents,
  description,
  installation,
  usage,
  tests,
  contributors,
  license,
  generateReadmeFileCode,
};
