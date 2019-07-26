
describe(`stringsToNumbers(numStrings: Array<String>): Array<Number>`, () => {
  it(`returns an empty array when an empty array is supplied`, () => {
    const actual = stringsToNumbers([]);
    expect(actual).to.eql([]);
  })

  it(`changes the string of a number within the array to the equivalent number`, () => {
    const actual = stringsToNumbers(['1']);
    expect(actual).to.eql([1]);
  })

  it(`changes all of the strings in the array to their equivalent numbers`, () => {
    const actual = stringsToNumbers(['4', '5', '200', '1', '0', '-6']);
    expect(actual).to.eql([4, 5, 200, 1, 0, -6]);
  })
})

describe(`selectSubjectTeacher(teachers: Array<Object>, subject: String): Object`, () => {
  it(`returns undefined when an empty array is supplied`, () => {
    const actual = selectSubjectTeacher([]);
    expect(actual).to.equal(undefined);
  })

  it(`returns the teacher who has the matching subject`, () => {
    const subject = 'test-subject'
    const teacherObject = { name: 'test teacher', subject: 'test-subject' }
    const teachersArray = [ teacherObject ];
    const actual = selectSubjectTeacher(teachersArray, subject);
    expect(actual).to.equal(teacherObject);
  })

  it(`finds the teacher who has the matching subject within a collection`, () => {
    const subject = 'test-subject'
    const matchingTeacher = { name: 'matching teacher', subject: 'test-subject' }
    const teachersArray = [
      { name: 'first-non-matching-teacher', subject: 'not-matching' },
      { name: 'second-non-matching-teacher', subject: 'not-matching' },
      { name: 'third-non-matching-teacher', subject: 'not-matching' },
      matchingTeacher,
      { name: 'fourth-non-matching-teacher', subject: 'not-matching' },
    ];
    const actual = selectSubjectTeacher(teachersArray, subject);
    expect(actual).to.equal(matchingTeacher);
  })
})

describe(`removeNull(responses: Array): Array`, () => {
  it(`returns an empty array when an empty array is supplied`, () => {
    const actual = removeNull([]);
    expect(actual).to.eql([]);
  })
  
  it(`removes a null value from an array`, () => {
    const responsesArray = [
      1,
      null,
      'Yes',
      true,
    ];
    const noNullArray = [
      1,
      'Yes',
      true
    ];
    const actual = removeNull(responsesArray);
    expect(actual).to.eql(noNullArray);
  })

  it(`removes all null values from an array`, () => {
    const responsesArray = [
      1,
      null,
      'Yes',
      true,
      null,
      null,
    ];
    const noNullArray = [
      1,
      'Yes',
      true
    ];
    const actual = removeNull(responsesArray);
    expect(actual).to.eql(noNullArray);
  })
})

describe(`filterSurveys(arrayOfSurveyQuestions: Array<Object>): Array<Object>`, () => {
  it(`returns an empty array when an empty array is supplied`, () => {
    const actual = filterSurveys([]);
    expect(actual).to.eql([]);
  })
  
  it(`returns an array of objects`, () => {
    const surveyArray = [
      {question: `Test question`, responses: [`Test response`]},
      {question: `Test question 2`, responses: [`Test response`, `Test response 2`]},
      {question: `Test question 3`, responses: [`Test response`, `Test response 2`, `Test response 3`]},
    ];
    const actual = filterSurveys(surveyArray);
    expect(actual).to.eql(surveyArray);
  })

  it(`returns an array of objects with null values removed`, () => {
    const surveyArray = [
      {question: `Test question`, responses: [`Test response`, null]},
      {question: `Test question 2`, responses: [null, `Test response`, `Test response 2`]},
      {question: `Test question 3`, responses: [`Test response`, `Test response 2`, null, `Test response 3`, null]},
    ];
    const noNullArray = [
      {question: `Test question`, responses: [`Test response`]},
      {question: `Test question 2`, responses: [`Test response`, `Test response 2`]},
      {question: `Test question 3`, responses: [`Test response`, `Test response 2`, `Test response 3`]},
    ];
    const actual = filterSurveys(surveyArray);
    expect(actual).to.eql(noNullArray);
  })
})