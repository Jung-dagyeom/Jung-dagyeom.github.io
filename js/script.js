'use strict';

$(function(){
    /* ================= change mode ===================== */
    $('#buttonDark').click(function(){
        $(this).hide();
        $('body').addClass('dark-mode');
        $('#buttonLight').show();
    })
    $('#buttonLight').click(function(){
        $('body').removeClass('dark-mode');
        $('#buttonDark').show();
        $(this).hide();
    })
    /* ================= navbar ===================== */
    var $navItem = $('.nav__item');
    $navItem.click(function(e){
        e.preventDefault();
        var link = $(this).children('a').attr('data-link');
        var $target = $(link);
        var distance = $target.offset().top;
        $('html, body').animate({scrollTop: distance});
        $('.nav__container').removeClass('visible');
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
    /* nav toggle */
    $('#navToggle, .nav__close').click(function(){
        $('.nav__container').toggleClass('visible');
    })
    /* ================= skill tabs ================= */
    var $skillsItem = $('.skills__item');
    var $skillsPercentage = $('.skills__percentage');

    $skillsPercentage.hide();
    $skillsItem.click(function(){
        $(this).find('.skills__stack').toggle();
        $(this).find('.skills__percentage').toggle();
    })
    /* ================= scroll up ================= */
    var skillsDistance = $('#skills').offset().top;
    var $scrollUp = $('.scrollup');
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();
        if( scrollTop > skillsDistance ){
            $scrollUp.addClass('visible');
        }else{
            $scrollUp.removeClass('visible');
        }
    })
    $scrollUp.click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: 0});
    })
})
