function buttonToggle(x) {
    x.classList.toggle("change");
}
	
function menuToggle() {
	var element = document.getElementById("collapsed");
	element.classList.toggle("menu-content");
	element.classList.toggle("open");
}
	
function hover(element) {
	element.setAttribute('src', 'images/about-head-alt.jpg');
}

function unhover(element) {
	element.setAttribute('src', 'images/about-head.jpg');
}

$(document).ready(function () {
    $(".arrow-right").bind("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "+=336"
        }, 750);
    });
    $(".arrow-left").bind("click", function (event) {
        event.preventDefault();
        $(".vid-list-container").stop().animate({
            scrollLeft: "-=336"
        }, 750);
    });
});