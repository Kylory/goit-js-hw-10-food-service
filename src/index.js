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

checkCurrentTheme();

const menuCardsMarkup = createMenuCardsMarkup(menu);
refs.menuList.insertAdjacentHTML('beforeend', menuCardsMarkup);

refs.themeSwitcher.addEventListener('change', switchTheme);

function switchTheme() {
  let markupTheme = refs.body.classList.value;

  markupTheme === Theme.LIGHT
    ? refs.body.classList.replace(Theme.LIGHT, Theme.DARK)
    : refs.body.classList.replace(Theme.DARK, Theme.LIGHT);

  let newMarkupTheme = refs.body.classList.value;
  localStorage.setItem('theme', newMarkupTheme);
}

function checkCurrentTheme() {
  let localStorageTheme = localStorage.getItem('theme');

  if (!localStorageTheme) {
    localStorage.setItem('theme', Theme.LIGHT);
  }

  if (localStorageTheme === Theme.DARK) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    refs.themeSwitcher.checked = true;
  }
}
