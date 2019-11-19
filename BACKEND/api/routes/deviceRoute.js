module.exports = function(app){
    var device = require('../controllers/deviceController');

    //device route
    app.route('/devices')
        .get(device.list_all_devices)
        .post(device.create_a_device)
    app.route('/devices/:deviceid')
        .get(device.read_a_device)
        .put(device.update_a_device)
    app.route('/devices/usercontrolldevice/:userid')
        .get(device.list_all_usercontrolldevice)
    app.route('/devices/areacontrolldevice/:areaid')
        .get(device.list_all_areacontrolldevice)
    app.route('/devices/sharecontrolldevice/:shareid')
        .get(device.list_all_sharecontrolldevice)
    app.route('/devices/connectdevice')
        .post(device.device_connect)
    
};                                  