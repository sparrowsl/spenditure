import { writable } from "svelte/store";


export const spenditures = writable([
  {
    // "john": {
    id: 1,
    date: "Jan 12, 1999",
    name: "John",
    spendings: [
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
    // }
  },
  {
    // "john": {
    id: 2,
    date: "June 12, 1899",
    name: "Spencer",
    spendings: [
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
    // }
  },
  {
    // "john": {
    id: 3,
    date: "Jan 2, 1990",
    name: "Jack",
    spendings: [
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
    // }
  },
  {
    // "john": {
    id: 4,
    date: "Dec 20, 2010",
    name: "Martin",
    spendings: []
    // }
  }
]);

export let currentChoosenID = writable(1)

function getUser(userID) {
}

function addItem(item = {}, addTo = {}) {
  console.log(item);
  console.log(addTo);
}
