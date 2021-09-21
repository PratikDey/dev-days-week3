const mongoose = require("mongoose");

const formDataSchema = {
  email: String,
  name: String,
  rollno: String,
  url: String,
  file: String,
};

const formDataModel = mongoose.model("formDataModel", formDataSchema);

module.exports = formDataModel;
