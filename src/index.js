import { header } from '../src/header'
import { homePage }  from '../src/home'
import { MenuPage } from '../src/menu'
import {aboutPage} from '../src/about'

header();
homePage()
;(function() {
    const btn1Home = document.querySelector('.btn-nav-1')
    const btn2Menu = document.querySelector('.btn-nav-2')
    const btn3about = document.querySelector('.btn-nav-3')

    btn1Home.addEventListener('click', homeTab)
    btn2Menu.addEventListener('click', menuTab)
    btn3about.addEventListener('click', aboutTab)
})();


function deleteTab() {
   let x = document.querySelector('.container')
    x.remove()
    const btn1Home = document.querySelector('.btn-nav-1')
    btn1Home.classList.remove('active')
    const btn2Menu = document.querySelector('.btn-nav-2')
    btn2Menu.classList.remove('active')
    const btn3about = document.querySelector('.btn-nav-3')
    btn3about.classList.remove('active')
};

function homeTab() {
    deleteTab()
    homePage()
};


function menuTab(){
    deleteTab()
    MenuPage()
};

function aboutTab() {
    deleteTab()
    aboutPage()
}