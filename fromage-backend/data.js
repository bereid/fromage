const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  { id: String },
  { title: String, time_from: Date, time_to: Date, location: String, description: String, attendees: Number, whattobring: String }
);

module.exports = mongoose.model("Data", DataSchema);
