const mongoose = require('mongoose');
const schema = mongoose.schema;

const salaryShema = mongoose.Schema({
    EmaployeeId:{type:String,require:true},
    Date:{type:String,require:true},
    Remark:{type:String,require:true},
    Budget2010:{type:String,require:true},
    Budger2016:{type:String,require:true},
    MealAllowance:{type:String,require:true},
    SalesCommition:{type:String,require:true},
    MotorbikeCommition:{type:String,require:true},
    TelephoneCommition:{type:String,require:true},
    TargetAchieve:{type:String,require:true},
    FuelAllowance:{type:String,require:true},
    EnterUser:{type:String,require:true},
    EnterDate:{type:String,require:true},
    EnterTime:{type:String,require:true}    
});

module.exports = mongoose.model("Salary",salaryShema);

module.exports.saveSalary = function(salaryAdd,callback){
    salaryAdd.save(callback);
};