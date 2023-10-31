import { useContext } from "react";
import { Context as CounterContext } from "contexts/countersContext";
import OkButton from "components/Button/OkButton";
import ResetButton from "components/Button/ResetButton";
import BadButton from "components/Button/BadButton";
import GoodButton from "components/Button/GoodButton";
import "./App.css";

const App = () => {
  const { goodCounter, okCounter, badCounter } = useContext(CounterContext);
  return (
    <div>
      <ul>
        <li>
          <span>Good : {goodCounter}</span> <GoodButton />
        </li>
        <li>
          <span>Ok : {okCounter}</span> <OkButton />
        </li>
        <li>
          <span>Bad : {badCounter}</span> <BadButton />
        </li>
      </ul>
      <ResetButton />
    </div>
  );
};

export default App;
