const categories = [
  {
    id: 1,
    name: "Korean BBQ",
  },
  {
    id: 2,
    name: "Voge",
  },
  {
    id: 3,
    name: "Side",
  },
  {
    id: 4,
    name: "Drinks",
  },
];

const chicken = {
  id: 1,
  name: "Chicken",
  description: "Chicken patty BBQ",
  categories: [1, 2],
  price: 15.99,
  horoscope: "⭐️ 4.5 (5,000+)",
};

const Barbecue = {
  id: 2,
  name: "Barbecue",
  description: "Barbecue patty BBQ",
  categories: [1, 2],
  price: 10.99,
  horoscope: "⭐️ 4.5 (5,000+)",
};

const hotTacos = {
  id: 3,
  name: "hotTacos",
  description: "Mexican tortilla & tacos",
  categories: [1, 3],
  price: 10.99,
  horoscope: "⭐️ 4.5 (5,000+)",
};

const vegBiryani = {
  id: 4,
  name: "K.J. Chicken Salad",
  description: "Chicken salad",
  categories: [1, 2, 3],
  price: 10.29,
  horoscope: "⭐️ 4.5 (5,000+)",
};

const wrapSandwich = {
  id: 5,
  name: "Wrap Sandwich",
  description: "Grilled vegetables sandwich",
  categories: [1, 5],
  price: 10.99,
  horoscope: "⭐️ 4.5 (5,000+)",
};

const menu = [
  {
    id: 1,
    name: "Barbecue",
    list: [
      Barbecue,
      chicken,
      hotTacos,
      // wrapSandwich, vegBiryani
    ],
  },
  {
    id: 2,
    name: "Chicken",
    list: [
      Barbecue,
      chicken,
      vegBiryani,
      //  wrapSandwich, hotTacos
    ],
  },
  {
    id: 3,
    name: "HotTacos",
    list: [
      Barbecue,
      chicken,
      vegBiryani,
      //  hotTacos, wrapSandwich
    ],
  },
  {
    id: 4,
    name: "Magazine",
    list: [
      Barbecue,
      chicken,
      vegBiryani,
      // hotTacos, wrapSandwich
    ],
  },
  {
    id: 5,
    name: "Recommended",
    list: [
      chicken,
      vegBiryani,
      Barbecue,
      // hotTacos, wrapSandwich
    ],
  },
];

export default {
  menu,
};
