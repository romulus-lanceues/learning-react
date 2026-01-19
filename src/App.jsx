import "./App.css";
import ToDoApp from "./components/to-do/ToDoApp.jsx";
import Aaggga from "./components/counter/counter.jsx";

function App() {
  return (
    <div className="App">
      <ToDoApp />
    </div>
  );
}

//old way of using props in functional components
function UtilizingProps(properties) {
  /*
  properties is an object containing all the passed properties
  {property1: "value", property2: "value2"}
  */
  console.log("Received properties:", properties);
  console.log("Property 1:", properties.property1);
  console.log("Property 2:", properties.property2);
  return <div>PROPS</div>;
}

//modern way of using props in functional components with destructuring
function UtilizingPropsDestructured({ dids, diss }) {
  /*
  property1 and property2 are directly extracted from the properties object
  */
  console.log("Property 1:", dids);
  console.log("Property 2:", diss);
  return <div>PROPS</div>;
}

export default App;
