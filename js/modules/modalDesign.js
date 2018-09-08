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