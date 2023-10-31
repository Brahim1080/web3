import { useContext, useState } from "react";

import { Context as OpinionContext } from "contexts/opinionContext";

const AddOpinions = () => {
  const [newOpinion, setNewOpinion] = useState("");

  const { createOpinion } = useContext(OpinionContext);

  const handleOnChange = (e) => setNewOpinion(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    createOpinion(newOpinion);
    setNewOpinion("");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input value={newOpinion} onChange={handleOnChange} required />
      <input type="submit" value="Add Opinion" />
    </form>
  );
};

export default AddOpinions;
