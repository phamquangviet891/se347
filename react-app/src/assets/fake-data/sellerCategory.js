import category1 from "../pictures/category1.png";
import category2 from "../pictures/category2.png";
import category3 from "../pictures/category3.png";
import drink from "../pictures/drink-pic.png";
import food from "../pictures/food-pic.png";

const categories = [
  {
    id: 1,
    name: "Shirt",
    img: category1,
    amount: 100,
    subcategories: [
      {
        id: 11,
        name: "Fruits",
        img: food,
        amount: 50,
        subcategories: [
          { id: 31, name: "Apple", img: food, amount: 50 },
          { id: 32, name: "Orange", img: food, amount: 50 },
        ],
      },
      {
        id: 12,
        name: "Vegetables",
        img: food,
        amount: 50,
        subcategories: [
          { id: 31, name: "Apple", img: food, amount: 50 },
          { id: 32, name: "Orange", img: food, amount: 50 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Home Appliances",
    img: category2,
    amount: 100,
    subcategories: [
      {
        id: 21,
        name: "Kitchen Tools",
        img: category2,
        amount: 30,
        subcategories: [
          { id: 31, name: "Cookers", img: category2, amount: 50 },
          { id: 32, name: "Pepsi", img: category2, amount: 50 },
        ],
      },
      {
        id: 22,
        name: "Batteries",
        img: category3,
        amount: 70,
        subcategories: [
          { id: 31, name: "Apple juice", img: category3, amount: 50 },
          { id: 32, name: "Orange juice", img: category3, amount: 50 },
        ],
      },
      {
        id: 23,
        name: "Juice",
        img: drink,
        amount: 70,
        subcategories: [
          { id: 31, name: "Apple juice", img: drink, amount: 50 },
          { id: 32, name: "Orange juice", img: drink, amount: 50 },
        ],
      },
    ],
  },
];

export default categories;
