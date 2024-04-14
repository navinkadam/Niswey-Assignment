const Mongoose = require("mongoose");

const ContactSchema = require("./contact");

module.exports = {
  Contact: Mongoose.model("Contact", ContactSchema),
};
