import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  const [sortedOpinions, setSortedOpinions] = useState([
    { id: uuidv4(), text: "default", score: 1 },
  ]);

  const increaseOpinionScore = (id) => {
    const newSortedOpinions = [...sortedOpinions];

    const opinionToUpdate = newSortedOpinions.find(
      (opinion) => opinion.id === id
    );
    if (!opinionToUpdate) return undefined;
    opinionToUpdate.score++;
    newSortedOpinions.sort((a, b) => b.score - a.score);

    setSortedOpinions(newSortedOpinions);
  };
  const createOpinion = (text) => {
    const newOpinion = {
      id: uuidv4(),
      text: text,
      score: 1,
    };

    const newSortedOpinions = sortedOpinions.concat(newOpinion);
    newSortedOpinions.sort((a, b) => b.score - a.score);
    setSortedOpinions(newSortedOpinions);
  };
  const exposedValue = {
    sortedOpinions,
    createOpinion,
    increaseOpinionScore,
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
