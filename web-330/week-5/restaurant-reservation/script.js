/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Leslie Khattarchebli
  Date: 6/27/2025
  Filename: Chapter-2 Assignment
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 8, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: true },
  { tableNumber: 4, capacity: 2, isReserved: false }
];


// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  const tables = [
  { tableNumber: 1, capacity: 2, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: true },
  { tableNumber: 3, capacity: 6, isReserved: false },
  { tableNumber: 4, capacity: 3, isReserved: false }
];

function reserveTable(tableNumber, callback, delay) {
  const table = tables.find(t => t.tableNumber === tableNumber);

  if (!table) {
    callback(`Table ${tableNumber} does not exist.`);
    return;
  }

  if (table.isReserved) {
    callback(`Table ${tableNumber} is already reserved.`);
    return;
  }

  table.isReserved = true;

  setTimeout(() => {
    callback(`Table ${tableNumber} has been successfully reserved.`);
  }, delay);
}

}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function reserveTable (e) {
    // Add your code here

  if (!table || table.isReserved) {
    callback(`Table ${tableNumber} is unavailable.`);
    return;
  }

  table.isReserved = true;

  setTimeout(() => {
    callback(`Table ${tableNumber} has been reserved.`);
  }, delay);
}
);
