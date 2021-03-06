/* Return the HTML elements of an specific sudoku index */
function findRowsAndColums(inp) {
  let ind = inp;
  let res = [];
  $('input').each(function (index, element) {
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

/* Find repeated values on columns and rows and change the css or the background */

function findRepeatedColRow(arr) {
  let num = [];
  arr.forEach(e => {
    if (e[0].value !== '') {
      num.push(e[0].value);
    }
  });
  let repeated = num.filter((item, index) => index !== num.indexOf(item));
  arr.forEach(e => {
    if (repeated.includes(e[0].value)) {
      $(e[0]).addClass('wrong');
    }
  });
}

/* Find repeated values on columns and rows and change the css or the background */

function findRepeatedBlock(arr) {
  let num = [];
  $(arr).each(function (index, element) {
    if (element.value !== '') {
      num.push(element.value);
    }
  });
  let repeated = num.filter((item, index) => index !== num.indexOf(item));
  $(arr).each(function (index, element) {
    if (repeated.includes(element.value)) {
      $(element).addClass('wrong');
    }
  })
}

/* Execute the findRepeatedColRow function in all the Sudoku grid */

function checkSudoku() {
  $('input').removeClass('wrong');
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  for (let i = 0; i < rows.length; i++) {
    findRepeatedColRow(findRowsAndColums(i + 1));
    findRepeatedColRow(findRowsAndColums(rows[i]));
    findRepeatedBlock(findBlock(i + 1));
  }
}

/* Allow only number characters */

function restriction() {
  var e = event || window.event;  // get event object
  var key = e.keyCode || e.which; // get key cross-browser

  if (key <= 48 || key > 57) { //if it is not a number ascii code
    //Prevent default action, which is inserting character
    if (e.preventDefault) e.preventDefault(); //normal browsers
    e.returnValue = false; //IE
  }
}

/* Validate if all the inputs are filled */
function anyEmpty() {
  let res = false;
  $('input').each(function (index, element) {
    if ($(element).val() == '') {
      res = true;
    }
  });
  return res
}

/* Validate if none of the inputs have the class .wrong */
function anyWrongClass() {
  let res = false;
  $('input').each(function (index, element) {
    if ($(element).hasClass('wrong')) {
      res = true;
    }
  });
  return res
}