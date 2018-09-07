function mainSlider() {
    let slides = document.getElementsByClassName('main-slider-item');
    let slideIndex = 1;
    showSlides(slideIndex);

    function showSlides(n) {
        for(let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
            slides[i].style.animation = '';
        };

        if(n > slides.length) {
            n = 1;
            returnBlock(n);
            n++;
        } else {
            returnBlock(n);
            n++;
        };

        let showInterval = setInterval(() => showSlides(n), 5000);
    };

    function returnBlock(n) {
        slides[n-1].style.display = 'block';
        slides[n-1].style.animation = 'fadeInDown 1s';
    };
};

module.exports = mainSlider;