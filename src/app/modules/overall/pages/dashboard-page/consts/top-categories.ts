import {CATEGORIES} from "./categories";

export const TOP_CATEGORIES = [
  {
    name: 'ХИТЫ',
    subCategories: CATEGORIES,
    count: getRandomInt()
  },
  {
    name: 'К ПРАЗДНИКУ',
    subCategories: CATEGORIES,
    count: getRandomInt()
  },
  {
    name: 'НОВЫЕ',
    subCategories: CATEGORIES,
    count: getRandomInt()
  }
]

function getRandomInt() {
  let min = -100;
  let max = 100;
  return Math.floor(Math.random() * (max - min) + min);
}
