const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
teamGroup = [];
function appMenu() {
    createManager();
    function createManager(){
        console.log("Please build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your manager's name?",
                //validate user input here
            },
            {
                type: "input",
                name: "id",
                message: "What is your manager's ID?",
              
            },
            {
                type: "input",
                name: "email",
                message: "What is your manager's e-mail?",
              
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is your manager's office number?",
                
            },
            {
                //ask the user if they would like to add new employees in this function
                type: "list",
                name: "moreEmployees",
                message: "Would you like to add more employees?",
                choices: ["Intern", "Engineer", "No"],
               
            }]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            console.log(manager);
            teamGroup.push(manager);
            if (answers.moreEmployees == "Intern") {
                createIntern();
            }
            else if (answers.moreEmployees === "Engineer"){
                createEngineer();
            }
            else {
                buildHTML();
            }
        })
    }
}

// take whatever the user wants and save it to whatever object matches
function createEngineer(){
    console.log("Choose your team members!")
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's e-mail?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github username?",
        },
    
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        console.log(engineer);
        teamGroup.push(engineer);
        if (answers.moreEmployees == "Intern") {
            createIntern();
        }
        else if (answers.moreEmployees === "Engineer"){
            createEngineer();
        }
        else {
            buildHTML();
        }
    })
}


function createIntern(){
    console.log("Choose your team members!")
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Interns's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Interns's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Interns's e-mail?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the Intern's school?",
        },
    
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        console.log(intern);
        teamGroup.push(intern);
        if (answers.moreEmployees == "Intern") {
            createIntern();
        }
        else if (answers.moreEmployees === "Engineer"){
            createEngineer();
        }
        else {
            buildHTML();
        }
    })
}


function buildHTML(){
    // to-do: write to html file
    console.log("Write to file");
        
        fs.writeFile("main.html", , (err) =>{
            if (err) throw err;
        console.log("File = Saved");
        });
    }



appMenu();

