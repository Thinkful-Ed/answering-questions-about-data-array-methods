
describe(`sumLengthOfStrings(arrayOfStrings: Array<String>): Number`, () => {
  it(`returns 0 when an empty array is supplied`, () => {
    const actual = sumLengthOfStrings([]);
    expect(actual).to.equal(0);
  })

  it(`returns the length of the string when an array contains 1 string`, () => {
    const actual = sumLengthOfStrings(['aaa']);
    expect(actual).to.equal(3);
  })

  it(`returns the sum of lengths of all strings in an array`, () => {
    const actual = sumLengthOfStrings(['a', 'bb', 'ccc', 'dddd']);
    expect(actual).to.equal(10);
  })

  it(`returns 0 when the array contains empty strings`, () => {
    const actual = sumLengthOfStrings(['', '', '', '']);
    expect(actual).to.equal(0);
  })
})

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

describe(`removeOddNumbers(numbers: Array<Number>): Array<Number>`, () => {
  it(`returns an empty array when an empty array is supplied`, () => {
    const actual = removeOddNumbers([]);
    expect(actual).to.eql([]);
  })

  it(`doesn't change the array when arr contains only even numbers`, () => {
    const actual = removeOddNumbers([2, 6, 10, 300, 16]);
    expect(actual).to.eql([2, 6, 10, 300, 16]);
  })

  it(`returns an empty array when the arr only contains odd numbers`, () => {
    const actual = removeOddNumbers([1, 5, 9, 301, 17]);
    expect(actual).to.eql([]);
  })

  it(`only removes odd numbers from array of mixed numbers`, () => {
    const actual = removeOddNumbers([1, 4, 9, 12, 301, 500, 17]);
    expect(actual).to.eql([4, 12, 500]);
  })
})

describe(`putAndBetween(words: Array<String>): String`, () => {
  it(`returns an empty string when an empty array is suppled`, () => {
    const actual = putAndBetween([]);
    expect(actual).to.equal('');
  })

  it(`returns the only string in the array if an array of 1 string supplied`, () => {
    const actual = putAndBetween(['only-word']);
    expect(actual).to.equal('only-word');
  })

  it(`puts " and " betweeen words in the array`, () => {
    const actual = putAndBetween(['first', 'second', 'third', 'fourth']);
    expect(actual).to.equal('first and second and third and fourth');
  })
})

describe(`selectSubjectTeacher(teachers: Array<Object>, subject: String): Object`, () => {
  it(`returns undefined when an empty array is suppled`, () => {
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
      { name: 'secon-non-matching-teacher', subject: 'not-matching' },
      { name: 'third-non-matching-teacher', subject: 'not-matching' },
      matchingTeacher,
      { name: 'fourth-non-matching-teacher', subject: 'not-matching' },
    ];
    const actual = selectSubjectTeacher(teachersArray, subject);
    expect(actual).to.equal(matchingTeacher);
  })
})

describe(`isTop5EnglishCity(city: String): Boolean`, () => {
  it(`returns false no argument supplied`, () => {
    const actual = isTop5EnglishCity();
    expect(actual).to.equal(false);
  })

  it(`returns false when not a top 5 English city by population`, () => {
    expect(isTop5EnglishCity('Nottingham')).to.equal(false);
    expect(isTop5EnglishCity('London')).to.equal(false);
  })

  it(`returns true when a top 5 English city by population`, () => {
    expect(isTop5EnglishCity('Birmingham')).to.equal(true);
    expect(isTop5EnglishCity('Leeds')).to.equal(true);
    expect(isTop5EnglishCity('Sheffield')).to.equal(true);
    expect(isTop5EnglishCity('Manchester')).to.equal(true);
    expect(isTop5EnglishCity('Bradford')).to.equal(true);
  })
})

describe(`areAnyDogs(animals: Array<Object>): Boolean`, () => {
  it(`returns false when an empty array is supplied`, () => {
    const actual = areAnyDogs([]);
    expect(actual).to.equal(false);
  })

  it(`returns true when the array contains an object of species 'C. lupus'`, () => {
    const actual = areAnyDogs([{ name: 'Fido', species: 'C. lupus' }]);
    expect(actual).to.equal(true);
  })

  it(`returns false when the array only contains objects non dog species`, () => {
    const actual = areAnyDogs(
      [
        { name: 'Goaty', species: 'C. aegagrus' },
        { name: 'Felix', species: 'F. catus' },
        { name: 'Orville', species: 'A. platyrhynchos' },
      ]
    );
    expect(actual).to.equal(false);
  })

  it(`returns true when the array contains a mixture of species including dog`, () => {
    const actual = areAnyDogs(
      [
        { name: 'Goaty', species: 'C. aegagrus' },
        { name: 'Felix', species: 'F. catus' },
        { name: 'Gnasher', species: 'C. lupus' },
        { name: 'Orville', species: 'A. platyrhynchos' },
      ]
    );
    expect(actual).to.equal(true);
  })
})

describe(`didAllStudentsPass(students: Array<Object>): Boolean`, () => {
  it(`returns false when given an empty array`, () => {
    const actual = didAllStudentsPass([]);
    expect(actual).to.equal(false);
  })

  it(`returns true when the students array has one student with a score above 80`, () => {
    const passingStudent = { name: 'Albert', testScore: 81 };
    const actual = didAllStudentsPass([ passingStudent ]);
    expect(actual).to.equal(true);
  })

  it(`returns false when the students with a score of 80 or less`, () => {
    const failingStudent = { name: 'Elon', testScore: 80 };
    const actual = didAllStudentsPass([ failingStudent ]);
    expect(actual).to.equal(false);
  })

  it(`returns true when all students have test scores above 80`, () => {
    const actual = didAllStudentsPass([
      { name: 'Rachel', testScore: 90 },
      { name: 'Monica', testScore: 90 },
      { name: 'Phoebe', testScore: 90 },
      { name: 'Joey', testScore: 82 },
      { name: 'Chandler', testScore: 90 },
      { name: 'Ross', testScore: 90 },
    ]);
    expect(actual).to.equal(true);
  })

  it(`returns false when any students have score of 80 or less`, () => {
    const actual = didAllStudentsPass([
      { name: 'Cat', testScore: 82 },
      { name: 'Lister', testScore: 3 },
      { name: 'Rimmer', testScore: 81 },
      { name: 'Kryten', testScore: 99 },
      { name: 'Holly', testScore: 100 },
    ]);
    expect(actual).to.equal(false);
  })
})

describe(`getFastestCar(cars: Array<Object>): Object`, () => {
  it(`returns undefined when an empty array is supplied`, () => {
    const actual = getFastestCar([]);
    expect(actual).to.equal(undefined);
  })

  it(`returns the only car when one car in array`, () => {
    const car = { name: 'Ford Escort XR3i', topSpeed: 125 }
    const actual = getFastestCar([ car ]);
    expect(actual).to.equal(car);
  })

  it(`returns car with the highest top speed`, () => {
    const fastestCar = { name: 'Honda Civic', topSpeed: 169 };
    const cars = [
      { name: 'Ford Escort XR3i', topSpeed: 125 },
      { name: 'VW Golf R', topSpeed: 155 },
      { name: 'Toyota Supra', topSpeed: 155 },
      { name: 'Renault Twizy', topSpeed: 50 },
      fastestCar,
      { name: 'Chevrolet Beat', topSpeed: 145 },
    ]
    const actual = getFastestCar(cars);
    expect(actual).to.equal(fastestCar);
  })
})
