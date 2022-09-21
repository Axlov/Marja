function ratingDisplay() {
  let rating = document.getElementById("myRange").value;
  let rangeV = document.querySelector(".value-container");

  document.getElementById("rateValue").textContent = rating;

  const newValue = Number(((rating - 0) * 100) / (100 - 0)),
    newPosition = 55 - newValue * 1.4;
  console.log(newPosition);
  rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
}

document.addEventListener("DOMContentLoaded", ratingDisplay);
