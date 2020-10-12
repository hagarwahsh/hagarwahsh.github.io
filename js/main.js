$(document).ready(function() {
    burgerMenu();
});

function burgerMenu() {
    $(".burger-menu").click(function() {
        $(this).toggleClass("open");
        $(this).siblings(".navigation").toggleClass("visible");
    });
}