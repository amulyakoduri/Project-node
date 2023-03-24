const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please Enter project Name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please Enter project Description"],
    },
    isActive:{
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model("Project", projectSchema);