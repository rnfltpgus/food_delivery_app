const screens = {
  main_layout: "MainLayout",
  home: "Home",
  notification: "Notification",
  cart: "Cart",
  myInformation: "MyInformation",
  search: "Search",
};

const bottom_tabs = [
  {
    id: 0,
    label: screens.home,
  },
  {
    id: 1,
    label: screens.notification,
  },
  {
    id: 2,
    label: screens.cart,
  },
  {
    id: 3,
    label: screens.myInformation,
  },
  {
    id: 5,
    label: screens.search,
  },
];

export default {
  screens,
  bottom_tabs,
};
