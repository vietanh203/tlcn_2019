var mongoose = require('mongoose');
Area = mongoose.model('areas');



exports.list_all_areas = function(req, res) {
  Area.find({}, function(err, area) {
    if (err)
      res.send(err);
    res.json(area);
  });
};


 

exports.create_a_area = function(req, res) {
  var new_area = new Area(req.body);
  new_area.save(function(err, area) {
    if (err)
      res.send(err);
    res.json(area);
  });
};


exports.read_a_area = function(req, res) {
  Area.find({id:req.params.areaid}, function(err, area) {
    console.log(area);
    if (err)
      res.send(err);
    res.send(area);
  });
};


exports.update_a_area = function(req, res) {
  Area.findOneAndUpdate({_id: req.params.areaid}, req.body, {new: true}, function(err, area) {
    if (err)
      res.send(err);
    res.json(area);
  });
};

exports.list_all_areacontroll = function(req,res){
  // Area.aggregate([
  //   {
  //     $lookup:{
  //       from : 'areas',
  //       localField:'areaControll',
  //       foreignField:'id',
  //       as:'areaControllList'
  //     }
  //   },
  //   {
  //     $match: { 
  //       id: req.params.areaid 
  //     } 
  //   }
  // ],function(err,data){
  //   if(err) res.send(err);
  //   else if(data.length>0){
  //     res.send(data[0].areaControllList);
  //   }else res.send([]);  
  // })
  Area.find({manaArea:req.params.areaid},function(err,area){
    if(err) res.send(err);
    res.send(area);
  })
}
exports.list_all_usercontrollarea = function(req,res){
  Area.find({manaUser:req.params.userid},function(err,area){
    if(err) res.send(err);
    res.send(area);
  })

}