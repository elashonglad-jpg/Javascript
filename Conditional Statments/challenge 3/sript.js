//challege 3

let marks = [78, 45, -5, 92, 60, 101, 55, 38];

// Variables for the class summary
let validMarks = 0;
let passes = 0;
let fails = 0;
let total = 0;

let highest = -1;
let highestStudent = 0;

let lowest = 101;
let lowestStudent = 0;

// Check each student's mark
for (let i = 0; i < marks.length; i++) {
    let mark = marks[i];
    let student = i + 1;

    // Skip invalid marks
    if (mark < 0 || mark > 100) {
        console.log(`Student ${student}: invalid mark, skipped`);
        continue;
    }

    // Count valid marks and add them to the total
    validMarks++;
    total += mark;

    // Find the grade
    let grade;

    if (mark >= 80) {
        grade = "A";
    } else if (mark >= 70) {
        grade = "B";
    } else if (mark >= 60) {
        grade = "C";
    } else if (mark >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Decide whether the student passed or failed
    let result;

    if (mark >= 50) {
        result = "Pass";
        passes++;
    } else {
        result = "Fail";
        fails++;
    }

    // Update the highest mark
    if (mark > highest) {
        highest = mark;
        highestStudent = student;
    }

    // Update the lowest valid mark
    if (mark < lowest) {
        lowest = mark;
        lowestStudent = student;
    }

    console.log(`Student ${student}: ${mark} - Grade ${grade} (${result})`);
}

let average = totals / validMarks;

// Print the class summary
console.log("--------------------");
console.log(`Valid marks: ${validMarks}`);
console.log(`Passed: ${passes}`);
console.log(`Failed: ${fails}`);
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Highest: ${highest} (Student ${highestStudent})`);

