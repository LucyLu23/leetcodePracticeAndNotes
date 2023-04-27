var students = [
  "studnet1",
  "student2",
  "student3",
  "studnet4",
  "naughtyStudent",
];
function rd(students) {
  //function, then call the function
  var length = students.length,
    index,
    temp;

  for (var point = length - 1; point >= 0; point--) {
    index = Math.floor(Math.random() * point);
    temp = students[index];
    students[index] = students[point];
    students[point] = temp;
  }
  return students;
}

for (var point = 0; point < length; point++) {
  index = Math.floor(Math.random() * (students.length - 1));
  temp = students[index];
  students[index] = students[point];
  students[point] = temp;
}
