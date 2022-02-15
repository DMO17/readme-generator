const inquirer = require("inquirer");
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require("fs");
const { generateReadmeFileCode, writeToFile } = require("./util");
const {
  readmeGeneratorQuestions,
  nextQuestionIdentifier,
  processTypeQuestions,
  lastSetOfQuestions,
  starterQuestions,
  installationNextStep,
  usageNextStep,
  testNextStep,
} = require("./questions");

const init = async () => {
  // prompt questions
  const startAnswers = await inquirer.prompt(starterQuestions);

  const nextAnswers = await inquirer.prompt(
    processTypeQuestions(startAnswers.requiredProcesses)
  );

  // const installNextStep = await inquirer.prompt(
  //   installationNextStep(startAnswers.requiredProcesses)
  // );

  // const nextStepUsage = await inquirer.prompt(
  //   usageNextStep(startAnswers.requiredProcesses)
  // );

  // const nextStepTest = await inquirer.prompt(
  //   testNextStep(startAnswers.requiredProcesses)
  // );

  const lastSetOfAnswers = await inquirer.prompt(lastSetOfQuestions);

  const allAnswers = {
    firstSet: startAnswers,
    secondSet: nextAnswers,
    // thirdSet: {
    //   install: installNextStep,
    //   usage: nextStepUsage,
    //   test: nextStepTest,
    // },
    lastSet: lastSetOfAnswers,
  };

  console.log(allAnswers);

  // use the answers to call the funtions to create each section of the readme file code.
  const readme = generateReadmeFileCode(allAnswers);

  // write to file
  writeToFile("readmeGenerated.md", readme);
};

init();
