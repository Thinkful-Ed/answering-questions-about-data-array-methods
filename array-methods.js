function stringsToNumbers(arrayOfStrings) {
  // iterate over an array of strings
  let arrayOfNumbers = arrayOfStrings.map( stringOfNumber => {
    // convert each string into a number in a new array
    return parseInt(stringOfNumber, 10);
  });
  // return the new array
  return arrayOfNumbers;
}

function selectSubjectTeacher(arrayOfTeachers, subjectString) {
  return arrayOfTeachers.find(teacher => teacher.subject === subjectString)
}

// write a function to remove null values from an array
// the function accepts an array as a parameter
function removeNull(responses) {
  // check each value in the array, if its value is NOT null, add it to the new array
  let noNulls = responses.filter( value => value !== null );
  // return the new array without null values
  return noNulls;
}

function filterSurveys(arrayOfSurveyQuestions) {
  // create a new surveys array of question objects
  return arrayOfSurveyQuestions.map(question => {
    // for each question object, alter the responses property by removing null values from the array
    question.responses = removeNull(question.responses);
    // return the altered question object to be added to the new surveys array
    return question;
  })
}
