const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = mongoose.schema;

const userSchema = mongoose.Schema({ // do not use new schema.
    
    NameWithInitial:{type:String,require:true},
    FullName:{type:String,require:true},
    Address:{type:String,require:true},
    HouseNo:{type:String,require:true},
    postCode:{type:String,require:true},
    NICNo:{type:String,require:true},
    ContactNo:{type:String,require:true},
    BirthDay:{type:String,require:true},
    Email:{type:String,require:true},   
    Designation:{type:String,require:true},
    Jobtitle:{type:String,require:true},
    BasicSalary:{type:Number,require:true},
    Status:{type:String,require:true},
    Remarks:{type:String,require:true}
});

const User = module.exports = mongoose.model("User",userSchema);

//password encrypt.
module.exports.saveUser = function(newUser,callback){
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hashSync(newUser.Password, salt, function(err, hash) {
            newUser.Password = hash;
            if(err) throw err;
            newUser.save(callback);
        });
    });
};

module.exports.findbyEmail = function(Email,callback){
    const query = {Email:Email};
    User.findOne(query,callback);
}

module.exports.passwordCheck = function(plainPassword,hash){
    bcrypt.compare(plainPassword, hash, function(err, res){
        console.log(res);
    });
};

module.exports.findUserbyId = function(id,callback){
    User.findOne(id,callback);
}