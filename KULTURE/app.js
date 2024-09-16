let loginForm  = document.querySelector('.login-form');
document.querySelector('#user-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    bar.classList.remove('active');
}

let bar  = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    bar.classList.toggle('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    bar.classList.remove('active');
}

let state  = document.querySelector('.state');
    document.querySelector('#location').onclick = () =>{
    state.classList.toggle('active');
}


let swiperCards = new Swiper('.products-slide', {
    loop: true,
    spaceBetween: 20,
    grabCursor:true,
    center:true,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
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
        700:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
        1224:{
            slidesPerView:4,
        },
    }
  
});

(function(){
    const buttons= document.querySelectorAll('.place')
    const storeImage =document.querySelectorAll('.store-item')

    buttons.forEach((button) => {
        button.addEventListener('click',(e)=> {
            e.preventDefault()
            const filter = e.target.dataset.filter
            state.classList.remove('active');


            storeImage.forEach((item) => {
                if (filter==='all'){
                    item.style.display = 'block'
                }else{
                    if(item.classList.contains(filter)) {
                        item.style.display = 'block'
                    }else{
                        item.style.display = 'none'
                    }
                }
            })
        })
    })
})();