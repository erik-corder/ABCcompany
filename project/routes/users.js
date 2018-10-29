const express = require('express');
const router = express.Router();
const User = require('../models/user');
const config = require('../config/database');
const passport = require('passport');

router.get('/', function (req, res) {
    res.send('about');
  });

//route the register form.
router.post('/register', function (req, res) {
    const newUser = new User({
        
        NameWithInitial:req.body.NameWithInitial,
        FullName:req.body.FullName,
        Address:req.body.Address,
        HouseNo:req.body.HouseNo,
        postCode:req.body.postCode,
        NICNo:req.body.NICNo,
        ContactNo:req.body.ContactNo,
        BirthDay:req.body.BirthDay,
        Email:req.body.Email,       
        Designation:req.body.Designation,
        Jobtitle:req.body.Jobtitle,
        BasicSalary:req.body.BasicSalary,
        Status:req.body.Status,
        Remarks:req.body.Remarks      
    });

    //pass value for password encrypt function. 
    User.saveUser(newUser,function(err,user){
        if(err){
            res.json({state:"false",msg:"data not inserted"});
        }
        if(user){
            res.json({state:"true",msg:"data inserted"});
        }
    });
});

router.post('/login',function(req,res){
    const Email = req.body.Email;
    const Password = req.body.Password; 


    console.log(Password);
    

    User.findbyEmail(Email,function(err,user){
        if(err) throw err;
        console.log(user.NameWithInitial);
        if(!user){
            res.json({Status:"fales",msg:"User not found."});
        }
        User.passwordCheck(Password,'$2a$10$9xS99kgihup88QgKXdbjZupN9przyWoe8aBulA..ZZ/xpJTyDOB2i',function(err,match){
            if(err) throw err;

            if(match){

                const token = jwt.sign(user,config.secret,{expiresIn:86400});
                res.json({
                    state:"true",
                    token:"JWT "+token,
                    user:{
                        id:user._id,
                        FullName:user.FullName,
                        Email:user.Email,
                    }
                });
            }
        });
    });
});

router.post('/profile', passport.authenticate('jwt', { session: false }),
    function(req, res) {
        res.json({user:req.user});
    }
);
 
module.exports =router;