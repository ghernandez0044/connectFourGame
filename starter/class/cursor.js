const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  left() {
    Screen.addCommand('c', 'Move one space to the left!', () => {
      Screen.setGrid(this.row + 1, this.column, 'O')
    })
  }

  right() {
    // Move cursor right
    Screen.setGrid(this.row - 1, this.column, 'O')
  }

  up(){

  }

  down(){
    
  }

}


module.exports = Cursor;
