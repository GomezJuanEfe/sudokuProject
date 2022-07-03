/* Return the HTML elements of an specific sudoku index */
function findRowsAndColums(inp) {
  let ind = inp;
  let res = [];
  $('input').each(function(index, element) {
    if ($(element).data('id').includes(ind)) {
      res.push($(element));
    }
  });
  return res
}

/* Return all the HTML elements of an specific sudoku-block index */
function findBlock(inp) {
  let num = inp;
  let res = [];
  $('div .row > div').each(function (index, element) {
    if ($(element).data('bl') == num) {
      res.push($(element).find('input'));
    }
  });
  return res
}

/* Compare function */

function compareRowsColumns() {
  for (let i = 0; i < rowValues.length; i++) {
    if (rowValues[i][0].value == currentValue && $(rowValues[i][0]).data('id') !== currentId && rowValues[i][0].value !== '') {
      $(rowValues[i][0]).css('background-color', 'yellow');
      $((findRowsAndColums(currentId))[0]).css('background-color', 'yellow');
    }
  }
}

/* Return the actual position info needed */

let currentId, currentValue, currentBl, rowValues, columnValues, blockValues;

$('div.sudoku-container')
  .on('blur', 'div[data-bl]', function (event) {
    currentBl = $(event.currentTarget).data('bl');
    blockValues = findBlock(currentBl);
    console.log(blockValues);
  })
  .on('blur', 'input', function (event) {
    currentId = $(event.target).data('id');
    currentValue = event.target.value;
    rowValues = findRowsAndColums(currentId[1]);
    columnValues = findRowsAndColums(currentId[0]);
    console.log(rowValues);
    console.log(columnValues);
    compareRowsColumns();
  })


