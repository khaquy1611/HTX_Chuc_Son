$(function() {

    /* Carousel Custom Start */
    $(".arrow.right").click(function() {
        changeImage('next');
    });

    $('.arrow.left').click(function() {
        changeImage('prev');
    });


   function changeImage(type){
       let imageSelectVisible = $(".slide:visible");
       let imgVisible = parseInt(imageSelectVisible.attr("number"));
       let eqNumber = type === 'next' ? imgVisible + 1 : imgVisible - 1;
       if(imgVisible === 0){
        eqNumber = $('.slide').length - 1;
       }

       if(eqNumber >= $('.slide').length){
        eqNumber = 0;
       }

       $(".slide").eq(eqNumber).fadeIn(1500);
       imageSelectVisible.fadeOut(1000);
       console.log(imageSelectVisible);
   }
 
   setInterval(function() {
   $(".arrow.right").click();
    },2000);
    /* Carousel Custom End */

    
    // Carousel start
    const prevIcon = "<img  src='images/Prev.png' />"
    const nextIcon = "<img  src='images/Next.png' />"
    $('.owl-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        nav:true,
        autoPlay:true,
        autoplayTimeout:1000,
        navText: [
            prevIcon,
            nextIcon
        ],
        responsive:{
            0:{
                items:3,
                nav:true,
                autoPlay:true,
                autoplayTimeout:1000,  
            },
            600:{
                items:1,
                nav:true,
                loop:true,
                autoPlay:true,
                autoplayTimeout:1000,  
            },
            480: {
            items:1,
            nav:false,
            autoPlay:true,
            autoplayTimeout:1000,  
            },
         
            320: {
                items:1,
                nav:false,
                autoPlay:true,
                autoplayTimeout:1000,  
            },
            280: {
                items:1,
                nav:false,
                autoPlay:true,
                autoplayTimeout:1000,  
            },
            768: {
                items:2,
                nav:false,
                autoPlay:true,
            },
            540: {
                items:1,
                nav:false,
                autoPlay:true,
            },
            1000:{
                items:2,
                nav:true,
                loop:true,
                autoPlay:true,
                autoplayTimeout:1000,   
            },
            1903:{
                items:3,
                nav:true,
                loop:true,
                autoPlay:true,
                autoplayTimeout:1000,   
            }
        }
    })
    // Carousel End
    
      // lightSlider Start
        $('#autoWidth').lightSlider({
            items:3,
            autoWidth:true,
            loop:true,
            loop:false,
            slideMove:2,
            easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
            speed:600,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } ,
            responsive : [
                {
                    breakpoint:800,
                    settings: {
                        item:3,
                        slideMove:1,
                        slideMargin:6,
                      }
                },
                {
                    breakpoint:480,
                    settings: {
                        item:1,
                        slideMove:1
                      }
                }
            ]
        });  
            // lightSlider End   
            
            
            
            
    $(window).scroll(function(){
        if($(window).scrollTop() > 0) {
            $(".header").addClass("sticky");
        }else {
            $(".header").removeClass("sticky");
        }
    });


    $("#topBtn").click(function() {
    $("html , body").animate({scrollTop:0} , 800);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 300) {
            $("#topBtn").fadeIn();
        }else {
            $("#topBtn").fadeOut();
        }
    });
});