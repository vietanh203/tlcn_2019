var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
      type: String,
      required: 'Kindly enter the name of the user'
    },
    Created_date: {
      type: Date,
      default: Date.now
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
    manaUser : String
  }); 
  
  module.exports = mongoose.model('devices', UserSchema);