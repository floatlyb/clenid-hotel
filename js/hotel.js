$(function(){
    /*pc버전gnb sub*/
    $('.gnb>ul').on('mouseenter',function(){
        if( $(window).width()>1024){
            $('.sub').stop().slideDown(350);
            $('.gnb_bg').stop().slideDown(350);
        }
    });
    $('.gnb>ul').on('mouseleave',function(){
        if($(window).width()>1024){
            $('.sub').stop().slideUp(350);
            $('.gnb_bg').stop().slideUp(350);
        }

    });  


    /*타블렛~모바일 햄버거*/ 
    $(window).on('resize',function(){ console.log(window.innerWidth);
        if(window.innerWidth<1024){ //타블렛
            $('.gnb').css('right','-358px');
            $('.tnb_box').css('right','-358px');
        }else{ //PC
            $('.gnb').css('right','50%');
            $('.tnb_box').css('right','0px');
            $('.sub').hide();
        }
    }); 
    $('#main_header>.innerbox>.toggle').on('click',function(){
        if($(window).width()<1024){
            $('.gnb').toggleClass('on')
            $('.tnb_box').toggleClass('on');
            if($('.gnb').hasClass("on")){
                $('.gnb').stop().animate({right:"0px"},200)
                $('.tnb_box').stop().animate({right:"0px"},200)
            }else{
                $('.gnb').stop().animate({right:"-358px"})
                $('.tnb_box').stop().animate({right:"-358px"})
            }
        }
    });

    
    
    /*타블렛~모바일 gnb sub 펼쳐지는거 */
    $('.gnb>ul>li>a').on('click', function(event){
        if($(window).width()<1024){
             event.preventDefault(); 
             if( $(this).next().css('display')=='none' ){ 
                $('.gnb>ul>li>a').removeClass('active');
                $(this).addClass('active')
                $('.sub:visible').slideUp();
                $(this).next().slideDown();
            }else{
                $(this).removeClass('active');
                $(this).next().slideUp();
            }
        }
    });

    /* 고객지원 faq 펼쳐지는거 */
    $('.faq_table>ul>li>a').on('click', function(event){
        event.preventDefault();
        if($(this).next().css('display')=='none'){
            $('.faq_table>ul>li>a').removeClass('on')
            $(this).addClass('on');
            $('.answer:visible').slideUp();
            $(this).next().slideDown();
        }else{
            $(this).removeClass('on');
            $(this).next().slideUp();
        }
    });

    /*빠른 예약 */

    $('.people_view').on('click',function(event){
        if($('.people_wrapper').css('display')=='none' ){
            $('.people_wrapper').slideDown();
        }else{
            $('.people_wrapper').slideUp();
        }
    }) 
    $(".people_wrapper>.close").on('click',function(event){
        $('.people_wrapper').slideUp();
    });  

  
    /*
    $(".people_wrapper>ul>li:last-of-type>.c_in").on('click',function(event){
        if($('.people_wrapper>ul>li:nth-child(2)').css('display')=='none'){
            $('.people_wrapper>ul>li:nth-child(2)').css('display','flex');
        }
    });
  
    $(".people_wrapper>ul>li:last-of-type>.c_in").on('click',function(event){
        if($('.people_wrapper>ul>li:nth-child(3)').css('display')=='none'){
            $('.people_wrapper>ul>li:nth-child(3)').css('display','flex');
        }
    });*/

    /* Date Range Picker*/
    $('input[name="dates"]').daterangepicker({
        opens: 'left',
        locale: {
        format: "YYYY-MM-DD",
        separator: " ~ ",
        applyLabel: "확인",
        cancelLabel: "취소",
        fromLabel: "From",
        toLabel: "To",
        customRangeLabel: "Custom",
        weekLabel: "W",
        daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
        monthNames: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
        ],
  },
  startDate: $('input[name="startDate"]').val(),
  endDate: $('input[name="endDate"]').val(),
  drops: "auto",
    },
    function (start, end, label){
        console.log("A new date selection was made: " + 
        start.format('YYYY-MM-DD') 
        + ' to ' + end.format('YYYY-MM-DD'));
    })

    $('#resdate').daterangepicker({
        alwaysShowCalendars: true,
        locale: {
            format: "YYYY-MM-DD",
            separator: " ~ ",
            applyLabel: "확인",
            cancelLabel: "취소",
            fromLabel: "From",
            toLabel: "To",
            customRangeLabel: "Custom",
            weekLabel: "W",
            daysOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
            monthNames: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
            ],
        },
      startDate: $('input[name="startDate"]').val(),
      endDate: $('input[name="endDate"]').val(),
      drops: "auto",

    }, function(start, end, label) {
    console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
    });

    
 
    /*슬라이드 */

    var swiper = new Swiper(".mySwiper", {
        autoHeight: true,
        direction: 'horizontal',
        loop: 'true',
        initialSlide:0,
        spaceBetween:0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        /*
        autoplay: {
            delay: 1500,
            disableOnInteraction:false,
        },
        */
    });

   
 
});