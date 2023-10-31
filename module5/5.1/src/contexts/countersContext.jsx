import React, { useState } from "react";

const Context = React.createContext(null);

const ProviderWrapper = (props) => {
  const [goodCounter, setGood] = useState(0);
  const [okCounter, setOk] = useState(0);
  const [badCounter, setBad] = useState(0);
  const resetAll = () => {
    setBad(0);
    setOk(0);
    setGood(0);
  };

  const increaseGood = () => {
    setGood(goodCounter+ 1);
  };
  const increaseOk = () => {
    setOk(okCounter + 1);
  };
  const increaseBad = () => {
    setBad(badCounter + 1);
  };
  const exposedValue = {
    increaseGood,
    increaseOk,
    increaseBad,
    resetAll,
    goodCounter,
    badCounter,
    okCounter,
  };
  console.log({exposedValue});

  return (
    <Context.Provider value={exposedValue}>{props.children}</Context.Provider>
  );
};

export { Context, ProviderWrapper };
