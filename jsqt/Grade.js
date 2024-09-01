let number = parseFloat(prompt("Enter student Marks")); // Convert input to a number

if (number > 80 && number <= 100) {
    console.log("Student grade is 'A'");
} else if (number >= 70 && number <= 80) {
    console.log("Student grade is 'B'");
} else if (number >= 60 && number <= 70) {
    console.log("Student grade is 'C'");
} else if (number >= 50 && number <= 60) {
    console.log("Student grade is 'D'");
} else if (number >= 0 && number <= 50) {
    console.log("Student grade is 'F'");
} else {
    console.log("Invalid marks entered");
}


