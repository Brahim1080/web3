import { Context as CounterContext } from 'contexts/countersContext';
import { useContext } from 'react';

const GoodButton = () => {
  const { increaseGood } = useContext(CounterContext);
  return <button onClick={increaseGood}>Increase good</button>;
};

export default GoodButton;
