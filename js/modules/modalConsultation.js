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