const mongoose = require("mongoose");
require("dotenv").config();

const password = process.env.DB_PASSWORD;

const user = process.env.DB_USER;

const url = `mongodb+srv://${user}:${password}@cluster0.igofgx6.mongodb.net/peopleApp?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

// Define Schema and Model.
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

// get all
if (process.argv.length === 2) {
  console.log("phonebook:");
  Person.find({}).then((result) => {
    result.forEach((person) => console.log(`${person.name} ${person.number}`));
    mongoose.connection.close();
  });
  
}
// Insert one
if (process.argv.length === 4) {
  const person = new Person({
    name: process.argv[2],
    number: process.argv[3],
  });
  person.save().then((result) => {
    console.log(`added ${result.name} number ${result.number} to phonebook`);
    mongoose.connection.close();
  });
}
