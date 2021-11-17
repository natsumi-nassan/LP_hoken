const KEN = 5 ; 
console.log(KEN);

// ボタン押下時、任意の見出しへ移動
window.addEventListener('DOMContentLoaded',function(){
    // #で始まるリンクをクリックしたら実行されます
    $('a[href*="#"]').click(function() {
      // スクロールの速度
      let speed = 500; // ミリ秒で記述
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      alert = "OK";
      let position = target.offset().top-90;
      $('body,html').animate({scrollTop:position}, speed);
      return false;
    });
  });

  //スクロール時、ヘッダーを透過
  jQuery(window).on('scroll', function () {
    if (jQuery('.header').height() < jQuery(this).scrollTop()) {
        jQuery('.header').addClass('add-opacity');
    } else {
        jQuery('.header').removeClass('add-opacity');
    }
});