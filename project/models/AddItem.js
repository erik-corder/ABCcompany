const mongoose = require('mongoose');
const schema = mongoose.schema;

const itemShema = mongoose.Schema({
    ItemName:{type:String,require:true},
    ItemNo:{type:String,require:true},
    FaceValue:{type:String,require:true},
    SellValue:{type:String,require:true},
    NetValue:{type:String,require:true},
    EnterUser:{type:String,require:true},
    EnterDate:{type:Date,require:true},
    EnterTime:{type:String,require:true}
});

module.exports = mongoose.model("AddItem",itemShema);

module.exports.saveItem = function(newItem,callback){
    newItem.save(callback);
}