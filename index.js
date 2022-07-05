$('div.sudoku-container')
  .on('blur', 'input', function (event) {
    checkSudoku();
  })

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
