function modalGift() {
    let gift = document.querySelector('.fixed-gift');
    let popupGift = document.querySelector('.popup-gift');
    let popupGiftContent = popupGift.querySelector('.popup-content');
    
    gift.addEventListener('click', function() {
        gift.style.display = 'none';
        popupGift.style.display = 'block';
        popupGiftContent.style.animation = 'zoomIn 1s';
    });

    popupGift.addEventListener('click', function() {
        if(event.target.className == 'popup-close' || event.target.className == 'popup-gift') {
            popupGiftContent.style.animation = 'zoomOut 1s';
            let popupInterval = setInterval(function() {
                popupGift.style.display = 'none';
            }, 1000);
        }
    });
};

module.exports = modalGift;