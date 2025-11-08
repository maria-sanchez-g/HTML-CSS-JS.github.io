const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  title: { type: String, trim: true, required: true },
  desc: { type: String, trim: true, required: true },
  isCompleted: { type: Boolean },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("todo", todoSchema);