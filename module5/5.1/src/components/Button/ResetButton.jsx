import { Context as CounterContext } from 'contexts/countersContext';
import { useContext } from 'react';

const ResetButton = () => {
  const { resetAll } = useContext(CounterContext);
  return <button onClick={resetAll}>Reset scores</button>;
};

export default ResetButton;