let students = [12,45,21,98,75];
let sum = 0;
let avg = students.length;
for(let student of students){
    sum = sum+student;
}
let avgOfStudent = sum/avg;
console.log(`avg of student marks = ${avgOfStudent}`)