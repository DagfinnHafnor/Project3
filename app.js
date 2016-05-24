var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.block').click(function() {
    $('body').animate({
      left: "500px"
    }, 200);
  });
};


$(document).ready(main);