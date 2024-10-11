let score = parseFloat(prompt("Enter your score:"));

if (isNaN(score)) {
  console.log("Please enter a valid number.");
} else if (score >= 90) {
  console.log("Excellent");
} else if (score >= 80) {
  console.log("Good");
} else if (score >= 70) {
  console.log("Fair");
} else {
  console.log("Needs Improvement");
}
