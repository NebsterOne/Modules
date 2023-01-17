const mongoose = require("mongoose");

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  price: Number,
});

// TODO: Create a custom instance method named `getDiscount`

bookSchema.methods.getDiscount = function () {
  const discountPrice = this.price * 0.5;
  console.log(`Book title is ${this.title} and new price is ${discountPrice}`);
};

// TODO: Create a model named `Book`
const Book = mongoose.model("Book", bookSchema);
// TODO: Create a new instance of the model
const discountedBook = new Book({
  title: "Javascript",
  price: 30,
});
// TODO: Call the custom instance method on the instance
discountedBook.getDiscount();
module.exports = Book;
