window.addEventListener('DOMContentLoaded', () => {
    let accords = document.querySelectorAll('.whatTreat__accordeon');

    if(accords){
        accords.forEach((el) => {
            el.addEventListener('click', () => {
                $(el).find('.whatTreat__accordeonHidden').slideToggle();
                $(el).find('.whatTreat__accordeonTop>span').toggleClass('rotate');
            })
        })
    }
})