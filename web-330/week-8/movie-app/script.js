/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Leslie Khattarchebli
  Date: 7/20/25
  Filename: script.js
*/

"use strict";

const movies = [
  // Add your movie objects here
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    synopsis: "A skilled thief uses dream-sharing technology to perform corporate espionage."
  },


  // Add more objects as needed...

];

function fetchMovie(title) {
  // Implement this function
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = movies.find(m => m.title === title);
      if (movie) {
        resolve(movie);
      } else {
        reject(new Error("Movie not found."));
      }
    }, 1000); // Simulates 1 second network delay
  });
}


document.getElementById("movie-form").addEventListener("submit", async (event) => {
  // Implement this function
  const title = document.getElementById("title-input").value;

  try {
    const movie = await fetchMovie(title); // Simulate fetching from array

    // Update the HTML with movie details
    document.getElementById("display-title").textContent = movie.title;
    document.getElementById("display-director").textContent = movie.director;
    document.getElementById("display-year").textContent = movie.releaseYear;
    document.getElementById("display-synopsis").textContent = movie.synopsis;
  } catch (error) {
    console.error(error.message);
    document.getElementById("movie-details").textContent = "Movie not found.";
  }
});