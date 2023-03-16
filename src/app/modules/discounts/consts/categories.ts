import {
  AutoCentersSubCategories,
  BeautySaloonSubCategories,
  EntertainmentSubCategories, FoodAllCentersSubCategories,
  FoodDeliverySubCategories, MedCentersSubCategories
} from "./sub-categories";

export const CATEGORIES = [
  {
    name: 'Доставка еды',
    subCategories: FoodDeliverySubCategories,
    count: getRandomInt()
  },
  {
    name: 'Салоны красоты',
    subCategories: BeautySaloonSubCategories,
    count: getRandomInt()
  },
  {
    name: 'Развлечения',
    subCategories: EntertainmentSubCategories,
    count: getRandomInt()
  },
  {
    name: 'Медцентры',
    subCategories: MedCentersSubCategories,
    count: getRandomInt()
  },
  {
    name: 'Авто',
    subCategories: AutoCentersSubCategories,
    count: getRandomInt()
  },
  {
    name: 'Вся еда',
    subCategories: FoodAllCentersSubCategories,
    count: getRandomInt()
  },
  {
    name:   'Самовывоз еды (выгоднее)',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Рестораны',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Подарочные сертификаты',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Недвижимость',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Отели. Квартиры. Усадьбы',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Детям',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'К празднику',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Здоровье и спорт',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Товары и подарки',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Цветы' ,
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Клининг/Уборка',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Еда' ,
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Туризм' ,
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Обучение' ,
    subCategories: [],
    count: getRandomInt()
  },

  {
    name: 'Для животных',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Продажа готового бизнеса',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Ремонт дома. Стройка',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Кредиты',
    subCategories: [],
    count: getRandomInt()
  },
  {
    name: 'Мебель' ,
    subCategories: [],
    count: getRandomInt()
  },
  {
    name:   'Прочее',
    subCategories: [],
    count: getRandomInt()
  },
]

function getRandomInt() {
  let min = -100;
  let max = 100;
  return Math.floor(Math.random() * (max - min) + min);
}
