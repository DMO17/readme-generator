const inquirer = require("inquirer");
const { generateReadmeFileCode } = require("./util");

const init = () => {
  // prompt questions

  // use the answers to call the funtions to create each section of the readme file code.

  const readme = generateReadmeFileCode();

  console.log(readme);
  // write to file
};

init();
