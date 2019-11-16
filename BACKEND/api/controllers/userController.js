var mongoose = require('mongoose'),
User = mongoose.model('users');


// exports.list_all_users = function(req, res) {
//   User.find({}, function(err, user) {
//     if (err)
//       res.send(err);
//     res.json(user);
//   });
// };


 

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.read_a_user = function(req, res) {
  User.find({username:req.params.username}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
    //res.json(user);
  });
};


exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({username: req.params.username}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.find_user = function(req,res){
  User.find({username:req.params.username},function(err,user){
    if(err) res.json(err);
    console.log(user);
    res.json({
      status : user.length>0 ? true : false
    })
  })
}

