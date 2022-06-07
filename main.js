// STUDENT CLASS
class Student{
  #name;
  #grade;
  #age;
  #courses;
  #gpa;

  constructor(name, grade,age,courses) {
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
    if(newName === "" || typeof(newName) === "number"){
     throw new Error("Enter valid name");
    }else{
      this.#name = newName;
    }
   
  }
  get getGrade(){
    return this.#grade;
  }
  set setGrade(newGrade){
    if( typeof(newGrade) !="number" || newGrade ===""){
      throw new Error("Invalid Input")
    }else{
      this.#grade = newGrade;
    }
    
  }
  get getAge(){
    return this.#age
  }
  set setAge(newAge){
    if(newAge ==="" || typeof(newAge) === "string"){
      throw new Error("Age must not be an empty array")
    }else{
      this.#age = newAge
    }
    
  }
  get getCourses(){
    return this.#courses;
  }
  set setCourses(newCourses){
    if(newCourses ===""){
      throw new Error("Courses is empty")
    }
    else{
      this.#courses = newCourses;
    }
  }
  sayHello(){
    return `Hello ${this.getName}`
  }
  printCourses(){
    let courses = "";
    for(let index in this.getCourses){
      courses += ` ${this.getCourses[index]}`
      
    }
    return courses
  }

}
let studentA = new Student("George", 3, 15, ["Twi", "English", "Science"])
studentA.setCourses = ""
console.log(studentA.getName)







// ______________________________________________
let studentRoll = []
/**
 * 
 * Creates a student object
 * @param {string} name 
 * @param {number} age 
 * @param {string[]} courses 
 * @param {number} grade 
 * @returns {Student} new student object
 */
function createStudent(name, age, courses, grade) {
  // create student
  // return student
  return new Student(name,grade, age, courses)
}

/**
 * Adds student to studentRoll array
 * @param {Student} student 
 */
function enrollStudent(student) {
  //append student to studentRoll array
  studentRoll.push(student)
}

/**
 * Search students by given name
 * @param {string} name 
 */
function searchStudent(name) {
  let searchStudent = []
  for(let index in studentRoll){
      if( studentRoll[index].getName === name){
      searchStudent.push(studentRoll[index]);
    }
  }
  return searchStudent
}

/**
 * Returns list of students in given grade
 * @param {number} grade
 * @returns {Student[]}
 */
function filterStudentsByGrade(grade) {
  let studentInGrade = []
  for(let index in studentRoll){
    if(studentRoll[index].getGrade === grade){
      studentInGrade.push(studentRoll[index]);
    }
  }
  return studentInGrade;
}

/**
 * Returns list of students who have ages between minAge and maxAge
 * @param {number} minAge 
 * @param {number} maxAge 
 * @returns {Student[]}
 */
 function filterStudentsByAge(minAge,maxAge) {
  let ageRange = [];
  for(let index in studentRoll){
    if(studentRoll[index].getAge >= minAge &&
       studentRoll[index].getAge <= maxAge){
      ageRange.push(studentRoll[index])
    }
  }
  return ageRange;
}