var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.block').click(function() {
    $('.block').animate({
      left: "500px"
    }, 400);

    $('#block1').animate({
      left: "285px"
    }, 800);
  });

  /* Then push them back */
  $('.bl').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);