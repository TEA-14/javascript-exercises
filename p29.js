const headMaster = {
    role: "Head Master",
    supervise() {
        console.log("I am Supervising the school.");
    }
};

const teacher = Object.create(headMaster); // inherits from headMaster
teacher.subject = "English";

const student = Object.create(teacher); // inherits from teacher
student.name = "John Doe";

console.log(Object.getPrototypeOf(Object.getPrototypeOf(student)).supervise()); // true