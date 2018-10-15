// hover用始まり


$(function() {
  $('.merit_hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active');
    },

    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );
});
// hover用終わり

// スクロールfadein始まり

$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 150){
                $(this).addClass('scrollin');
            }
        });
    });




       $('header a').click(function(){
     var yeah =$(this).attr('href');
     var posi =$(yeah).offset().top;
     $('html,body').animate({ 
      'scrollTop': posi
    }, '500');
   });
});
// スクロールfadein終わり


//トップに戻る始まり
$(function(){
    $('header img').click(function(){
    $('html,body').animate({ 
      'scrollTop': 0 
    }, 'slow');
  });
//トップに戻る終わり

    });

$(function() {

  // FAQのアコーディオン
  $('.faq-list-item').click(function() {
    //findは子要素の取得。クリックしたイベントの子要素のクラスanswerを変数$answerに代入。
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      $answer.slideUp();

      $(this).find('span').text('+');
    } else {
      $answer.addClass('open'); 
$answer.slideDown();
      $(this).find('span').text('-');
      
    }
  });
  });
