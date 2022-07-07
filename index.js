$('#answer').click(function() {
  checkSudoku();
  $('input').each(function (index, element) {
    if ($(element).attr('readonly')) {
      $(element).removeClass('wrong');
    }
  });
  if (!(anyEmpty()) && !(anyWrongClass())) {
    $('.modal-content').children().remove();
    let p = $('<div class= "modal-close" > <i class="fa-solid fa-xmark"></i></div ><h2>Congratulations!<i class="fa-solid fa-hands-clapping"></i></h2><p>You are correct!</p><button id="try-again" type=“button”><i class="fa-solid fa-arrow-rotate-right"></i>Try it again</button></div >');
    $('.modal-content').append(p);
    $('#try-again').click(function(){
      window.location.reload();
    })
    $('.modal-container').addClass('active');
    return false
  }
  if (anyEmpty() && !(anyWrongClass())) {
    $('.modal-content').children().remove();
    let p = $('<p>Fill all the inputs. No errors at the moment</p>');
    $('.modal-content').append(p);
    $('.modal-container').addClass('active');
    return false
  }
});

$('input').on('click', function(event) {
  $('.wrong').removeClass('wrong');
});

$('.sudoku-container')
  .on('keypress' ,'input', function(event) {
    restriction();
  });

/* Put all the numbers */
$(document)
  .on('keyup', function(event){
    if (event.shiftKey && event.keyCode == 82) {
      const ans = [
        4,2,9,3,3,9,7,8,2,5,6,2,1,9,4,
        8,6,5,3,1,5,7,3,9,8,3,1,2,8,4,9,7,
        1,4,6,3,8,7,2,9,1,5,3,1,5,8,9
      ];
      let userCells = [];
      $('input').each(function(index, element) {
        if (!($(element).attr('readonly'))) {
          userCells.push(element);
        }
      })
      $(userCells).each(function(index, element) {
        $(element).val(ans[index])
      })
    }
  })

// MODAL START
$(function () {
  let close = $('.modal-close'),
    container = $('.modal-container');

  //Clicking "x" closes the modal.
  close.on('click', function () {
    container.removeClass('active');
    window.location.reload();
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