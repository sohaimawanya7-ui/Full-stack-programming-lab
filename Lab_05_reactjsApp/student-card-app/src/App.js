import './App.css';

// This is the StudentCard component [cite: 110]
function StudentCard(props) {
  const cardStyle = {
    backgroundColor: props.color || 'white', // Bonus: Dynamic background color [cite: 112]
    padding: '15px',
    margin: '10px',
    border: '2px solid #333',
    borderRadius: '8px'
  };

  return (
    <div style={cardStyle}>
      <h2>Name: {props.name}</h2>
      <p>Roll No: {props.rollNo}</p>
      <p>Department: {props.department}</p>
      <p>University: {props.university}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Student Directory</h1>
      {/* Displaying 3 students using the same component [cite: 111] */}
      <StudentCard 
        name="Ali" 
        rollNo="001" 
        department="Software Engineering" 
        university="Air University" 
        color="lightblue" 
      />
      <StudentCard 
        name="Daneen" 
        rollNo="002" 
        department="AI & ML" 
        university="Air University" 
        color="lightgreen" 
      />
      <StudentCard 
        name="Sohaima" 
        rollNo="003" 
        department="Computer Science" 
        university="Air University" 
        color="lightpink" 
      />
    </div>
  );
}

export default App;