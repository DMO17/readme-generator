const starterQuestions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
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
      { name: "Installation", value: "installation" },
      { name: "Usage", value: "usage" },
      { name: "Tests", value: "tests" },
      { name: "None of these procedures are required", value: "none" },
    ],
  },
];

const processTypeQuestions = (userCheckedProcesses) => {
  if (!userCheckedProcesses.includes("none")) {
    return userCheckedProcesses.map((each) => {
      const obj = {
        type: "input",
        name: `${each}Process`,
        message: `What is the projects (first) ${each} process step?`,
      };

      return obj;
    });
  }
};

const installationNextStep = (userCheckedProcesses) => {
  if (userCheckedProcesses.includes("installation")) {
    return [
      {
        type: "loop",
        name: "installationRepeat",
        message: "Is there another installation process step?",
        questions: [
          {
            type: "input",
            name: "installationKey",
            message: "What is the next step in the installation process?",
          },
        ],
      },
    ];
  }
};

const usageNextStep = (userCheckedProcesses) => {
  if (userCheckedProcesses.includes("usage")) {
    return [
      {
        type: "loop",
        name: "usageRepeat",
        message: "Is there another usage process step?",
        questions: [
          {
            type: "input",
            name: "usageKey",
            message: "What is the next step in the usage process?",
          },
        ],
      },
    ];
  }
};

const testNextStep = (userCheckedProcesses) => {
  if (userCheckedProcesses.includes("tests")) {
    return [
      {
        type: "loop",
        name: "testRepeat",
        message: "Is there another test process step?",
        questions: [
          {
            type: "input",
            name: "testKey",
            message: "What is the next step in the test process?",
          },
        ],
      },
    ];
  }
};

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
    choices: [
      {
        name: "MIT",
        value: ["MIT", "The MIT License"],
      },
      {
        name: "Mozilla",
        value: ["Mozilla", "Mozilla Public License 2.0"],
      },
      {
        name: "Zlib",
        value: ["Zlib", "The zlib/libpng License"],
      },
      {
        name: "IBM",
        value: ["IBM", "IBM Public License Version 1.0"],
      },
      {
        name: "Apache",
        value: ["Apache", "Apache 2.0 License"],
      },
    ],
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

const asf = [
  "installation",
  "usage",
  "tests",
  "None of these procedures are required",
];

module.exports = {
  starterQuestions,
  processTypeQuestions,
  installationNextStep,
  usageNextStep,
  testNextStep,
  lastSetOfQuestions,
};
