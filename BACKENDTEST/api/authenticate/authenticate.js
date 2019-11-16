module.exports = function(apiRouter,User,jwt,superSecret){
    apiRouter.post('/authenticate',function(req,res){
        console.log(req.body);
        User.findOne({
            username : req.body.username
        }).select('name username password').exec(function(err,user){
            if(err) res.send(err);
            if(!user){
                res.json({
                    success : false,
                    massage : 'Athentication failed .user not found.'
                });
            }else{
                let validPassword = user.comparePassword(req.body.password);
                if(!validPassword){
                    res.json({
                        success : false,
                        message : 'Authentication failed . Wrong password.'
                    });
                }else{
                    let token = jwt.sign({
                        name : user.name,
                        username : user.username
                    },superSecret);
                    res.json({
                        success : true,
                        message : 'User da duoc cap phat token!',
                        token : token
                    })
                }
            }
        })
    });

    apiRouter.use(function(req,res,next){
        console.log('Dang lam tren App!');
        //check header or url
        let token = req.body.token || req.query.token || req.headers['x-access-token'];
    
        if(token){
            jwt.verify(token,superSecret,function(err,decoded){
                if(err) {
                    res.json({
                        success:false,
                        message: 'Failed to authenticate token'
                    })
                }else { 
                    console.log(decoded)
                    req.decoded = decoded;
                    next();
                }
            });
        }else { 
            return res.status(403).send({
                success : false,
                massage : 'No token provided'
            })
        }
    });
    
}