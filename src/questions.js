const starterQuestions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "tableOfContent",
    message:
      "What are the subtitles of each section of your readme to form a table of contents?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description for your Project",
  },
  {
    type: "checkbox",
    name: "requiredProcesses",
    message:
      "Check the box if your project requires any of the following procedures",
    choices: [
      { name: "installation", value: "installation" },
      { name: "usage", value: "usage" },
      { name: "tests", value: "tests" },
    ],
  },
];

const processTypeQuestionssssss = [
  {
    type: "input",
    name: "installProcess",
    message: "What is the projects installations process?",
  },
  {
    type: "input",
    name: "usageProcess",
    message: "What are the scripts needed to run the application? ?",
  },
  {
    type: "input",
    name: "testProcess",
    message: "What is the test script/process ?",
  },
];

const processTypeQuestions = (userCheckedProcesses) => {
  const processTypeObj = userCheckedProcesses.map((each) => {
    const obj = {
      type: "input",
      name: `${each}Process`,
      message: `What is the projects ${each} process?`,
    };

    return obj;
  });

  return processTypeObj;
};

// processTypeQuestions(array);

const lastSetOfQuestions = [
  {
    type: "input",
    name: "contribution",
    message: "How can people contribute to this app?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license from the list below?",
    choices: ["MIT", "R", "L"],
  },
  {
    type: "input",
    name: "gitHubUsername",
    message: "What is your GitHub Username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is email address?",
  },
];

module.exports = {
  starterQuestions,
  processTypeQuestions,
  lastSetOfQuestions,
};
