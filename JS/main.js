$(function() {

/* Navigation */
let header = $("#header");
let headerH = header.innerHeight();
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize", function(){

    scrollPos = $(this).scrollTop();

    

    if( scrollPos > headerH){
        header.addClass("changeColor");
        
    } else {
        header.removeClass("changeColor");
    }
});


/* Scroll */

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementoffset = $(elementId).offset().top;

    console.log(elementoffset);

    $("html, body").animate({
        scrollTop: elementoffset - 90
    }, 1000);
});


/* Nav Toggle */
let nav = $("#nav");
let navToggle = $("#navToggle");

navToggle.on("click", function(event) {
    event.preventDefault();

    nav.toggleClass("show");
});

});



/*document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('_req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];

            formRemoveError(input);

            if (input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                } else if(input.getAttribute("type") === "checkbox" && input.checked === false){
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === "") {
                        formAddError(input);
                        error++; 
                    }
                }
            }
             
        }
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});*/