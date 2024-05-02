function accordion () {
    const btns = document.querySelectorAll(".mobile-links__parent-btn");

    btns.forEach(function(btn){
        btn.addEventListener('click', function(){
            const content = btn.nextElementSibling;
            // content.style.maxHeight = '200px';
            const isOpen = content.classList.toggle('mobile-sub--open');

            if(isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = '0px';
            }
        })
    })
}

export default accordion;