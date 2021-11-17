const inquirer = require("inquirer");
const fs = require("fs");
const { generateReadmeFileCode, writeToFile } = require("./util");
const {
  readmeGeneratorQuestions,
  nextQuestionIdentifier,
  processTypeQuestions,
  lastSetOfQuestions,
} = require("./questions");

const init = async () => {
  // prompt questions

  const startAnswers = await inquirer.prompt(readmeGeneratorQuestions);

  // const nextAnswers = await inquirer.prompt(processTypeQuestions(startAnswers));
  // console.log(nextAnswers);

  const lastSetOfAnswers = await inquirer.prompt(lastSetOfQuestions);

  const allAnswers = {
    firstSet: startAnswers,
    // secondSet: nextAnswers,
    lastSet: lastSetOfAnswers,
  };

  console.log(allAnswers);
  // use the answers to call the funtions to create each section of the readme file code.

  const readme = generateReadmeFileCode();

  // write to file

  writeToFile("readmeGenerated.md", readme);
};

init();
