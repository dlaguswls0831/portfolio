$(function(){
    // 헤더 , 투탑버튼
    var hdr = $('.hdrWrap');
    var toTop = $('.toTop');
    $(window).scroll(function(){
        var now = $(this).scrollTop();
        if(now >= 1){
            hdr.addClass('fix');
        }else{
            hdr.removeClass('fix');
        }
        // 투탑버튼
        if(now >=2250){
            toTop.addClass('pop');
            toTop.fadeIn(500);
        }else 
        if(now >=300 && now < 2250){
            toTop.fadeIn(500);
            toTop.removeClass('pop')
        }else{
            toTop.fadeOut(500);
        }
        console.log(now);
    });
    toTop.click(function(){
        $('html,body').stop().animate({
            scrollTop : 0
        },500);
    });


    // 헤더 탭슬라이드
    var tabLi = $('.tab li:nth(1)');
    var tab = $('.hdrWrap ul.tab');
    $('.menu').next().click(function(){
        tab.animate({
               right : 0
        },400);
    });
    $('div.hdrWrap .btn:nth(0)').click(function(){
        tab.animate({
            right : '-100%'
        },400);   
    });
    tabLi.click(function(){
        tabLi.toggleClass('on');
        tabLi.find('span').text('+');
        $('li.on').find('span').text('-');
    });

    var i = 0;
    var bGr =  $('.bnrGroup');
    var li = $('.paging>li')
    li.click(function(){
        ind = $(this).index();
        li.removeClass('on');
        $(this).addClass('on');
        bGr.css('margin-left', -100 * ind +'%')
    });
   $('.bnr01 .btn').click(function(){
       i++
       bGr.css('margin-left', -100 * i +'%')
       console.log(li.eq(i))
       li.removeClass('on');
       li.eq(i).addClass('on');

   });
   $('.bnr02 .btn').click(function(){
       i--
       bGr.css('margin-left', -100 * i +'%')
       li.removeClass('on');
       li.eq(i).addClass('on');
   
   });
   
});