var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    
        
        name: String,
        password: String,
        firstName : String,
        lastName : String,
        email : String,
        phone : String,
        city : String,
        state : String ,
        address :String,
        areaControll : []
        
  }); 

UserSchema.methods.comparePassword = function(candidatePassword){
    return candidatePassword== this.password ? true : false;
};
  
module.exports = mongoose.model('users', UserSchema);