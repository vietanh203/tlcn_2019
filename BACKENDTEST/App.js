let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let Area = require('./api/models/areaModel');
let User = require('./api/models/userModel');
let Device = require('./api/models/deviceModel');

let morgan = require('morgan');
let jwt = require('jsonwebtoken');
let cors = require('cors');

const superSecret = 'iloveyouthreethousand';
let port = process.env.PORT || 8888;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET','POST');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
    next();
});

app.use(morgan('dev'));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/iotDB',{useNewUrlParser:true});
mongoose.set('useCreateindex',true);

app.get('/',function(req,res){
    res.send('Welcome to the home page!');
})


let apiRouter = express.Router();

let auth = require('./api/authenticate/authenticate');
auth(apiRouter,User,jwt,superSecret);



apiRouter.get('/',function(req,res){
    res.json({
        message : 'Restful Api! welcome to our api'
    });
})


let users = require('./api/routes/userRoute');
users(apiRouter);

let devices = require('./api/routes/deviceRoute');
devices(apiRouter);

let areas = require('./api/routes/areaRoute');
areas(apiRouter);


app.use('/api',apiRouter);


app.listen(port,()=>{
    console.log('start with port ' + port + '....' );
});
