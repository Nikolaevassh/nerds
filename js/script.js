// mobile menu
var page = document.querySelector("html");
document.addEventListener("DOMContentLoaded", function () {
    var deviceAgent = navigator.userAgent.toLowerCase();

    if (deviceAgent.match(/android/i) ||
        deviceAgent.match(/webos/i) ||
        deviceAgent.match(/iphone/i) ||
        deviceAgent.match(/ipad/i) ||
        deviceAgent.match(/ipod/i) ||
        deviceAgent.match(/blackberry/i) ||
        deviceAgent.match(/windows phone/i)
    ) {
        page.classList.add("mobile");
    }

    document.documentElement.classList.replace('no-js', 'js');

    // open menu
    var openMenu = document.querySelector(".btn-mobile-navigation");
    var closeMenu = document.querySelector(".btn-menu-close");
    var mobileMenu = document.querySelector(".main-nav-right");

    openMenu.addEventListener("touchend", function () {
        mobileMenu.classList.add("active");
    });

    openMenu.addEventListener("click", function () {
        mobileMenu.classList.add("active");
    });

    closeMenu.addEventListener("touchend", function () {
        mobileMenu.classList.remove("active");
    });

    closeMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
    });

    // popup
    var openPopup = document.querySelector(".js-contacts-popup");
    var contactsPopup = document.querySelector(".js-feedback-popup");
    var modalOverlay = document.querySelector(".modal-overlay");
    var closePopup = document.querySelector(".popup-close");

    openPopup.addEventListener("click", function () {
        modalOverlay.classList.add("active");
        contactsPopup.classList.add("active");
    });

    closePopup.addEventListener("click", function () {
        modalOverlay.classList.remove("active");
        contactsPopup.classList.remove("active");
    });

    // slider
    var currentIndex;
    $(".promo-slide:first").fadeIn();
    $(".slides-switches-item").click(function () {
        console.log($(this).index())
        $(".slides-switches-item").prop("checked", false);

        $(this).prop("checked", true);
        currentIndex = $(this).index() + 1;
        $(".promo-slide").fadeOut(0);
        $(".promo-slide:nth-child(" + currentIndex + ")").fadeIn();
    });

    // filters


    var openFilters = document.querySelector(".btn-filters-form");
    var filters = document.querySelector(".mobile .filters");

    openFilters.addEventListener("touchend", function () {
        this.nextElementSibling.classList.toggle("active");
    });

});