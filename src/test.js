const inquirer = require("inquirer");
// inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

const testQuestion = [
  [
    {
      type: "input",
      name: `installationProcess`,
      message: `What is the projects installation process (first step)?`,
    },
    {
      type: "loop",
      name: "items",
      message: "Is there another installation process step?",
      questions: [
        {
          type: "input",
          name: "key",
          message: "What is the next step in the installation process?",
        },
      ],
    },
  ],
  [
    {
      type: "input",
      name: `testProcess`,
      message: `What is the projects test process (first step)?`,
    },
    {
      type: "loop",
      name: "items",
      message: "Is there another test process step?",
      questions: [
        {
          type: "input",
          name: "key",
          message: "What is the next step in the test process?",
        },
      ],
    },
  ],
];

const questtt = [
  {
    type: "input",
    name: `installationProcess`,
    message: `What is the projects installation process (first step)?`,
  },
  {
    type: "loop",
    name: "items",
    message: "Is there another installation process step?",
    questions: [
      {
        type: "input",
        name: "key",
        message: "What is the next step in the installation process?",
      },
    ],
  },
];

const eachQuestion = (array) => {
  return array.map((each) => {
    return each;
  });
};

const testing = async () => {
  const answerTests = await inquirer.prompt(eachQuestion(testQuestion));

  console.log(answerTests);
};

testing();
