/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Leslie Khattarchebli
  Date: 7/13/25
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {
    name: "Chef Leslie",
    specialty: "Sushi and Japanese fusion",
    weakness: "adds too much rice",
    restaurantLocation: "Bakersfield, CA"
  },
  {
    name: "Chef George",
    specialty: "Italian seafood and pasta",
    weakness: "Allergic to shellfish",
    restaurantLocation: "Glendale, CA"
  },
  {
    name: "Chef Jessica",
    specialty: "Vegan desserts",
    weakness: "Store is closed on weekends",
    restaurantLocation: "Joshua Tree, CA"
  }
];


// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay

  return new Promise((resolve) => {
    setTimeout(() => {
      const chef = {
        name: "Chef Leslie",
        specialty: "Sushi and Japanese fusion",
        weakness: "adds too much rice",
        restaurantLocation: "Bakersfield, CA"
      };
      resolve(chef);
    }, 2000); // 2-second delay
  });

}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay

  return new Promise((resolve) => {
    setTimeout(() => {
      const chef = {
        name: "Chef George",
        specialty: "Italian seafood and pasta",
        weakness: "Allergic to shellfish",
        restaurantLocation: "Glendale, CA"
      };
      resolve(chef);
    }, 2000); // 2-second delay
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay

  return new Promise((resolve) => {
    setTimeout(() => {
      const chef = {
        name: "Chef Jessica",
        specialty: "Vegan desserts",
        weakness: "Store is closed on the weekends",
        restaurantLocation: "Joshua Tree, CA"
      };
      resolve(chef);
    }, 2000); // 2-second delay
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
const sections = [document.getElementById("chef1"), document.getElementById("chef2"), document.getElementById("chef3")];
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
  .then((results) => {
    results.forEach((result, index) => {
      const section = sections[index];
      if (result.status === "fulfilled") {
        const chef = result.value;
        section.innerHTML = `
          <h2>${chef.name}</h2>
          <p>Specialty: ${chef.specialty}</p>
          <p>Weakness: ${chef.weakness}</p>
          <p>Restaurant: ${chef.restaurantLocation}</p>
        `;
        // Update webpage with chef info (e.g., display name and specialty)
        console.log(`Chef ${index + 1} loaded: ${chef.name}`);
      }

      else {
        // Display fallback or error message
        console.warn(`Chef ${index + 1} failed to load: ${result.reason}`);
        section.innerHTML = `<p class="error"> Error loading chef data: ${result.reason}</p>`;
      }
    });
  });

