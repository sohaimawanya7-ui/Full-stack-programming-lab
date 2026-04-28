import './App.css';

function CourseItem(props) {
  return (
    <div style={{ border: '1px solid #444', margin: '10px', padding: '15px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
      <h3>Course: {props.courseName}</h3>
      <p><strong>Instructor:</strong> {props.instructor}</p>
      <p><strong>Duration:</strong> {props.duration}</p>
      {/* Bonus: Displaying the course type [cite: 118] */}
      <p><strong>Type:</strong> {props.courseType}</p>
    </div>
  );
}

function App() {
  const courses = [
    { id: 1, name: "Frontend React JS", teacher: "Mr. Sharif Hussain", time: "4 Weeks", type: "Online" },
    { id: 2, name: "Database Systems", teacher: "Dr. Ali", time: "6 Weeks", type: "Offline" },
    { id: 3, name: "Mobile App Development", teacher: "Dr Adnan", time: "8 Weeks", type: "Online" },
    { id: 4, name: "Data Structures", teacher: "Mr Anwar", time: "5 Weeks", type: "Offline" },
    { id: 5, name: "Cloud Computing", teacher: "Dr. Ahmed", time: "7 Weeks", type: "Online" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Available Courses</h1>
      {/* We use .map() to loop through the array and render CourseItem for each [cite: 117] */}
      {courses.map((course) => (
        <CourseItem 
          key={course.id} 
          courseName={course.name} 
          instructor={course.teacher} 
          duration={course.time} 
          courseType={course.type} 
        />
      ))}
    </div>
  );
}

export default App;