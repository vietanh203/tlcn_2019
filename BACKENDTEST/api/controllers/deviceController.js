var mongoose = require('mongoose');
Device = mongoose.model('devices');



exports.list_all_devices = function(req, res) {
  Device.find({}, function(err, device) {
    if (err)
      res.send(err);
    res.json(device);
  });
};


 

exports.create_a_device = function(req, res) {
  var new_device = new Device(req.body);
  new_device.save(function(err, device) {
    if (err)
      res.send(err);
    res.json(device);
  });
};


exports.read_a_device = function(req, res) {
  Device.find({'id':req.params.deviceid}, function(err, user) {
    
    if (err)
      res.send(err);
    res.send(user);
  });
};


exports.update_a_device = function(req, res) {
  Device.updateOne({id: req.params.deviceid},{$set : req.body}, function(err, user) { 
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.list_all_areacontrolldevice = function(req,res){
  // Device.aggregate([
  //   {
  //     $lookup:{
  //       from : 'devices',
  //       localField:'deviceControll',
  //       foreignField:'id',
  //       as:'deviceControllList'
  //     }
  //   },
  //   {
  //     $match: { 
  //       id: req.params.deviceid 
  //     } 
  //   }
  // ],function(err,data){
  //   if(err) res.send(err);
  //   else if(data.length>0){
  //     res.send(data[0].deviceControllList);
  //   }else res.send([]);  
  // })
  Device.find({manaAreas:req.params.areaid},function(err,device){
    if(err) res.send(err);
    res.send(device);
  })
}
exports.list_all_usercontrolldevice = function(req,res){
  Device.find({manaUser:req.params.userid},function(err,device){
    if(err) res.send(err);
    //res.send(device);
    Device.find({shareID : [req.params.userid]},function(err,device1){
      if(err) res.send(err);
      res.send({myDevice : device , shareDevice : device1});
    });
  })

}


exports.list_all_sharecontrolldevice = function(req,res){
  Device.find({shareID : [req.params.shareid]},function(err,device){
    if(err) res.send(err);
    res.send(device);
  });
}

exports.device_connect =function(req,res){
  Device.findOne({
    id:req.body.id
  }).select('id password manaUser').exec(function(err,device){
    if(err) res.json({
      success : false,
      message : 'Fail from server'
    })
    if(!device){
      res.json({
        success : false,
        message : 'Thiết Bị Không Tồn Tại'
      })
    }else{
      if(device.password !== req.body.password){
        console.log(device.password , req.body.password)
        res.json({
          success: false,
          message: 'Sai Password'
        })
      }else if(device.manaUser){
        console.log(device.manaUser)
        res.json({
          success:false,
          message: 'Thiết Bị Đang Được Sử Dụng , Phải Reset Thiết Bị!'
        })
      }else{
        res.json({
          success:true,
          message:'Kết Nối Thành Công'
        })
      }
    }
  })
}