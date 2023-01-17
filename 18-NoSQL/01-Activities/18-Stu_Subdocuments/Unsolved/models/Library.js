const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema` for the subdocument

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  //
});

const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model("Library", librarySchema);

// TODO: Create a new instance of the model including the subdocuments

// Uses model to create new instance including subdocument
const bookData = [
  { Title: "Java", price: 40000 },
  { Title: "HTML", price: 50000 },
  { Title: "NoSQL", price: 50000 },
];

Library.create({ name: "Books", books: bookData }, (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});

module.exports = Library;
