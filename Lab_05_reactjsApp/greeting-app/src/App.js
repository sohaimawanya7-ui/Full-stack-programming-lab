import './App.css';
function Greeting(props) {
  let message = "";
  
  if (props.timeOfDay === "Morning") {
    message = "Good Morning";
  } else if (props.timeOfDay === "Afternoon") {
    message = "Good Afternoon";
  } else if (props.timeOfDay === "Evening") {
    message = "Good Evening";
  } else {
    message = "Hello";
  }

  const style = {
    backgroundColor: props.bgColor || 'gray', 
    color: 'white',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    textAlign: 'center'
  };

  return (
    <div style={style}>
      <h1>{message}, {props.name}!</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Dynamic Greeting App</h1>
      {/* Rendering at least 3 Greeting components with different props */}
      <Greeting name="Sohaima" timeOfDay="Morning" bgColor="#f1c40f" />
      <Greeting name="Ali" timeOfDay="Afternoon" bgColor="#e67e22" />
      <Greeting name="Noor" timeOfDay="Evening" bgColor="#2c3e50" />
    </div>
  );
}

export default App;