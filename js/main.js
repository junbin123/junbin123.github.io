// 滚动一屏显示顶部按钮
var height = $(window).height();
var backToTop = $("#back-to-top");
backToTop.hide();
$(window).scroll(() => {
    if ($(window).scrollTop() > height) {
        backToTop.show();
    } else {
        backToTop.hide(500);
    }
})
