const inquirer = require("inquirer");
const fs = require("fs");
const { generateReadmeFileCode, writeToFile } = require("./util");

const init = () => {
  // prompt questions

  // use the answers to call the funtions to create each section of the readme file code.

  const readme = generateReadmeFileCode();

  console.log(readme);

  // write to file

  writeToFile("readmeGenerated.md", readme);
};

init();
