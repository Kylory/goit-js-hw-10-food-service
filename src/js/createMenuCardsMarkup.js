import memuCardsTpl from '../templates/menuCards.hbs';

export function createMenuCardsMarkup(dishes) {
  return memuCardsTpl(dishes);
}
