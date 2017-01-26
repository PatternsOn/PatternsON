$(document).ready(function(){
  $(".menulinks").click(function(){
    $(this).addClass("listClicked");
  });


 $(".menulinks").mouseenter(function(){
   $(this).animate({width: '95%'}, 1000);
   $(this).css("background-color", 'rgba(0, 0, 0, 0.5)');
   $(this).css('color', 'hotpink');

  });
  $(".menulinks").mouseleave(function(){
    if($(this).hasClass("listClicked")){
    }
    else {
      $(this).animate({width: '80%'}, 1000);
      $(this).css("background-color", 'rgba(0, 0, 0, 0.2)');
      $(this).css('color', 'white');
    }
  });
});
