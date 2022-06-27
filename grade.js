var students = [['vikram', 90], ['yask', 80], ['vijay', 70], 
['ajith', 60], ['arjun', 50]];

var marks = 0;

for (var i=0; i < students.length; i++) {
marks += students[i][1];
}

var avg = (marks / students.length);

console.log("Average grade: " + avg);

if (avg < 60)
{
console.log("Grade : F");     
} 
else if (avg < 70) 
{
console.log("Grade : D"); 
} 
else if (avg < 80) 
{
console.log("Grade : C"); 
} 
else if (avg < 90) 
{
console.log("Grade : B"); 
} 
else if (avg < 100) 
{
console.log("Grade : A"); 
}