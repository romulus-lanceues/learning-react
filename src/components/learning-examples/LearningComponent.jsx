import FirstComponent from "./FirstComponent.jsx";
import { SpecialComponent } from "./FirstComponent.jsx";
import SecondComponent from "./SecondComponent.jsx";
import ThirdComponent from "./ThirdComponent.jsx";
import FourthComponent from "./FourthComponent.jsx";
import LearningJavascript from "./LearninJavascript.jsx";

export default function RenderAllComponents() {
  return (
    <div className="App">
      {/* Include a component inside another component */}
      <FirstComponent> </FirstComponent>
      <SpecialComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <LearningJavascript />
    </div>
  );
}
