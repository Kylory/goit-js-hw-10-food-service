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

setDefaultTheme();

const menuCardsMarkup = createMenuCardsMarkup(menu);

refs.menuList.insertAdjacentHTML('beforeend', menuCardsMarkup);

refs.themeSwitcher.addEventListener('change', changeTheme);

function changeTheme() {
  let currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.LIGHT) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function setDefaultTheme() {
  let defaultTheme = refs.body.classList.value;
  let localStorageTheme = localStorage.getItem('theme');

  if (defaultTheme !== localStorageTheme) {
    refs.body.classList.replace(defaultTheme, localStorageTheme);
  }

  if (localStorageTheme === Theme.DARK) {
    refs.themeSwitcher.checked = true;
  }
}
