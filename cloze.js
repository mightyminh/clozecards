var Cloze = function(text, cloze) {

    this.text = text;
    this.cloze = this.text.match(/\(([^)]+)\)/)[1]; //some code to see if the texts match
    this.printCloze = function() {
        console.log(this.cloze);
    }
    this.printText = function() {
        console.log(this.text);
    }

    this.message = this.text.replace('(' + this.cloze + ')', '________');

}

Cloze.prototype.printAnswer = function() {
    //code from internet

    console.log('Incorrect. Here is the full sentence: \n' + this.text.replace(/[{()}]/g, ''));
}


module.exports = Cloze;