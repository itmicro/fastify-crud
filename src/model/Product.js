const {
  model,
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  imageUrl: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: "",
  },

  category: {
    type: ObjectId,
    ref: 'Category'
  },
});

module.exports = model("Product", schema);