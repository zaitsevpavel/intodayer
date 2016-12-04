/*jslint browser: true*/
/*global alert */
/*jslint white: true */



// Определяем на какой мы странице
var locate = location.toString();
var ind = locate.lastIndexOf('/');
var nowPage = null;
if (ind >= 0) {
    nowPage = locate.slice(ind + 1, locate.length - 5);
    setCurrentMenu(nowPage);
}

function setCurrentMenu(nameClass) {
    var menu_div = document.getElementsByClassName('menu');
    var menu_elements = menu_div[0].getElementsByTagName('li');
    for (var i = 0; i < menu_elements.length; i++) {
        menu_elements[i].style.width = '20%';
    }
    var setCurrent = menu_div[0].getElementsByClassName(nameClass);
    setCurrent[0].style.width = '100%';
    setCurrent[0].style.boxShadow = 'none';
    setCurrent[0].style.backgroundColor = 'white';
//	setCurrent[0].style.borderLeft = '3px solid #8b1deb';
//	setCurrent[0].style.borderRight = '3px solid #8b1deb';
//	setCurrent[0].style.borderTop = '3px solid #8b1deb';
//	setCurrent[0].style.borderBottom = 'none';
}

