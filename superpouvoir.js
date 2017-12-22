function top_news() {        

    var news_top = $('#menu_bar').offset().top + $('#menu_page').height();
    var news_left = $('#menu_bar').offset().left;

    console.log('top = ' + news_top);
    console.log('left = ' + news_left);
    console.log($('#menu_page').height());

    $('.newstop').css('top', news_top).css('right', news_left);        
}







jQuery( document ).ready(function() {      
    var is_mobile = false;
    

    if( jQuery('#mobile').css('display')=='none') {
        is_mobile = true;       
    }

    

    if (is_mobile === false) {

    	$('#menu_content').hide();
        $('#ok').hide();
        top_news();
    	

        $(".toggle-icon").click(function() {
            $('#nav-container').toggleClass("pushed");



            $(function() {
               if ($('#menu_page').hasClass('menu_p0')) {
                    $('#menu_page').removeClass('menu_p0').addClass('menu_p100');
               } else {
                    console.log('verification : pas de menu_0');
               }
            });
        
            $(function() {

                if ($('#nav-container').hasClass('pushed')) {
                    $('#menu_content').show();
                    
                    setTimeout(function () { 

                        $('#menu_page, #menu_bar').removeClass('menu_close').addClass('menu_open');
                        $('#Logo_A').removeClass('Title_A').addClass('Title_A_open');
                        $('#Logo_B').removeClass('Title_B').addClass('Title_B_open');
                        $('#orange_box').addClass('foo');
                    }, 2);
                }
                else { 
                    
                    $('#menu_page, #menu_bar').removeClass('menu_open').addClass('menu_close');
                    $('#Logo_A').removeClass('Title_A_open').addClass('Title_A');
                    $('#Logo_B').removeClass('Title_B_open').addClass('Title_B');
                    $('#orange_box').removeClass('foo');
                        setTimeout(function () { 
                            $('#menu_content').hide();
                        }, 400);

                }
            });
        });


        $("button").click(function() {
            $('.tcon').toggleClass("tcon-transform");

            if ($('.tcon').hasClass("tcon-transform")) {
                $('#news_rect').removeClass('news_open').addClass('news_close');
                $('.span_news').removeClass('span_n_open').addClass('span_n_close');

            } else {
                $('#news_rect').removeClass('news_close').addClass('news_open');
                $('.span_news').removeClass('span_n_close').addClass('span_n_open');
            }
        });

       


        $('.menu_list').hover(
            function() {
                $(this).find(".a_menu").toggleClass('a_menu_hover');
            }
        );

        

        $( window ).resize(function() {
            top_news();
        });


        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 50 && $('#menu_page').hasClass('menu_close')) {
                
                $('#menu_page').removeClass('menu_p100').addClass('menu_p0');
                $('#NEWS').hide();
                $('#Logo_A').removeClass('Title_A').addClass('Title_A_open');
                $('#Logo_B').removeClass('Title_B').addClass('Title_B_open');
            } else {
                
                $('#menu_page').removeClass('menu_p0').addClass('menu_p100');
                $('#NEWS').show();
                $('#Logo_A').removeClass('Title_A_open').addClass('Title_A');
                $('#Logo_B').removeClass('Title_B_open').addClass('Title_B');
            }
    });
            
    

       





    }
});