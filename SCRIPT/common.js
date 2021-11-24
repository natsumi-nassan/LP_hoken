// ボタン押下時、任意の見出しへ移動
$(function(){
    // #で始まるリンクをクリックしたら実行されます
    $('a[href*="#"]').click(function() {
      // スクロールの速度
      let speed = 500; // ミリ秒で記述
      let href= $(this).attr("href");
      let target = $(href == "#" || href == "" ? 'html' : href);
      let position = target.offset().top-90;
      $('body,html').animate({scrollTop:position}, speed);
      return false;
    });
  });

  //SPスクロール時、ヘッダーに色変えクラス追加切り替え
  $(window).on('scroll', function () {
    if ($('header').height() < $(this).scrollTop()) {
        $('header').addClass('add-color');
    } else {
        $('header').removeClass('add-color');
    }
});

//左から出る右寄りハンバーガーメニュー実装
function hamburger() {
  $('#line1').toggleClass('line_1');
  $('#line2').toggleClass('line_2');
  $('#line3').toggleClass('line_3');
  $('#nav').toggleClass('in');
}
$('#hamburger').click(function () {
  hamburger();
});
$('li a').click(function () {
  hamburger();
});

// // メディアクエリの値を定義
// let mediaQuery = '(max-width: 960px)';
// // 1. MediaQueryListオブジェクトを生成
// let mql = window.matchMedia(mediaQuery); 
// // 2. 実行する処理
// function runMethod() {
//     // PCとスマホで要素の削除切り替えを行う
//     $(".office-end").toggle(); 
// }
// // 3. イベントリスナーを設定
// mql.addEventListener('change', runMethod, false);

//もっと見るボタンの挙動
$(function() {
  $('.more-btn').on('click', function() {
    if( $(this).children().is('.open') ) {
      $(this).html('<p class="close">閉じる</p>').addClass('close-btn');
      $(this).parent().removeClass('slide-up').addClass('slide-down');
    } else {
      $(this).html('<p class="open">もっと見る↓</p>').removeClass('close-btn');
      $(this).parent().removeClass('slide-down').addClass('slide-up');
    }
  });
});