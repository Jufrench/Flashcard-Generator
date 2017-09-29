const basic = require('./BasicCard');
const cloze = require('./ClozeCard');
const inquirer = require('inquirer');
const newCard = require('./newCard')
const quiz = require('./quiz');
const fs = require('fs');
const colors = require('colors');

console.log('|=========================================|'.red + '\n' + '|=========='.red + ' Flashcard Generator '.white + '==========|'.red + '\n' + '|=========================================|'.red);
inquirer.prompt([
  {
    type: 'list',
    message: 'What do you want to do?'.white,
    choices: ['Create Basic card', 'Create Cloze card', new inquirer.Separator(), 'Quiz Basic cards', 'Quiz Cloze cards', new inquirer.Separator(), 'Clear Cards'],
    name: 'Flashcards'
  }
]).then((answers) => {

  // ============= If BASIC, then ============
  if (answers.Flashcards === 'Create Basic card') {
    inquirer.prompt([
      {
        type: 'input',
        message: 'Card Front',
        name: 'front'
      },
      {
        type: 'input',
        message: 'Card Back',
        name: 'back'
      }
    ]).then((answers) => {

        let front = answers.front;
        let back = answers.back;
        let res = new basic.BasicCard(answers.front, answers.back);

        // append card to json file
        fs.appendFile('bank.json',  '\n' + JSON.stringify(res), (err) => {
          if (err) {
            return console.log(error);
          } else {
            console.log('Card added');
            newCard.newCard();
          }
        });

      });
    }

    // ============= If CLOZE, then ============
    if (answers.Flashcards === 'Create Cloze card') {
        inquirer.prompt([
          {
            type: 'input',
            message: 'Card Front',
            name: 'front'
          },
          {
            type: 'input',
            message: 'Card Back',
            name: 'back'
          }
        ]).then((answers) => {

            let front = answers.front;
            let back = answers.back;
            let res = new cloze.ClozeCard(answers.front, answers.back);

            fs.appendFile('bank.json', '\n' + JSON.stringify(res), (err) => {
              if (err) {
                return console.log(error);
              }
              console.log('Card added'.red);
              newCard.newCard();
            });
          });
        }

      // ======== Basic Quiz ===================
        if (answers.Flashcards === 'Quiz Basic cards') {
          basic.quizBasic(0);
        }

      // ======== Clear Cards ==================

        if (answers.Flashcards === 'Clear Cards') {
          clearCards();
          function clearCards() {
            fs.writeFile('bank.json', '', (err) => {
              if (err) {
                console.log(err);
                return;
              } else {
                console.log('Card Bank Cleared'.red);
                newCard.newCard();
              }
            });
          }
        }


  });
