$('div.sudoku-container')
  .on('blur', 'input', function (event) {
    checkSudoku();
  })
  