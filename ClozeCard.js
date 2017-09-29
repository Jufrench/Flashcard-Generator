exports.ClozeCard = ClozeCard;

function ClozeCard(text, cloze) {
  this.text = text;
  this.cloze = cloze;
  this.partial = text.replace(cloze, '...');
  // this.makePartial = function() {
  //   var partial = this.fulltext.replace(cloze, '...');
  //   return partial;
  // };
}
