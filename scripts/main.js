$(document).ready(function () {
    let hamburger = $('.hamburger_container');
    let sideMenuClose = $('.menu_close_container');
    let sideMenu = $('.menu_container');
    let menuList = $('.menu_list');
    let menuSocialContainer = $('.menu_social_container');
    let menuCopyright = $('.menu_copyright');
    hamburger.click(function () {
        sideMenu.css('visibility', 'visible');
        sideMenu.css('right', '0');
        sideMenu.css('opacity', '1');
        menuList.css('opacity', '1');
        menuSocialContainer.css('opacity', '1');
        menuCopyright.css('opacity', '1');
    });
    sideMenuClose.click(function () {
        sideMenu.css('visibility', 'hidden');
        sideMenu.css('right', '-100vw');
        sideMenu.css('opacity', '0');
        menuList.css('opacity', '0');
        menuSocialContainer.css('opacity', '0');
        menuCopyright.css('opacity', '0');
    });
});