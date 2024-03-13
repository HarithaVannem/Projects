const mongoose = require("mongoose");
//Destructuring
const { Schema } = mongoose;

//schema structure
const userSchema = new Schema({
  googleId: String,
});

//now schema will be created in the database
mongoose.model("users", userSchema);
