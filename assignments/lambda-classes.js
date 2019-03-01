// CODE here for your Lambda Classes

class Person {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.location = options.location;
        this.gender = options.gender;
    }
    phrase() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorOptions) {
        super(instructorOptions)
        this.specialty = instructorOptions.specialty;
        this.favLanguage = instructorOptions.favLanguage;
        this.catchPhrase = instructorOptions.catchPhrase;
    }
    grade(student,subject) {
        return `'${student.name} receives a perfect score on ${subject}.`;
    }
    demo() {
        `Today we are learning about ${subject}`;
    }
}
//subject passed in as string
//student passed in as var name

// josh.grade("react",megan)

class Student extends Person {
    constructor(studentOptions) {
        super(studentOptions)
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
    }
    listSubjects() {
        return `${this.favSubjects}.`
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun Sprint Challenge on ${subject}.`
    }
}
//subject passed in as string

class ProjectManager extends Person {
    constructor(PMOptions) {
        super(PMOptions)
        this.gradClassName = PMOptions.gradClassName;
        this.favInstructor = PMOptions.favInstructor;
    }
    standUp(name, channel){
        `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(subject){
        `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

//channel is passed in as string
//subject passed in as string

const liz_B = new Instructor({
    name: "Lizzy B",
    age: 27,
    gender: "Female",
    location: "Portland, OR",
    previousBackground: "Biology/Health Science grad",
    className: "WEB12",
    favSubjects: ["CSS","React","Ternaries","SQL","Node"],
  })

  const leslie = new Student({
    name: "Leslie Thompson",
    age: 31,
    location: "San Francisco, CA",
    gender: "F",
    previousBackground: "Retail Management",
    className: "Web18",
    favSubjects: ["CSS", "JavaScript", "Cooking", "Biology"]
  });

  const joshk = new Student({
    name: "Josh Kersting",
    age: 27,
    gender: "Male",
    location: "Muskegon, Mi",
    previousBackground: "Data Analyst",
    className: "WEB18",
    favSubjects: ["Computer Science",,"Algorithms","Data Structures","Computer Architecture","Photography","Cooking"],
  })

  //console.log
console.log(joshk.name);
console.log(leslie.favSubjects);
console.log(leslie.previousBackground);
console.log(liz_B.grade("CSS"));