//モーダル開閉時のアニメーション定義
$(function(){
    $('.modal-open').on('click',function(){
        $('.modal').fadeIn();
        $('body').css('overflow-y','hidden');  // 本文の縦スクロールを無効
        $('body').css('padding-right','16px'); // スクロールバー分の余白を付与
        return false;
    });
    $('.modal-close').on('click',function(){
        $('.modal').fadeOut();
        $('body').css('overflow-y','auto');     // 本文の縦スクロールを有効
        $('body').css('padding-right','0px');
        return false;
    });
});