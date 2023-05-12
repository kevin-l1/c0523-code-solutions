/* exported getStudentNames */
function getStudentNames(students) {
  const newArray = [];
  for (const key in students) {
    newArray.push(students[key].name);
  }
  return newArray;
}
