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
      // alert = "OK";
      let position = target.offset().top-90;
      $('body,html').animate({scrollTop:position}, speed);
      return false;
    });
  });

  //スクロール時、ヘッダーを透過
  $(window).on('scroll', function () {
    if ($('header').height() < $(this).scrollTop()) {
        $('header').addClass('add-opacity');
    } else {
        $('header').removeClass('add-opacity');
    }
});

//右寄りハンバーガーメニュー実装
function hamburger() {
  $('#line1').toggleClass('line_1');
  $('#line2').toggleClass('line_2');
  $('#line3').toggleClass('line_3');
  $('#nav').toggleClass('in');
}
$('#hamburger').click(function () {
  hamburger();
} );

//PCとスマホで要素の削除切り替えを行う
// $(function() {
//   //ウインドウがリサイズされたら発動
//   $(window).resize(function() { 
//     //office-endクラスを表示非表示
//     $(".office-end").toggle(); 
//   });  
// });

//スマホヘッダーの透明化無効
// メディアクエリの値を定義
let mediaQuery = '(max-width: 960px)';

// 1. MediaQueryListオブジェクトを生成
let mql = window.matchMedia(mediaQuery); 

// 2. 実行する処理を追加
function runMethod() {
    // PCとスマホで要素の削除切り替えを行う
    $(".office-end").toggle(); 
    // ヘッダー透過をやめる
    $(window).on('scroll', function () {
    $('header').removeClass('add-opacity');});
    console.log('Change!');
}

// 3. イベントリスナーを設定
mql.addEventListener('change', runMethod, false);