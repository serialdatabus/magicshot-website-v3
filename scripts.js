var lastScrollTop = 0;
$(document).ready(function(){

    topHeaderMenu  = $("#top-header-menu");
    headerheight = topHeaderMenu.outerHeight();

    $(".home-slider").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });





    $(".foto-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:6
            }
        }
    });



    $(window).scroll(function() {

       if(!$("#mobile-menu").hasClass("closed"))
       {
        return;
       }

        scrollDirection = "up";


        if($(window).scrollTop() > lastScrollTop)
        {
            scrollDirection = "down";
            
        }

        console.log("scrollTop: "+$(window).scrollTop());

        console.log("scroll direction: "+scrollDirection);

        lastScrollTop = $(window).scrollTop();

        console.log("header height: "+headerheight);

        if(scrollDirection==="up")
        {


            if($(window).scrollTop() > headerheight)
            {

                topHeaderMenu.removeClass("hidden");

            }
            else
            {
                topHeaderMenu.removeClass("sticky hidden");
            }

        }
        else
        {

            if($(window).scrollTop() > headerheight)
            {

                topHeaderMenu.addClass("sticky hidden")

            }

        }

    });





    $("#mobile-menu .header-menu li a , #mobile-menu .top-header-mobile-menu .link-home").click(function(e){

    $("#mobile-menu").addClass("closed");
        
    });

    $("#toggle-menu").click(function(e){
        e.preventDefault();

        $("#mobile-menu").removeClass("closed");

        topHeaderMenu.addClass("hidden");
        
    });

    $("#close-mobile-menu-btn").click(function(e){
        e.preventDefault();

        $("#mobile-menu").addClass("closed");

        topHeaderMenu.removeClass("hidden");
    });

    $("#mobile-menu").click(function(e){

        if (e.target === this)
         {
            $("#mobile-menu").addClass("closed");

                topHeaderMenu.removeClass("hidden");
            
         }

       
    });
    

  });