function sumLengthOfStrings(arrayOfStrings) {
  let totalLength = 0;

  arrayOfStrings.forEach(string => {
    totalLength += string.length;
  });

  return totalLength;
}

function stringsToNumbers(numStrings) {
  return numStrings.map(stringOfNumber => Number(stringOfNumber))
}

function removeOddNumbers(numbers) {
  return numbers.filter(num => (num % 2 == 0))
}

function putAndBetween(words) {
  return words.join(' and ');
}

function selectSubjectTeacher(teachers, subject) {
  return teachers.find(teacher => (teacher.subject === subject));
}

function isTop5EnglishCity(city) {
  const top5Cities = ['Birmingham', 'Leeds', 'Sheffield', 'Manchester', 'Bradford'];
  return top5Cities.includes(city);
}

function areAnyDogs(animals) {
  return animals.some(animal => animal.species === 'C. lupus');
}

function didAllStudentsPass(students) {
  if (!students.length) return false;

  return students.every(student => student.testScore > 80);
}

function getFastestCar(cars) {
  const sortedCars = cars.sort((carA, carB) => (carB.topSpeed - carA.topSpeed));

  return sortedCars[0];
}
