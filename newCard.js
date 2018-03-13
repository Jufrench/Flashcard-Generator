const inquirer = require('inquirer');
const basic = require('./BasicCard');
const cloze = require('./ClozeCard');
const main = require('./main');
const fs = require('fs');
const colors = require('colors');

exports.newCard = newCard;

function newCard() {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do next?'.white,
      choices: ['Create Basic card', 'Create Cloze card', new inquirer.Separator(), 'Quiz Basic cards', 'Quiz Cloze cards', new inquirer.Separator(), 'End'],
      name: 'next'
    }
  ]).then((answers) => {
    if (answers.next === 'End') {
      console.log('Goodbye!'.red);
      return
    }
    if (answers.next === 'Create Basic card') {
      newBasicCard();
    }
    if (answers.next === 'Create Cloze card') {
      newClozeCard();
    }
  });
}

function newBasicCard() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Card Front'.white,
      name: 'front'
    },
    {
      type: 'input',
      message: 'Card Back'.white,
      name: 'back'
    }
  ]).then((answers) => {

    let front = answers.front;
    let back = answers.back;
    let res = new basic.BasicCard(answers.front, answers.back);

    fs.appendFile('bank.json', 'Basic: ' + JSON.stringify(res), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('Card Added');
      newCard();
    });
  });
}// end of basic function

function newClozeCard() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Card Front'.white,
      name: 'front'
    },
    {
      type: 'input',
      message: 'Card Back'.white,
      name: 'back'
    }
  ]).then((answers) => {

    let front = answers.front;
    let back = answers.back;
    let res = new cloze.ClozeCard(answers.front, answers.back);

    fs.appendFile('bank.json', 'Basic: ' + JSON.stringify(res), (err) => {
      if (err) {
        return console.log(err);
      }
      console.log('Card Added');
      newCard();
    });
  });
}
