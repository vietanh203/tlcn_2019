var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      auto: true,
    },
    areaControll :{
      type: Array
    },
    data : {

    },
    connect : {
      type : Boolean
    },
    shareID : Array,
    id:String,
    password:String,
    manaUser : String,
    name:String
  }); 
  
  module.exports = mongoose.model('devices', UserSchema);