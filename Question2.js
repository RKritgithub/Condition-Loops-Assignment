// <!-- Question2 Q2. Write a program that grades students based on their marks
//  If greater than 90 then A GradE
//  If between 70 and 90 then a B gradE
//  If between 50 and 70 then a C gradE
//  Below 50 then an F grade -->

 function gradeStudent(marks) {
    if (marks > 90) {
        console.log("Grade: A");
    } else if (marks >= 70 && marks <= 90) {
        console.log("Grade: B");
    } else if (marks >= 50 && marks < 70) {
        console.log("Grade: C");
    } else {
        console.log("Grade: F");
    }
}


