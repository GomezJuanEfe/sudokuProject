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
      /* CHANGE THE CLASS HERE */
      $(e[0]).css('background-color', 'yellow');
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

      $(element).css('background-color', 'yellow');
    }
  })
}

/* Execute the findRepeatedColRow function in all the Sudoku grid */

function checkSudoku() {
  /* CHANGE THE DEFAULT BACKGROUND HERE */
  $('input').css('background-color', 'white');
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  for (let i = 0; i < rows.length; i++) {
    findRepeatedColRow(findRowsAndColums(i + 1));
    findRepeatedColRow(findRowsAndColums(rows[i]));
    findRepeatedBlock(findBlock(i + 1));
  }
}