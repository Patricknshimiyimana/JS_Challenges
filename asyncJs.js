let setStudentAgeApiAsynchronous = (student, age) => {
  //async code below
  console.log("1. Starting ..");
  setTimeout(() => {
    student.age = age;
    console.log("2. Api Processing");
  }, 500);
  console.log("3. Done ..");
};

let setStudentAgeApi = (student, age) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      student.age = age;
      if (age < 0) reject("Bad Age");
      else resolve(student);
    }, 500);
  })
    .then((data) => console.log(data))
    .catch((err) => {
      console.log(err);
    });
};

let student = { name: "Eric" };

setStudentAgeApi(student, -1);

const calculateChilAvg = (families) => {
  const avgChildren = (familyNumber, children) => {
    return Math.floor(children / familyNumber);
  };

  console.log("starting...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let familyNumber = 0,
        childrensNum = 0;
      //Loop through every family
      families.forEach((family) => {
        if (family.fatherName === "Yves") {
          reject("Yves is not an allowed dad in 2022.");
        }
        if (family.children < 0) {
          return;
        } else {
          family.children++;
          familyNumber++;
          childrensNum += family.children;
        }
      });
      resolve(
        `Average Children are ${avgChildren(familyNumber, childrensNum)}`
      );
    }, 1000);
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

let families = [
  {
    fatherName: "John",
    motherName: "Jane",
    children: 5,
  },
  {
    fatherName: "Havier",
    motherName: "Signor",
    children: -1,
  },
  {
    fatherName: "Holla",
    motherName: "Yolla",
    children: 2,
  },
];

calculateChilAvg(families);
