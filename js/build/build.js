(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {

    let mainSlider = require('../modules/mainSlider.js');

    mainSlider();

});
},{"../modules/mainSlider.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);