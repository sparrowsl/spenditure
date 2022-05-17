import { writable } from "svelte/store";

export function getCurrentDate() {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  return `${year}-${month}-${day}`;
}

export const items = writable([
  {
    id: 100,
    name: "Chocolate",
    price: 200,
    date: "2022-04-12",
  },
  {
    id: 102,
    name: "Pen",
    price: 10,
    date: "2022-04-12",
  },
  {
    id: 200,
    name: "Milk",
    price: 300,
    date: "2022-04-12",
  },
  {
    id: 101,
    name: "Sugar",
    price: 100,
    date: "2022-04-12",
  },
  {
    id: 210,
    name: "Spoon",
    price: 2000,
    date: "2022-04-12",
  },
  {
    id: 190,
    name: "Car",
    price: 100,
    date: "2022-04-12",
  },
  {
    id: 400,
    name: "Book",
    price: 1500,
    date: "2022-04-12",
  },
]);

// localStorage.setItem("spenditures", dates)

// const items = JSON.stringify(localStorage.getItem("spenditures"))
// console.log(items)
