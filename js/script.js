'use strict';

$(function(){
     /* ================= 안내 모달 start ===================== */
     $('.notice-modal__close').click(function(){
        $('#notice').hide();
    })
    $('#notice').click(function(e){
        if(e.target === e.currentTarget){
            $(this).hide();
        }
    })

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
    // $('.skills__header').click(function(){
    //     $(this).children('.skill__icon--arrow').toggleClass('active');
    //     $(this).siblings('.skill__data').stop().slideToggle();
    // })

    var $skillsItem = $('.skills__item');
    var $skillsPercentage = $('.skills__percentage');

    $skillsPercentage.hide();
    $skillsItem.click(function(){
        $(this).find('.skills__stack').toggle();
        $(this).find('.skills__percentage').toggle();
    })


    /* ================= qualifictaion ================= */
    var $qualificationTab = $('.qualification__tab');
    var $qualificationContent = $('.qualification__content');
    $qualificationContent.eq(1).hide();
    $qualificationTab.click(function(e){
        e.preventDefault();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var idx = $(this).index();
        $qualificationContent.hide();
        $qualificationContent.eq(idx).show();
    })

    /* ================= portfolio ================= */
    /* ---------- graphic works ---------- */
    $('.works__item-button').click(function(e){
            e.preventDefault();
            var src = $(this).attr('data-src') ;
            $('.works__modal .modal__detail').attr('src', src)
            $('.works__modal').show();
    })

    $('.works__modal').click(function(e){
        if(e.target === e.currentTarget){
            $(this).hide();
        }
    })
    /* ---------- web works ---------- */
    $('.custom__slider').slick({
        dots:true,
        /* autoplay: true,
        autoplaySpeed: 2000, */
    });

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

