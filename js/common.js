$(function(){

    //7. 초점
    $("#btn_toggle").bind("click", function(){
        if($(this).hasClass('on')){
           $(this).removeClass('on').attr('aria-expanded', 'false').parents('.focus').find('ul').hide();
        }else{
           $(this).addClass('on').attr('aria-expanded', 'true').parents('.focus').find('ul').show();
        }                         
     });


    //6. 알림 기능
    function tostOn(){
        $('.message').addClass('on');

        setTimeout(function(){
           $('.message').removeClass('on');
        },2000);
     }

     $('.btn_certify').on('click', function(){
        tostOn();
     });

     //12.입력도움2
     $('.search button').on('click', function(e){
         if($(this).hasClass('btn_search')){
            $(this).hide().siblings('button').show().parents('.search').find('input').focus();
         }else{
            $(this).hide().siblings('button').show().focus();
         }         
     });

     $('.search input').on('focusin', function(){
         $(this).parents('.search').find('.btn_search').hide().siblings().show();
     });

     
     /* 18. 보조기술과의 호환성(체크박스) */
    $("#chbox_all").on("click", function(){
        var checked = $(this).is(':checked');

        if(checked){ 
            $('.terms').find('input:checkbox').prop('checked', true);
        }else{ 
            $('.terms').find('input:checkbox').prop('checked', false);
        }        

    });
    
     /* 18. 보조기술과의 호환성(레이어팝업) */
     var selector="a, button, input, select, textarea, h1, h2, h3, h4, h5, h6, div, p, ul, ol, li, span, img";
     var btn_index;

     //열기버튼 선택시
     $('.btn_detail').bind('click', function(){
        btn_index=$(this).parents('li').index();

        $(this).attr("aria-expanded", "true");  
        $('#dialog').show().find('h1').focus();
        $('body').find(selector).not('#dialog').not($('#dialog').find(selector)).attr({"tabindex" : "-1", "aria-hidden" : "true"});
        $('#dimmed').show();          
     });

     //닫기버튼 선택시
     $('.btn_close').bind('click', function(){
        $('.terms > li').eq(btn_index).find('button').attr("aria-expanded", "false").focus();   
        $('#dimmed').hide();  
        $('#dialog').hide();
        $('body').find(selector).not('#dialog').not($('#dialog').find(selector)).removeAttr("tabindex aria-hidden");
     });

     /* 18. 보조기술과의 호환성(탭메뉴 - type1) */
     $('.tab.type1 > .menu > li > a').on("click", function(){
        var index=$(this).parent().index();
        
        $(this).parents(".menu").find("a").removeAttr("aria-selected").attr("aria-selected", "false").eq(index).attr("aria-selected", "true");         
        $(this).parents(".menu").find("a").removeAttr("class").eq(index).attr("class", "on");         
        $('.tab.type1 > .panel  > .tab_con').css('display', 'none').eq(index).css('display', 'block');

     }); 

     /* 18. 보조기술과의 호환성(탭메뉴 - type2) */
    $('.tab.type2 > .menu > li > a').on("click", function(){
        var index=$(this).parent().index();
        
        $(this).parents(".menu").find("a").removeAttr("aria-selected").attr("aria-selected", "false").eq(index).attr("aria-selected", "true");         
        $(this).parents(".menu").find("a").removeAttr("class").eq(index).attr("class", "on");         
        $('.tab.type2 > .menu > li> .tab_con').css('display', 'none').eq(index).css('display', 'block');

    });


});
   





