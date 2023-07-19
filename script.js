// Get the elements this is all test information
const progressElement = document.getElementById('progress');

// Set the total calories and calories eaten
const totalCalories = 2000;
const caloriesEaten = 754;

// Calculate the progress percentage
const progressPercentage = (caloriesEaten / totalCalories) * 100;

// Update the progress bar width
progressElement.style.width = progressPercentage + '%';
