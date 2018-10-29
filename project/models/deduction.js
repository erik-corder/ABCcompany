const mongoose = require('mongoose');
const schema = mongoose.schema;

const deductionSchema = mongoose.Schema({
    EmployeeId:{type:String,require:true},
    Date:{type:Date,require:true},
    MonthlyDeduction:{type:Number,require:true},
    TotalDeduction:{type:Number,require:true},
    EPF:{type:Number,require:true},
    ETF:{type:Number,require:true},
    OtherDeduction:{type:Number,require:true},
    EnterUser:{type:String,require:true},
    EnterDate:{type:String,require:true},
    EnterTime:{type:String,require:true}
});

module.exports = mongoose.model("Deduction",deductionSchema);

module.exports.saveDeduction = function(deduction,callback){
    deduction.save(callback);
};