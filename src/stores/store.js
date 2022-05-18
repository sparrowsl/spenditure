import { writable } from "svelte/store";

export function getCurrentDate() {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();

  return `${year}-${month}-${day}`;
}

export function getLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export let itemToEdit = writable({});
export let showEditModal = writable(false);
export const items = writable(getLocal("spenditures") || []);

// export const dummy = [
//   {
//     id: 100,
//     name: "Chocolate",
//     price: 200,
//     date: "2022-04-12",
//   },
//   {
//     id: 102,
//     name: "Pen",
//     price: 10,
//     date: "2022-04-12",
//   },
//   {
//     id: 200,
//     name: "Milk",
//     price: 300,
//     date: "2022-04-12",
//   },
//   {
//     id: 101,
//     name: "Sugar",
//     price: 100,
//     date: "2022-04-12",
//   },
// ];
