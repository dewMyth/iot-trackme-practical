const mongoose = require("mongoose");

//Event Schema
const DeviceSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name : {
    type : String,
  }
});

module.exports = Device = mongoose.model("device", DeviceSchema);
