/* Return the HTML elements of an specific sudoku index */
function findRowsAndColums(inp) {
  let ind = inp;
  $('input').each(function(index, element) {
    if ($(element).data('id').includes(ind)) {
      console.log(element);
    }
  });
}

/* Return the HTML elements of an specific sudoku-block index */
function findBlock(inp) {
  let num = inp;
  $('div .row > div').each(function (index, element) {
     if ($(element).data('bl') == num) {
        console.log(element);
     }
  });
}