window.addEventListener('DOMContentLoaded', () => {

    let burger = document.querySelector('.burger');
    let body = document.querySelector('body');
    let nav = document.querySelector('.nav');


    if (burger) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
        // if (body.style.overflow !== 'hidden') {
        // body.style.overflow = 'hidden'
        // } else {
        // body.style.overflow = 'visible'
        // }
    })
    }


    let header = document.querySelector(".header");

    if(header && window.innerWidth > 992){
        $(function() {
            let header = $('.header');
             
            $(window).scroll(function() {
              if($(this).scrollTop() > 200) {
               header.addClass('fixed');
               header.find('.btn').addClass('btn--wTransp');
              } else {
               header.removeClass('fixed');
               header.find('.btn').removeClass('btn--wTransp');
              }
            });
        });
    }




    function initAccord(classAcc, classTop, classHidden, classAddTo, classAddToggle){
        let accords = document.querySelectorAll(`.${classAcc}`);
        let currentAccord = null;

        if(accords){
            accords.forEach((el) => {
                el.querySelector(`.${classTop}`).addEventListener('click', () => {
                    if(currentAccord && currentAccord !== el){
                        $(currentAccord).find(`.${classHidden}`).slideUp();
                        $(currentAccord).find(`.${classAddTo}`).removeClass(`${classAddToggle}`);
                    }
                    $(el).find(`.${classHidden}`).slideToggle();
                    $(el).find(`.${classAddTo}`).toggleClass(`${classAddToggle}`);
                    currentAccord = el;
                })
            })
        }
    }

    initAccord('whatTreat__accordeon', 'whatTreat__accordeonTop', 'whatTreat__accordeonHidden', 'whatTreat__accordeonTop-close', 'rotate');
    initAccord('questions__accordeon', 'questions__accordeon-top', 'questions__accordeon-hidden', 'questions__accordeon-top', 'active');


    let swiper = new Swiper('.difSwiper__swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation:{
            nextEl: '.difSwiper__next',
            prevEl: '.difSwiper__prev',
        },
        breakpoints:{
            993: {
                slidesPerView: 3,
                spaceBetween: 20,
            }, 
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            }, 
            510: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            310:{
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
        }
    })

    let swiper1 = new Swiper('.license__swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        // navigation:{
        //     nextEl: '.icense__next',
        //     prevEl: '.icense__prev',
        // },
        breakpoints:{
            993: {
                slidesPerView: 3,
                spaceBetween: 20,
            }, 
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            510: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            310:{
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
        }
    })
    
    let swiper2 = new Swiper('.photo__swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation:{
            nextEl: '.photo__next',
            prevEl: '.photo__prev',
            autoHeight: true,
        },
        pagination: {
            el: '.photo__pagination', 
            clickable: true,
        }
    })
    
    let swiper3 = new Swiper('.news__swiper', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation:{
            nextEl: '.news__next',
            prevEl: '.news__prev',
            autoHeight: true,
        },
        pagination: {
            el: '.news__pagination', 
            clickable: true,
        },
        breakpoints:{
            993: {
                slidesPerView: 3,
                spaceBetween: 20,
            }, 
            768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            }, 
            510: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            310:{
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
        }
    })


    Fancybox.bind('[data-fancybox]', {
        // Your custom options
    })

    let arrGallery = ['.license__slide', '.photo__slide'];

    function initGallery(){
        for(let i = 0; i < arrGallery.length; i++){
            if (document.querySelector(arrGallery[i])) {
                Fancybox.bind(arrGallery[i], {
                    groupAll: true,
                })
            }
        }
    }

    initGallery()
    

    
    const phone = document.querySelectorAll('[name="phone"]')
    if (phone) {
        phone.forEach(element => {
            const maskOptions = {
                mask: '+{7}(000) 000-00-00',
            }
            const mask = IMask(element, maskOptions)
        })
    }


    if(document.querySelector('.nav')){
        if(document.querySelector('[data-scroll]')){
            $('.nav>ul>li>a').click(function() {
                let scrollName = $(this).attr('data-scroll'),
                scrollElem = $(scrollName),
                scrollTop = scrollElem.offset().top - 80;  
                $('html, body').animate({
                    scrollTop: scrollTop
                }, 500);
            });
        } else{
            $('.nav>ul>li>a').click(function() {
            console.log('click');
            let scrollName = $(this).attr('data-scroll'),
                scrollElem = $(scrollName),
                scrollTop = scrollElem.offset().top; 
                $('html, body').animate({
                    scrollTop: scrollTop
                }, 500);
            });
        }


        $(window).scroll(function() {
            let scrollDistance = $(window).scrollTop();
            $('[id^="n"]').each(function() {
                let elemTop = $(this).offset().top;
                let elemBottom = elemTop + $(this).outerHeight();
                let elementId = $(this).attr('id');
                let correspondingTabItem = $('[id="'+elementId+'"]');
                if (scrollDistance >= elemTop - 300 && scrollDistance <= elemBottom + 5 ) {
                    $('[data-scroll]').parent().removeClass('active')
                    $('[data-scroll="#'+elementId+'"]').parent().addClass('active');

                } else {
                    $('[data-scroll="#'+elementId+'"]').parent().removeClass('active');
                }
            });
        });

    }


    let headerContacts =  document.querySelector('.header__contacts');

    if(window.innerWidth <= 992 && headerContacts){
        nav.append(headerContacts.cloneNode(true))
    }
})