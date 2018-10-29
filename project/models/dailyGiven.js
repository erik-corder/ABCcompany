const mongoose = require('mongoose');
const schema = mongoose.schema;

const dailyGivenSchema = mongoose.Schema({
    EmpId:{type:String,require:true},
    ItemName:{type:String,require:true},
    Date:{type:String,require:true},
    givenqty:{type:String,require:true},
    givensales:{type:String,require:true},
    Remark:{type:String,require:true},
    EnterUser:{type:String,require:true},
    EnterDate:{type:String,require:true},
    EnterTime:{type:String,require:true}
});

module.exports = mongoose.model("DailyGiven",dailyGivenSchema);

module.exports.saveGivenSales = function(givendata,callback){
    givendata.save(callback);
}