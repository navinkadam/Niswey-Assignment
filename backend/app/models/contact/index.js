const Mongoose = require("mongoose");

const Schema = Mongoose.Schema;

const contactSchema = new Schema(
  {
    phone: {
      type: String,
      // unique: true,
      // index: true,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// contactSchema.index({ name: 1, lastName: 1 });

module.exports = contactSchema;
