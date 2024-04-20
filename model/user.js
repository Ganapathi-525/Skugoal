

const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true,
      },
      place:{
        type: String,
        required:true
      }
})

const User= mongoose.model('Data', userSchema);

module.exports = User;