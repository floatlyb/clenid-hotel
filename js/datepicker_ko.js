$(function(){
    /* datepicker 한글화*/
    $("#datepicker").datepicker({
        numberOfMonths: 2,
        changeMonth: false, 
        changeYear: false,
        minDate: '-50y',
        nextText: '다음 달',
        prevText: '이전 달',
        yearRange: 'c-50:c+20',
        showButtonPanel: true,
        showOtherMonths : true,
        currentText: '오늘 날짜',
        closeText: '닫기',
        dateFormat: "yy-mm-dd",
        showAnim: "slide",
        showMonthAfterYear: true, 
        yearSuffix: "년",
        dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'],
        monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] 
       });
    
});