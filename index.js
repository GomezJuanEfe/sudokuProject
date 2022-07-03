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
  let res;
  $('div .row > div').each(function (index, element) {
    if ($(element).data('bl') == num) {
      res = $(element).find('input');
    }
  });
  return res
}

/* Compare the values of a column or a row */

function compareRowsColumns(elem) {
  $(elem).each(function(index){
    elem[index].css('background-color', 'white');
  })
 
  for (let i = 0; i < elem.length; i++) {
    if (elem[i][0].value == currentValue && $(elem[i][0]).data('id') !== currentId && elem[i][0].value !== '') {
      $(elem[i][0]).css('background-color', 'yellow');
      $((findRowsAndColums(currentId))[0]).css('background-color', 'yellow');
    }
  }
}

/* Compare the values of a column or a row */

function compareBlock(elem) {
  $(elem).each(function(index){
    if ($(elem).value == currentValue && $(elem).data('id') !== currentId && elem.value !== '') {
      $(elem).css('background-color', 'yellow');
      $((findRowsAndColums(currentId))).css('background-color', 'yellow');
    }
  })
}

/* Return the actual position info needed */

let currentId, currentValue, currentBl, rowValues, columnValues, blockValues;

$('div.sudoku-container')
  .on('blur', 'div[data-bl]', function (event) {
    currentBl = $(event.currentTarget).data('bl');
    blockValues = findBlock(currentBl);
    compareBlock(blockValues);
    // console.log(blockValues);
  })
  .on('blur', 'input', function (event) {
    currentId = $(event.target).data('id');
    currentValue = event.target.value;
    rowValues = findRowsAndColums(currentId[1]);
    columnValues = findRowsAndColums(currentId[0]);
    compareRowsColumns(rowValues);
    compareRowsColumns(columnValues);
  })

  function restriction() {
    var e = event || window.event;  // get event object
    var key = e.keyCode || e.which; // get key cross-browser
  
    if (key <= 48 || key > 57) { //if it is not a number ascii code
        //Prevent default action, which is inserting character
        if (e.preventDefault) e.preventDefault(); //normal browsers
        e.returnValue = false; //IE
    }
  }