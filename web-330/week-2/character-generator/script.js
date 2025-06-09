/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Leslie Khattarchebli
  Date: 6/8/2025
  Filename: Closures
*/

"use strict";

function createCharacter(name, gender, characterClass) {
  // create character function
    return {
        getName: function() {
            return name;
        },
        getGender: function() {
            return gender;
        },
        getClass: function() {
            return charClass;
        }
    };
}

document.getElementById("generateHero").addEventListener,"click", function(e) {
  e.preventDefault();

function createCharacter(name, gender, charClass) {
    return {
        getName: () => name,
        getGender: () => gender,
        getClass: () => characterClass
    };
}
}


// Handle form submission
document.getElementById("characterForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    // Form values
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const charClass = document.getElementById("class").value;

    // Create character
    const newCharacter = createCharacter(name, gender, characterClass);

    // Display Character Information
    document.getElementById("characterDisplay").innerHTML = `
        <p><strong>Name:</strong> ${newCharacter.getName()}</p>
        <p><strong>Gender:</strong> ${newCharacter.getGender()}</p>
        <p><strong>Class:</strong> ${newCharacter.getClass()}</p>
    `;
})
;