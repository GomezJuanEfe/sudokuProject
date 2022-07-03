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

function restriction() {
  var e = event || window.event;  // get event object
  var key = e.keyCode || e.which; // get key cross-browser

  if (key <= 48 || key > 57) { //if it is not a number ascii code
      //Prevent default action, which is inserting character
      if (e.preventDefault) e.preventDefault(); //normal browsers
      e.returnValue = false; //IE
  }
}