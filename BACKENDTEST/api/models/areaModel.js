var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    // name: {
    //   type: String,
    //   required: 'Kindly enter the name of the user'
    // },
    // Created_date: {
    //   type: Date,
    //   default: Date.now
    // },
    // status: {
    //   type: [{
    //     type: String,
    //     enum: ['pending', 'ongoing', 'completed']
    //   }],
    //   default: ['pending']
    // },
    // areaControllList : {type : Array},
    // areaControll : {type : Array},
    // deviceControll : {type : Array},
    // id : {
    //   type : String
    // }
    
  }); 
  
  module.exports = mongoose.model('areas', UserSchema);