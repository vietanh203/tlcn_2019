module.exports = function(app){
    var area = require('../controllers/areaController');

    //area route
    app.route('/areas')
        .get(area.list_all_areas)
        .post(area.create_a_area)

    app.route('/areas/:areaid')
        .get(area.read_a_area)
        .put(area.update_a_area)
    app.route('/areas/areacontroll/:areaid')
        .get(area.list_all_areacontroll)
    app.route('/areas/usercontrollarea/:userid')
    .get(area.list_all_usercontrollarea)
};