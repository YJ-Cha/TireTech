$('.navbar_gnb, .sub_shadow').on('mouseenter mouseleave', (function (aa) {
    if ($(window).width() > 1169) { //PC(데스크탑 상태)

        if (aa.type == 'mouseenter') { //데스크탑 상태에서 마우스를 올려놨을때
            $('.sub').stop().slideDown();
            $('.sub_shadow').stop().fadeIn();
        } else {
            $('.sub').stop().slideUp(250, function () {
                $(this).removeAttr('style'); //slideUP실행뒤(콜백함수) 남아있는 style을 없애준다
            });
            $('.sub_shadow').stop().fadeOut(250, function () {
                $(this).removeAttr('style'); //slideUP실행뒤(콜백함수) 남아있는 style을 없애준다
            });
        }

    } else { //모바일 상태

    }
}));


const $mainBtn = $(".navbar .navbar_gnb > li > a"); //메인 메뉴

$mainBtn.click(function () {
    if ($(window).width() < 1170) { //모바일 상태에서만 실행_서브메뉴 슬라이드
        if (!$(this).parents('li').hasClass('on')) {
            $('.sub').slideUp(100);
            $('.navbar .navbar_gnb > li').removeClass('on');
            $(this).siblings('.sub').slideDown();
            $(this).parents('li').addClass('on');
        } else { // 클릭한 부분 sub가 열려있을때
            $(this).siblings('.sub').slideUp(100, function () {});
            $(this).parents('li').removeClass('on');
        }
    }
});

//모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘
$('.trigger').click(function () {
    $(this).toggleClass('open')

    if ($(this).hasClass('open')) {
        $('.gnb').animate({
            right: 0
        }, 500);
        $('header').animate({
            left: -250
        }, 500)
    } else {
        $('.gnb').animate({
            right: -250
        }, 300);
        $('header').animate({
            left: 0
        }, 300)
    }
});

//모바일 상태에서 데스크탑 전환시 서브메뉴 문제 해결
$(window).resize(function () {
    if ($(window).width() > 1169) {
        $('.sub').removeAttr('style');
        $('.navbar .navbar_gnb > li').removeClass('on');
    }
});

//모달팝업

$('.modal_wrap').animate({opacity: 1},300)
.css('top','calc(50% - 225px)');

$('.modal_wrap .close_btn').click(function(){
    $('.modal_wrap').animate({opacity: 0},300)
    .css('top','calc(50% - 325px)');
    $('.modal_wrap').close();
})

var swiper = new Swiper(".modalSwiper", {
    
    loop: true,

    pagination: {

        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});