const router = require("express").Router();
const Person = require("../models/persons");
const mongoose = require("mongoose");

router.get("/", (req, res, next) => {
  Person.find({})
    .then((persons) => {
      res.json(persons);
    })
    .catch((err) => next(err));
});

router.post("/", async (request, response) => {
  const personPayload = request.body;
  const newId = Math.floor(Math.random() * 1e9);
  const newPerson = {
    ...personPayload,
    id: newId,
  };

  const errorMessages = [];
  if (!personPayload.name) errorMessages.push("name must be present");
  if (!personPayload.number) errorMessages.push("number must be present");

  const allPersons = await Person.find({});
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

  const personToSave = new Person({ ...newPerson });
  personToSave.save().then((result) => {
    response.json(newPerson);
  });
});

router.delete("/:id", (req, res, next) => {

  const objectId =  new mongoose.Types.ObjectId(req.params.id);
  Person.findByIdAndDelete(objectId)
    .then((result) => {
      if (result) {
        res.json(result);
      } else {
        throw new NotFoundError();
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
