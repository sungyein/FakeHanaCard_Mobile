//slide
$(document).ready(function(){
    
  setInterval(function(){
      $('div.slidebanner ul').animate({
          left: "-100%"
      },1000,function(){
          $('div.slidebanner ul').append($('div.slidebanner ul li').eq(0));
          $('div.slidebanner ul').css("left",0);
      })
  },3000);


  $('.btn_close').on('click', function(){
    $('.popup_wrap').animate({
        bottom: -100 + '%'
    },300, function(){
        $('popup_wrap').fedeOut(200);
    })
    $('.popup').fadeOut()
  })


});