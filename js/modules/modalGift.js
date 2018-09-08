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