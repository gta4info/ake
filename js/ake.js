(function() {
    let elements;
    let windowHeight;

    document.onreadystatechange = (event) => {
        if (document.readyState === 'complete') {
            document.querySelectorAll('.card').forEach(function (c) {
                c.classList.add('hidden')
            })
        }
    }

    function init() {
        elements = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
    }

    function checkPosition() {
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let positionFromTop = elements[i].getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fade-in-element');
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
                element.classList.remove('fade-in-element');
            }
        }
    }

    window.onload = (event) => {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);

        init();
        checkPosition();
    }
})();