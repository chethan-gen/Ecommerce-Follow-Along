const mongoose = require("mongoose");

// Define the schema for the user
const schema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String } // Optional field for storing the image path
});

// Create the mongoose model
const usermodel = mongoose.model("users", schema);

// Export the model
module.exports = { usermodel };
