import './styles.css';
import menu from './menu.json';
import { createMenuCardsMarkup } from './js/createMenuCardsMarkup.js';

const refs = {
  themeSwitcher: document.querySelector('.js-switch-input'),
  menuList: document.querySelector('.js-menu'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

setTheme();

const menuCardsMarkup = createMenuCardsMarkup(menu);
refs.menuList.insertAdjacentHTML('beforeend', menuCardsMarkup);

refs.themeSwitcher.addEventListener('change', changeTheme);

function changeTheme() {
  let markupTheme = refs.body.classList.value;

  if (markupTheme === Theme.LIGHT) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    return
  }

  if (markupTheme === Theme.DARK){
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function setTheme() {
  let markupTheme = refs.body.classList.value;
  let localStorageTheme = localStorage.getItem('theme');

  if (localStorageTheme && markupTheme !== localStorageTheme) {
    refs.body.classList.replace(markupTheme, localStorageTheme);
  }

  if (localStorageTheme === Theme.DARK) {
    refs.themeSwitcher.checked = true;
  }
}
