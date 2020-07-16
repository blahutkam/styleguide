const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  //retaionship between user and contacts...each user has his own list of contacts
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  type: {
    type: String,
    default: "personal",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("contact", ContactSchema);
