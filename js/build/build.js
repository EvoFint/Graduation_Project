(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

    let mainSlider = require('../modules/mainSlider.js');
    let modalGift = require('../modules/modalGift.js');
    let modalDesign = require('../modules/modalDesign.js');
    let modalConsultation = require('../modules/modalConsultation.js');

    mainSlider();
    modalGift();
    modalDesign();
    modalConsultation();

});
},{"../modules/mainSlider.js":2,"../modules/modalConsultation.js":3,"../modules/modalDesign.js":4,"../modules/modalGift.js":5}],2:[function(require,module,exports){
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
function modalConsultation() {
    let buttonConsultation = document.getElementsByClassName('button-consultation');
    let popupConsultation = document.querySelector('.popup-consultation');
    let popupConsContent = popupConsultation.querySelector('.popup-content');
    let popupDesign = document.querySelector('.popup-design');
    let popupGift = document.querySelector('.popup-gift');

    window.addEventListener('click', function() {
        event.preventDefault();
        let elem = event.target;
        for(let i = 0; i < buttonConsultation.length; i++) {
            if(elem == buttonConsultation[i]) {
                modal();
            }
        }
    });

    setTimeout(function() {
        if(popupGift.style.display == '' && popupDesign.style.display == '' && popupConsultation.style.display == '') {
            modal();
        }
    }, 60000);

    popupConsultation.addEventListener('click', function() {
        event.preventDefault();
        if(event.target.className == 'popup-close' || event.target.className == 'popup-consultation') {
            popupConsContent.style.animation = 'zoomOut 1s';
            document.body.style.overflow = '';
            let popupInterval = setInterval(function() {
                popupConsultation.style.display = 'none';
            }, 500);
            setTimeout(function() {
                clearInterval(popupInterval);
            }, 1000);
        }
    });

    function modal() {
        popupConsultation.style.display = 'block';
        popupConsContent.style.animation = 'zoomIn 1s';
        document.body.style.overflow = 'hidden';
    }
}

module.exports = modalConsultation;
},{}],4:[function(require,module,exports){
function modalDesign() {
    let buttonDesign = document.getElementsByClassName('button-design');
    let popupDesign = document.querySelector('.popup-design');
    let popupDesignContent = popupDesign.querySelector('.popup-content');

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
},{}],5:[function(require,module,exports){
function modalGift() {
    let gift = document.querySelector('.fixed-gift');
    let popupGift = document.querySelector('.popup-gift');
    let popupGiftContent = popupGift.querySelector('.popup-content');
    
    gift.addEventListener('click', function() {
        modal();
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

    let endSiteInterval = setInterval(function() {
        endSite();
    }, 1000);

    function modal() {
        gift.style.display = 'none';
        popupGift.style.display = 'block';
        popupGiftContent.style.animation = 'zoomIn 1s';
        document.body.style.overflow = 'hidden';
    }

    function endSite() {
        let scrollHeight = document.body.scrollHeight;
        let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if(posTop + 700 == scrollHeight && gift.style.display == '') {
            modal();
            clearInterval(endSiteInterval);
        }
    }
};

module.exports = modalGift;
},{}]},{},[1]);
