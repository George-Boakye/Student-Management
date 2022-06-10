// STUDENT CLASS
class Student {
  #name;
  #grade;
  #age;
  #courses;
  #gpa;

  constructor(name, grade, age, courses) {
    this.#name = name;
    this.#grade = grade;
    this.#age = age;
    this.#courses = courses;
    this.#gpa = 0;
  }

  get getName() {
    return this.#name;
  }
  set setName(newName) {
    if (newName.length > 1 && typeof newName === "string") {
      this.#name = newName;
    } else {
      throw new Error("Enter valid name");
    }
  }
  get getGrade() {
    return this.#grade;
  }
  set setGrade(newGrade) {
    if (typeof newGrade === "number" && newGrade.length > 0) {
     this.#grade = newGrade;
    } else {
      throw new Error("Invalid Input");
    }
  }
  get getAge() {
    return this.#age;
  }
  set setAge(newAge) {
    if (typeof newAge === "number" && newAge.length > 0) {
      this.#age = newAge;
    } else {
      throw new Error("Age must not be empty and must be a number");
    }
  }
  get getCourses() {
    return this.#courses;
  }
  set setCourses(newCourses) {
    if (newCourses.length > 0 ) {
      this.#courses = newCourses;
    } else {
      throw new Error("Courses must not be empty");
    }
  }
  sayHello() {
    return `Hello ${this.getName}`;
  }
  printCourses() {
    let courses = "";
    for (let index in this.getCourses) {
      courses += ` ${this.getCourses[index]}`;
    }
    return courses;
  }
  calculateGpa(newGpa) {
    this.#gpa = newGpa;
    return `GPA: ${this.#gpa}`;
  }
}

let newName = document.getElementById("name");
let newGrade = document.getElementById("grade");
let newAge = document.getElementById("age");
let newCourses = document.getElementById("courses");
let form = document.getElementById("form");
// ______________________________________________
let studentRoll = [];
/**
 *
 * Creates a student object
 * @param {string} name
 * @param {number} age
 * @param {string[]} courses
 * @param {number} grade
 * @returns {Student} new student object
 */
function createStudent(name, grade, age, courses) {
  return new Student(name, grade, age, courses);
}

// function that add new student to the studentRoll
function addStudentToArray() {
  const student = createStudent(
    newName.value.toUpperCase(),
    Number(newGrade.value),
    Number(newAge.value),
    newCourses.value.toUpperCase().split(",")
  );
  enrollStudent(student);
}

/**
 * Adds student to studentRoll array
 * @param {Student} student
 */
function enrollStudent(student) {
  //append student to studentRoll array
  studentRoll.push(student);
}

/**
 * Search students by given name
 * @param {string} name
 */
function searchStudent(name) {
 
  return studentRoll.filter((element) => element.getName.includes(name));
}

/**
 * Returns list of students in given grade
 * @param {number} grade
 * @returns {Student[]}
 */
function filterStudentsByGrade(grade) {
 
  return studentRoll.filter((element) => element.getGrade === grade);
}

/**
 * Returns list of students who have ages between minAge and maxAge
 * @param {number} minAge
 * @param {number} maxAge
 * @returns {Student[]}
 */
function filterStudentsByAge(minAge, maxAge) {
  return studentRoll.filter(
    (element) => element.getAge >= minAge && element.getAge <= maxAge
  );
}

// Set Error function
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

// Set Success function
const setSucces = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

function ValidateName() {
  if (newName.value.trim() === "") {
    setError(newName, "Name is required");
    return false;
  } else {
    setSucces(newName);
    return true;
  }
}

function ValidateGrade() {
  if (newGrade.value.trim() === "") {
    setError(newGrade, "Grade is required");
    return false;
  } else {
    setSucces(newGrade);
    return true;
  }
}

function validateAge() {
  if (newAge.value.trim() === "") {
    setError(newAge, "Age is required");
    return false;
  } else {
    setSucces(newAge);
    return true;
  }
}

function validateCourses() {
  if (newCourses.value.trim() === "") {
    setError(newCourses, "Courses are required");
    return false;
  } else {
    setSucces(newCourses);
    return true;
  }
}

let index = 0;

let tbody = document.getElementById("tbody");
let table = document.getElementById("table");

function addDataToTable() {
  tbody.innerHTML += ` <tr class="trow">
<th class="numberID" scope="row">${index + 1}</th>
<td class="name">${studentRoll[index].getName}</td>
<td class="grade">${studentRoll[index].getGrade}</td>
<td class="age">${studentRoll[index].getAge}</td>
<td class="courses">${studentRoll[index].getCourses}</td>
</tr>`;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ValidateName();
  ValidateGrade();
  validateAge();
  validateCourses();

  if (
    ValidateName() &&
    ValidateGrade() &&
    validateAge() &&
    validateCourses() 
  ) {
    addStudentToArray();
    addDataToTable();
  }

  index += 1;
});


// Hide and show butoon functions
let showBtn = document.getElementById("show-btn");
let hideBtn = document.getElementById("hide-btn");

showBtn.addEventListener("click", () => {
  hideBtn.style.display = "block";
  showBtn.style.display = "none";
  table.style.display = "block";
});

hideBtn.addEventListener("click", () => {
  hideBtn.style.display = "none";
  showBtn.style.display = "block";
  table.style.display = "none";
});


// search button function
let search = document.getElementById("search");
let searchInput = document.getElementById("searchInput");
let table2 = document.getElementById("table2");
let tbody2 = document.getElementById("tbody2");

table2.style.display = "none";

search.addEventListener("submit", (e) => {
  e.preventDefault();
  table2.style.display = "block";
  tbody2.innerHTML = "";
  let studentSearched = searchStudent(searchInput.value);
  studentSearched.forEach((student) => {
    tbody2.innerHTML += ` <tr class="trow">
  <th class="numberID" scope="row">-</th>
  <td class="name">${student.getName}</td>
  <td class="grade">${student.getGrade}</td>
  <td class="age">${student.getAge}</td>
  <td class="courses">${student.getCourses}</td>
  </tr>`;
  });
});
