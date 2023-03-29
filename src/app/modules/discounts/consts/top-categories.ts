import { CATEGORIES } from './categories';

export const TOP_CATEGORIES = [
  {
    name: 'ВСЕ СКИДКИ',
    subCategories: CATEGORIES,
    count: getRandomInt(),
  },
  {
    name: 'ХИТЫ',
    subCategories: CATEGORIES,
    count: getRandomInt(),
  },
  {
    name: 'К ПРАЗДНИКУ',
    subCategories: CATEGORIES,
    count: getRandomInt(),
  },
  {
    name: 'НОВЫЕ',
    subCategories: CATEGORIES,
    count: getRandomInt(),
  },
];

function getRandomInt(): number {
  const min = -100;
  const max = 100;
  return Math.floor(Math.random() * (max - min) + min);
}
