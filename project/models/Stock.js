const mongoose = require('mongoose');
const schema = mongoose.schema;

const stockSchema = mongoose.Schema({
    InVoicNo:{type:String,require:true},
    StockName:{type:String,require:true},
    Qty:{type:String,require:true},
    Vaue:{type:String,require:true},
    Date:{type:String,require:true},
    DeadOrNO:{type:String,require:true},
    EnterUser:{type:String,require:true},
    EnterDate:{type:String,require:true},
    EnterTime:{type:String,require:true}
});