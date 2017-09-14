module.exports = BasicCard;

function BasicCard(front, back) {
  this.front = front;
  this.back = back;
}

var ethiopia = new BasicCard('What is the capital of Ethiopia?', 'Addis Ababa');

console.log(ethiopia.front);
console.log(ethiopia.back);
