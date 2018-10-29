const mongoose = require('mongoose');
const schema = mongoose.schema;

const salesShema = mongoose.Schema({
    EmpId:{type:String,require:true},
    Date:{type:String,require:true},
    ItemName:{type:String,require:true},
    SalesQty:{type:String,require:true},
    SalesCost:{type:String,require:true},
    DailySaveqty:{type:String,require:true},
    TotalSaveqty:{type:String,require:true},
    OTachieve:{type:String,require:true},
    DailyDeduction:{type:String,require:true},
    BankingDetails:{type:String,require:true},
    Attendency:{type:String,require:true},
    CashDetails:{type:String,require:true},
    AreaDetails:{type:String,require:true},
    Remark:{type:String,require:true},
    EnterUser:{type:String,require:true},
    EnterDate:{type:Date,require:true},
    EnterTime:{type:String,require:true}
});

module.exports = mongoose.model("Addsales",salesShema);

module.exports.savesales = function(newsalesAdd,callback){
    newsalesAdd.save(callback);
}