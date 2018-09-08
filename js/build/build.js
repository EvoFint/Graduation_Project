(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

    let mainSlider = require('../modules/mainSlider.js');
    let modalGift = require('../modules/modalGift.js');
    let modalDesign = require('../modules/modalDesign.js');

    mainSlider();
    modalGift();
    modalDesign();

});
},{"../modules/mainSlider.js":2,"../modules/modalDesign.js":3,"../modules/modalGift.js":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
function modalDesign() {
    let buttonDesign = document.getElementsByClassName('button-design');
    let popupDesign = document.querySelector('.popup-design');
    let popupDesignContent = popupDesign.querySelector('.popup-content');

    console.log(buttonDesign)

    popupDesign.addEventListener('click', function() {
        event.preventDefault();
        if(event.target.className == 'popup-close' || event.target.className == 'popup-design') {
            popupDesignContent.style.animation = 'zoomOut 1s';
            document.body.style.overflow = '';
            let popupInterval = setInterval(function() {
                popupDesign.style.display = 'none';
            }, 500);
            setTimeout(function() {
                clearInterval(popupInterval);
            }, 1000);
        }
    });

    window.addEventListener('click', function() {
        event.preventDefault();
        let elem = event.target;
        for(let i = 0; i < buttonDesign.length; i++) {
            if(elem == buttonDesign[i]) {
                popupDesign.style.display = 'block';
                popupDesignContent.style.animation = 'zoomIn 1s';
                document.body.style.overflow = 'hidden';
            }
        }
    });

};

module.exports = modalDesign;
},{}],4:[function(require,module,exports){
function modalGift() {
    let gift = document.querySelector('.fixed-gift');
    let popupGift = document.querySelector('.popup-gift');
    let popupGiftContent = popupGift.querySelector('.popup-content');
    
    gift.addEventListener('click', function() {
        gift.style.display = 'none';
        popupGift.style.display = 'block';
        popupGiftContent.style.animation = 'zoomIn 1s';
        document.body.style.overflow = 'hidden';
    });

    popupGift.addEventListener('click', function() {
        if(event.target.className == 'popup-close' || event.target.className == 'popup-gift') {
            popupGiftContent.style.animation = 'zoomOut 1s';
            document.body.style.overflow = '';
            let popupInterval = setInterval(function() {
                popupGift.style.display = 'none';
            }, 500);
            setTimeout(function() {
                clearInterval(popupInterval);
            }, 1000);
        }
    });
};

module.exports = modalGift;
},{}]},{},[1]);
