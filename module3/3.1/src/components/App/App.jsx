import { useState } from "react";
import Button from "components/Buttons/Button";
import Statistics from "components/Statistics/Statistics";
import Loading from "components/Loading/Loading";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 3000);

  if (loading) return <Loading />;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

      <h1>Statistics</h1>
      <Statistics {...{ good, neutral, bad }} />
    </div>
  );
};

export default App;
