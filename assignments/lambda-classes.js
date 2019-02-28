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
    grade() {
        return `'${student.name} receives a perfect score on ${subject}.`;
    }
    demo() {
        `Today we are learning about ${subject}`;
    }
}

class Student extends Person {
    constructor(studentOptions) {
        super(studentOptions)
        this.previousBackground = studentOptions.previousBackground;
        this.className = studentOptions.className;
        this.favSubjects = studentOptions.favSubjects;
    }
    listSubjects() {
        return `${student.favSubjects}.`
    }
    PRAssignment() {
        return `${student.name} has submitted a PR for ${subject}.`
    }
    sprintChallenge() {
        return `${student.name} has begun Sprint Challenge on ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(PMOptions) {
        this.gradClassName = PMOptions.gradClassName;
        this.favInstructor = PMOptions.favInstructor;
    }
    standUp(){
        `${name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(){
        `${name} debugs ${student.name}'s code on ${subject}`;
    }
}


