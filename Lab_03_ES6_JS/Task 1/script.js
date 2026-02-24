class Student {
    constructor(id, name, semester, courses) {
        this.id = id;
        this.name = name;
        this.semester = semester;
        this.courses = courses;
    }

    getDetails() {
        return `
            <div class="student-card">
                <h3>${this.name}</h3>
                <p><strong>ID:</strong> ${this.id}</p>
                <p><strong>Semester:</strong> ${this.semester}</p>
                <p><strong>Courses:</strong> ${this.courses.join(", ")}</p>
            </div>
        `;
    }
}

const student1 = new Student(101, "Sohaima", 5, ["Sohaima", "Web Dev", "ML"]);
const student2 = new Student(102, "Wanya", 4, ["Wanya", "OS", "CN"]);
const student3 = new Student(103, "Areeba", 6, ["Areeba", "Cyber Security", "AI"]);

let students = [student1, student2, student3];

let output = "";
students.forEach(student => {
    output += student.getDetails();
});

document.getElementById("studentsOutput").innerHTML = output;