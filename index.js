/* Return the HTML elements of an specific sudoku index */
function findRowsAndColums(inp) {
  let ind = inp;
  $('input').each(function (index, element) {
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

// MODAL START
$(function () {
  let open = $('.modal-open'),
    close = $('.modal-close'),
    container = $('.modal-container');

  //Clicking open modal button opens the modal.
  open.on('click', function () {
    container.addClass('active');
    return false;
  });

  //Clicking "x" closes the modal.
  close.on('click', function () {
    container.removeClass('active');
  });

  //Clicking on the translucent background closes the modal.
  $(document).on('click', function (e) {
    if (!$(e.target).closest('.modal-body').length) {
      container.removeClass('active');
    }
  });

  //Clicking on try again button closes the modal.
  $(document).on('click', function (e) {
    if (!$(e.target).closest('try-again').length) {
      container.removeClass('active');
    }
  });
});
// MODAL END