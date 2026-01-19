import { useState } from "react";
import { PropTypes } from "prop-types";
import CounterButton from "./CounterButton.jsx";
import { ResetCounter } from "./CounterButton.jsx";
import "./counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  function incrementCounterParent(incrementByAndDecreaseBy) {
    setCount(count + incrementByAndDecreaseBy);
  }

  function decrementCounterParent(decrementBy) {
    setCount(count - decrementBy);
  }

  function resetCounterParent() {
    setCount(0);
  }

  return (
    <div className="Counter">
      <span className="count-value" style={countValueStyle}>
        {count}
      </span>
      <CounterButton
        incrementCounterParent={incrementCounterParent}
        decrementCounterParent={decrementCounterParent}
      />
      <CounterButton
        incrementByAndDecreaseBy={2}
        incrementCounterParent={incrementCounterParent}
        decrementCounterParent={decrementCounterParent}
      />

      <ResetCounter resetCounterParent={resetCounterParent} />
    </div>
  );
}

//Another of styling is to use objects defined outside the JSX
const countValueStyle = {
  fontSize: "90px",
  fontWeight: "bold",
  color: "rgba(195, 25, 25, 0.8)",
  padding: "10px",
};

// //Defining propTypes values for the Counter component
// Counter.propTypes = {
//   incrementByAndDecreaseBy: PropTypes.number,
// };

// Counter.defaultProps = {
//   incrementByAndDecreaseBy: 1,
// };
