const chickenBBQ = {
  id: 1,
  name: "Chicken",
  description: "Chicken patty BBQ",
  categories: [1, 2],
  price: 15.99,
  calories: 78,
};

const Barbecue = {
  id: 2,
  name: "Barbecue",
  description: "Barbecue patty BBQ",
  categories: [1, 2],
  price: 10.99,
  calories: 78,
};

const hotTacos = {
  id: 3,
  name: "hotTacos",
  description: "Mexican tortilla & tacos",
  categories: [1, 3],
  price: 10.99,
  calories: 78,
};

const vegBiryani = {
  id: 4,
  name: "K.J. Chicken Salad",
  description: "Chicken salad",
  categories: [1, 2, 3],
  price: 10.29,
  calories: 78,
};

const wrapSandwich = {
  id: 5,
  name: "Wrap Sandwich",
  description: "Grilled vegetables sandwich",
  categories: [1, 2],
  price: 10.99,
  calories: 78,
};

const menu = [
  {
    id: 1,
    name: "Korean BBQ",
    list: [Barbecue, chickenBBQ, hotTacos, wrapSandwich, vegBiryani],
  },
  {
    id: 2,
    name: "Voge",
    list: [Barbecue, chickenBBQ, vegBiryani, wrapSandwich, hotTacos],
  },
  {
    id: 3,
    name: "Side",
    list: [Barbecue, chickenBBQ, vegBiryani, hotTacos, wrapSandwich],
  },
  {
    id: 4,
    name: "Drinks",
    list: [chickenBBQ, hotTacos, wrapSandwich, vegBiryani, Barbecue],
  },
  {
    id: 5,
    name: "chicken",
    list: [Barbecue, chickenBBQ, vegBiryani, hotTacos, wrapSandwich],
  },
  {
    id: 6,
    name: "Chinese food",
    list: [chickenBBQ, vegBiryani, Barbecue, hotTacos, wrapSandwich],
  },
];

export default {
  menu,
};
