"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-03

      Project to show a recipe with expanding/contracting content
      Author: Leslie Khattarchebli
      Date: 7/27/2025

      Filename: project12-03.js
*/

$(document).ready(function () {
  $("article > h2").click(function (event) {
    let heading = $(event.target);
    let list = heading.next();
    let headingImage = heading.children("img");

    list.slideToggle(500);

    let currentSrc = headingImage.attr("src");

    if (currentSrc === "plus.png") {
      headingImage.attr("src", "minus.png");
    } else {
      headingImage.attr("src", "plus.png");
    }
  });
});
