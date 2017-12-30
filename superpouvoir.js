

function close_menu() {
    $('#menu_page, #menu_bar').removeClass('menu_open').addClass('menu_close');
    $('#Logo_A').removeClass('Title_A_open').addClass('Title_A');
    $('#Logo_B').removeClass('Title_B_open').addClass('Title_B');
    $('.logo_partners').removeClass('opa1').addClass('opa0');
    $('#orange_box').removeClass('foo');
        setTimeout(function () { 
            $('#menu_content').hide();
        }, 400);
}







jQuery( document ).ready(function() {      
    var is_mobile = false;

    

    if( jQuery('#mobile').css('display')=='none') {
        is_mobile = true;       
    }

    

    if (is_mobile === false) {

        





        


    	$('#menu_content').hide();
        $('#work_in').hide();
        $('#CAF2017').hide();
        

        $('.wip').hover
        (
            function() 
            {
                $('#work_in').show();
            }, 
            function()
            {
                $('#work_in').hide();
            }
        );
        

        $('a[href^="#"]').on('click',function (e) {
           

            var target = this.hash;
            var $target = $(target);
            var top_anchor = ($(window).height()/100)*18;

            close_menu();
            $('#nav-container').removeClass('pushed');
            $('html, body').stop().animate({
                'scrollTop': ($target.offset().top - top_anchor)
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

    	

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
                        setTimeout(function() { 
                            $('.logo_partners').removeClass('opa0').addClass('opa1');
                        }, 300);    
                    }, 2);
                }
                else { 
                    close_menu();
                }
            });
        });


        $("button").click(function() {
            $('.tcon').toggleClass("tcon-transform");

            if ($('.tcon').hasClass("tcon-transform")) {
                $('#news_rect').removeClass('news_open').addClass('news_close');
                $('.span_news').removeClass('span_n_open').addClass('span_n_close');
                $('#paperclip').removeClass('opa1').addClass('opa0');
                $('#NEWS').addClass('nt');

            } else {
                $('#news_rect').removeClass('news_close').addClass('news_open');
                $('.span_news').removeClass('span_n_close').addClass('span_n_open');
                $('#paperclip').removeClass('opa0').addClass('opa1');
                $('#NEWS').removeClass('nt');
            }
        });

       


        $('.menu_list').hover(
            function() {
                $(this).find(".a_menu").toggleClass('a_menu_hover');
            }
        );

        

        


        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            var c = $('#menu_page').hasClass('menu_close');
            if (scroll >= 50 && c) {
                
                $('#menu_page').removeClass('menu_p100').addClass('menu_p0');
                $('#NEWS').addClass('news_getout');    
                $('#Logo_A').removeClass('Title_A').addClass('Title_A_open');
                $('#Logo_B').removeClass('Title_B').addClass('Title_B_open');
                  

            } else {
                
                $('#menu_page').removeClass('menu_p0').addClass('menu_p100');
                $('#NEWS').removeClass('news_getout');
                if (c) {
                    $('#Logo_A').removeClass('Title_A_open').addClass('Title_A');
                    $('#Logo_B').removeClass('Title_B_open').addClass('Title_B');
                }
            }
        });




        $('section').hover(
            function() {
                var id_ = $(this).attr('data-id');
                console.log(id_);
                $('.submenu li').empty().append(id_); 
              
            }
        );


        $('#onglet_2018').click(function() {
            $(this).removeClass('b_bar').addClass('w_bar');
            $('#onglet_2017').removeClass('w_bar').addClass('b_bar');
            $('#CAF2017').fadeTo( "slow" , 0, function(){
                $('#CAF2017').hide();
                $('#CAF2018').show();
                $('#CAF2018').fadeTo("slow", 1);

            });
        });

        $('#onglet_2017').click(function() {
            $(this).removeClass('b_bar').addClass('w_bar');
            $('#onglet_2018').removeClass('w_bar').addClass('b_bar');
            $('#CAF2018').fadeTo( "slow" , 0, function(){
                $('#CAF2018').hide();
                $('#CAF2017').show();
                $('#CAF2017').fadeTo("slow", 1);
            });
        });


    }
});