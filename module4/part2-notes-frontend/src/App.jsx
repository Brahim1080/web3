import { useEffect, useState } from "react";
import personSerivce from "./services/personSerivce";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    personSerivce.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleChangeNewName = (e) => {
    setNewName(e.target.value);
  };
  const handleChangeNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();

    const nameExists = persons.some((person) => person.name === newName);

    if (nameExists) {
      alert(`${newName} existe déjà dans le répertoire.`);
      return;
    }

    const personToAdd = {
      name: newName,
      number: newNumber,
    };
    personSerivce.create(personToAdd).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  const deleteP = (idToDelete) => {
    if (window.confirm(`Delete ${idToDelete} ??`)) {
      personSerivce
        .deletePerson(idToDelete)
        .then(() => {
          const updatedList = persons.filter((p) => p.id !== idToDelete);
          setPersons(updatedList);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleChangeNewName} />
        </div>

        <div>
          number: <input value={newNumber} onChange={handleChangeNewNumber} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((p) => (
        <div key={p.id}>
          {p.name} {p.number}
          <button onClick={() => deleteP(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
