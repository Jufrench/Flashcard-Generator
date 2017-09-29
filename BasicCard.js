exports.BasicCard = BasicCard;
//exports.colombiaBasic = colombia;
exports.quizBasic = quizBasic;
const inquirer = require('inquirer');
const fs = require('fs');
//const sample = require('./sample'); ---> If I want to use the questions in a separate file, go to sample.

function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}

// ======= Quiz Basic Cards =========
function quizBasic(questionNum) {
    
  //console.log(sample.basicAnswers);
//  for (var i = 0; i < countryBasic.length; i++) {
    inquirer.prompt([
      {
        type: 'input',
        message: countryBasic[questionNum].front.white,
        name: 'correctAnswer'
      }
    ]).then((answer) => {

      if (answer.correctAnswer.toLowerCase() === countryBasic[questionNum].back.toLowerCase()) {
        console.log('Correct!'.magenta);
      } else {
        console.log('Incorrect!'.yellow);
        console.log('The correct answer is: ' + countryBasic[questionNum].back.magenta);
      }

      questionNum++;
      if (questionNum < countryBasic.length) {
        quizBasic(questionNum);
      } else {
        console.log('----------' + '\n' + 'Thanks for playing. Goodbye!'.red);
      }

    });
// }

}

const colombiaBasic = new BasicCard('What is the capital of Colombia?', 'Bogota');
const brazilBasic = new BasicCard('What is the capital of Brazil?', 'Brasilia');
const austriaBasic = new BasicCard('What is the capital of Austria', 'Vienna');
const hungaryBasic = new BasicCard('What is the capital of Hungary?', 'Budapest');
const italyBasic = new BasicCard('What is the capital of Italy?', 'Rome');

const countryBasic = [colombiaBasic, brazilBasic, austriaBasic, hungaryBasic, italyBasic];
