const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");



// Array to Store All Employee Objects
const employees = [];


// Variable to Add a Manager
const addManagerQs = () => {
    const questions = ([
      {
        type: 'input',
        message: 'What is your manager\'s name?',
        name: 'name',
        validate: async (input) => {
            if (!input) {
                return "Please enter a name for your manager."
            } 
            return true;
        }
      },
      {
        type: 'input',
        message: 'What is their ID Number?',
        name: 'id',
        validate: async (input) => {
            var regExp = /[a-zA-Z]/g;
            if (regExp.test(input) || input === "") {
                return "Please enter a number."
            } 
            return true;
        }
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
        validate: async (input) => {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(input)) {
                return "Please enter a valid email."
            } 
            return true;
        }
      },
      {
        type: 'input',
        message: 'What is their office number?',
        name: 'office',
        validate: async (input) => {
            var regExp = /[a-zA-Z]/g;
            if (regExp.test(input) || input === "") {
                return "Please enter a number."
            } 
            return true;
        }
      },
    ])
    return inquirer.prompt(questions)
};

// Function to Add A Manager
const addManager = async () => {
    await addManagerQs()
    .then(response => {
        console.log(response);

        const name = response.name;
        const id = response.id;
        const email = response.email;
        const office = response.office;

        const x = new Manager(name, id, email, office);
        employees.push(x);

        // console.log(x)
        })
    addEmployee();                                                                                                       
  };


// Call the Add Manager Function
addManager();


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
          addEngineer();
          break;
        case "Yes, add an intern.":
          addIntern();
          break;
        case "No, I'm done adding employees.":
          renderHTML();
          break;
        default:
          console.log("It didn't work")
      }
    })
  }
  
  
  // Variable to Add Engineer
  const addEngineerQs = () => { 
    const questions = ([
          {
            type: 'input',
            message: 'What is your engineer\'s name?',
            name: 'name',
            validate: async (input) => {
                if (!input) {
                    return "Please enter a name for your engineer."
                } 
                return true;
            }
          },
          {
            type: 'input',
            message: 'What is their ID Number?',
            name: 'id',
            validate: async (input) => {
                var regExp = /[a-zA-Z]/g;
                if (regExp.test(input) || input === "") {
                    return "Please enter a number."
                } 
                return true;
            }
          },
          {
            type: 'input',
            message: 'What is their email?',
            name: 'email',
            validate: async (input) => {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(input)) {
                    return "Please enter a valid email."
                } 
                return true;
            }
          },
          {
            type: 'input',
            message: 'What is their Github user name?',
            name: 'github',
            validate: async (input) => {
                if (!input) {
                    return "Please enter a Github user name for your engineer."
                } 
                return true;
            }
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
          employees.push(x);

        //   console.log(x);
        })
    addEmployee();                                                                                                       
  };

  // Variable to Add Intern
  const addInternQs = () => { 
    const questions = ([
          {
            type: 'input',
            message: 'What is your Intern\'s name?',
            name: 'name',
            validate: async (input) => {
                if (!input) {
                    return "Please enter a name for your intern."
                } 
                return true;
            }
          },
          {
            type: 'input',
            message: 'What is their ID Number?',
            name: 'id',
            validate: async (input) => {
                var regExp = /[a-zA-Z]/g;
                if (regExp.test(input) || input === "") {
                    return "Please enter a number."
                } 
                return true;
            }
          },
          {
            type: 'input',
            message: 'What is their email?',
            name: 'email',
            validate: async (input) => {
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!re.test(input)) {
                    return "Please enter a valid email."
                } 
                return true;
            }
          },
          {
            type: 'input',
            message: 'What school do they attend?',
            name: 'school',
            validate: async (input) => {
                if (!input) {
                    return "Please enter a school for your intern."
                } 
                return true;
            }
          }
        ])
          return inquirer.prompt(questions)
      };
  
    // Function to Add Intern
    const addIntern = async () => {
        await addInternQs()
        .then(response => {
          console.log(response);
  
          const name = response.name;
          const id = response.id;
          const email = response.email;
          const school = response.school;
  
          const x = new Intern(name, id, email, school);
          employees.push(x);

        //   console.log(x)
        })
    addEmployee();                                                                                                       
  };



// Call the Render Function  
function renderHTML() {
  fs.writeFile(outputPath, render(employees), (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}





// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
