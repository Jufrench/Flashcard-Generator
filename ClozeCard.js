module.exports = ClozeCard;

function ClozeCard(fulltext, cloze, partial) {
  this.fulltext = fulltext;
  this.cloze = cloze;
  this.partial = partial;
}

var ethiopiaCloze = new ClozeCard('Addis Ababa is the capital of Ethiopia', 'Addis Ababa', 'is the capital of Ethiopia');

console.log(ethiopiaCloze.fulltext);
console.log(ethiopiaCloze.cloze);
console.log(ethiopiaCloze.partial);
