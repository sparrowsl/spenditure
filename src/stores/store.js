import { writable } from "svelte/store";


const day = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

export const currentDate = `${year}-${month}-${day}`;
export let selectedDate = writable("2022-04-12");
export let selectedID = writable(1)


export const dates = writable([
  {
    date: "2022-04-12",
    items: [
      {
        itemID: 100,
        itemName: "Chocolate",
        itemPrice: 200,
      },
      {
        itemID: 102,
        itemName: "Pen",
        itemPrice: 10,
      },
      {
        itemID: 120,
        itemName: "Book",
        itemPrice: 150,
      },
    ]
  },
  {
    date: "2022-04-13",
    items: [
      {
        itemID: 200,
        itemName: "Milk",
        itemPrice: 300,
      },
      {
        itemID: 101,
        itemName: "Sugar",
        itemPrice: 100,
      },
    ]
  },
  {
    date: "2022-04-19",
    items: [
      {
        itemID: 210,
        itemName: "Spoon",
        itemPrice: 2000,
      },
      {
        itemID: 190,
        itemName: "Car",
        itemPrice: 100,
      },
      {
        itemID: 400,
        itemName: "Book",
        itemPrice: 1500,
      },
    ]
  },
  {
    date: "2022-04-10",
    items: []
  },
]);

// localStorage.setItem("spenditures", dates)

// const items = JSON.stringify(localStorage.getItem("spenditures"))
// console.log(items)
