const express = require("express");
const { MONGODB_URI, PORT } = require("./utils/config");
const personsRouter = require("./routes/persons");
const middlewares = require("./utils/middlewares");

const mongoose = require("mongoose");
const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(express.json());
app.use(middlewares.logger);
app.use(middlewares.attachCurrentuser);

app.use("/api/persons", personsRouter);

app.use(middlewares.errorHandler);
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/* 
// Routes. These blocks should be placed in different files under "routes/" directory
// but let's keep this simple.
app.get("/info", (request, response) => {
  const now = new Date();
  const bodyContentText = `
  Phonebook has info for ${allPersons.length} people.
  ${now.toString()}
  `;
  response.type("text").send(bodyContentText);
});

app.get("/api/persons", (request, response) => {
  response.json(allPersons);
});

app.get("/api/persons/:id", (request, response) => {
  const idParam = request.params.id;
  const id = Number(idParam);
  const person = allPersons.find((person) => person.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const idParam = request.params.id;
  const id = Number(idParam);
  const personIndex = allPersons.findIndex((person) => person.id === id);
  if (personIndex > -1) {
    allPersons.splice(personIndex, 1); // We do NOT use delete because it creates a sparse array with a wrong length
  }
  response.status(204).end();
});

app.post("/api/persons", (request, response) => {
  const personPayload = request.body;
  const newId = Math.floor(Math.random() * 1e9);
  const newPerson = {
    ...personPayload,
    id: newId,
  };

  const errorMessages = [];
  if (!personPayload.name) errorMessages.push("name must be present");
  if (!personPayload.number) errorMessages.push("number must be present");
  const nameExists = allPersons.some(
    (person) => person.name === newPerson.name
  );
  if (nameExists) errorMessages.push("name must be unique");

  if (errorMessages.length > 0) {
    response.status(422).json({
      errorMessages,
    });
    return;
  }

  // push not concat here. We want to mutate the array.
  allPersons.push(newPerson);
  response.json(newPerson);
}); */
