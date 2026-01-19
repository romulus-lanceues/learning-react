import { func } from "prop-types";

export default function CounterButton({
  incrementByAndDecreaseBy = 1,
  incrementCounterParent,
  decrementCounterParent,
}) {
  //Assigning the state value and updater function to separate variables using array destructuring is more common

  return (
    <div>
      <div>
        <button
          className="increment-btn"
          onClick={() => incrementCounterParent(incrementByAndDecreaseBy)}
          //Inline CSS styling in JSX needs to be an object
          //Object names are camelCased in JSX
          //Double curly braces because first is for embedding JS expression in JSX
          style={{
            fontSize: "20px",
            marginTop: "10px",
            borderRadius: "50%",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            padding: "30px",
          }}
        >
          {" +" + incrementByAndDecreaseBy}
        </button>

        <button
          className="decrement-btn"
          onClick={() => decrementCounterParent(incrementByAndDecreaseBy)}
          style={{
            fontSize: "20px",
            marginTop: "10px",
            borderRadius: "50%",
            cursor: "pointer",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            padding: "30px",
          }}
        >
          {" -" + incrementByAndDecreaseBy}
        </button>
      </div>
    </div>
  );
}

export function ResetCounter({ resetCounterParent }) {
  function resetCounter() {
    resetCounterParent();
  }

  return (
    <button
      onClick={resetCounter}
      style={{
        fontSize: "20px",
        marginTop: "10px",
        borderRadius: "50%",
        cursor: "pointer",
        backgroundColor: "#FF9800",
        color: "white",
        border: "none",
        padding: "30px",
      }}
    >
      Reset
    </button>
  );
}
