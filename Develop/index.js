const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Variable to Add An Employee
const addEmployeesQs = () => {
  const questions = ([
    {
      type: 'list',
      message: 'Would you like to add another employee?',
      name: 'answer',
      choices: ["Yes, add an engineer.", "Yes, add an intern.", "No, I'm done adding employees."],
    }
  ])
  return inquirer.prompt(questions)
};

// Function to Add An Employee
const addEmployee = async () => {
  await addEmployeesQs()
  .then(response => {
    console.log(response.answer);

    switch(response.answer) {
      case "Yes, add an engineer.":
        console.log("You added an engineer")
        addEngineer();
        // ask();
        break;
      case "Yes, add an intern.":
        console.log("You added an intern")
        // addIntern();
        ask();
        break;
      case "No, I'm done adding employees.":
        console.log("You are done")
        // createHTML();
        break;
      default:
        console.log("It didn't work")
    }
  })
}

// Call the Add Employee Function
addEmployee();


// Variable to Add Engineer
const addEngineerQs = () => { 
  const questions = ([
        {
          type: 'input',
          message: 'What is your engineer\'s name?',
          name: 'name',
        },
        {
          type: 'input',
          message: 'What is their ID Number?',
          name: 'id',
        },
        {
          type: 'input',
          message: 'What is their email?',
          name: 'email',
        },
        {
          type: 'input',
          message: 'What is their Github user name?',
          name: 'github',
        }
      ])
        return inquirer.prompt(questions)
    };

  // Function to Add Engineer
  const addEngineer = async () => {
      await addEngineerQs()
      .then(response => {
        console.log(response);

        const name = response.name;
        const id = response.id;
        const email = response.email;
        const github = response.github;

        const x = new Engineer(name, id, email, github);

        console.log(x)
      })
  addEmployee();                                                                                                       
};


