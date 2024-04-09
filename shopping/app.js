$(document).ready(function(){
    $('#search, .fa-search').mouseenter(function(){
        $('.logo').hide();
    });

    $('#search, .fa-search').mouseleave(function(){
        $('.logo').show();
    });

    $('.fa-bars').click(function(){
        $('.navbar').toggle();
        $(this).toggleClass('fa-times')
    });

    $('.navbar, .navbar a').click(function(){
        $('.navbar').hide();
        $('.fa-bars').removeClass('fa-times')
    });
});

$(window).on('scroll load',function(){
    if($(window).scrollTop()> 20){
        $('#header').css({
            'background':'blue',
            'box-shadow':'0 .1rem .3rem #000'
        });
    }else{
        $('#header').css({
            'background':'transparent',
            'box-shadow':'none'
        })
    }
})

let swiperCard = new Swiper('.home-slider', {
    loop: true,
    spaceBetween: 0,
    grabCursor:true,
    center:true,
    autoplay:true,



    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView:1,
            nav:true
        },
        550:{
            slidesPerView:1,
        },
        1000:{
            slidesPerView:1,
        }
    }
  
});

let swiperCardss = new Swiper('.box-container', {
    loop: true,
    spaceBetween: 0,
    grabCursor:true,
    center:true,
    autoplay:true,



    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView:1,
            nav:true
        },
        550:{
            slidesPerView:1,
        },
        1000:{
            slidesPerView:1,
        }
    }
  
});


let swiperCards = new Swiper('.products-container', {
    loop: true,
    spaceBetween: 50,
    grabCursor:true,
    center:true,
    autoplay:true,
    speed: 500,

    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    breakpoints:{
        0:{
            slidesPerView:1,
        },
        500:{
            slidesPerView:2,
        },
        800:{
            slidesPerView:3,
        },
        1000:{
            slidesPerView:4,
        },
        1400:{
            slidesPerView:5,
        }
    }
  
});

let swiperCardsv = new Swiper('#brands', {
    loop: true,
    spaceBetween: 100,
    grabCursor:true,
    center:true,
    autoplay:true,
    speed: 500,

    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    breakpoints:{
        0:{
            slidesPerView:3,
        },
        500:{
            slidesPerView:4,
        },
        800:{
            slidesPerView:5,
        },
        1000:{
            slidesPerView:6,
        },
        1400:{
            slidesPerView:8,
        }
    }
  
});