const express = require('express');
const router = express.Router();
const Item = require('../models/AddItem');

router.post('/', function (req, res) {
    const newItemAdd = new Item({
        ItemName:req.body.ItemName,
        ItemNo:req.body.ItemNo,
        FaceValue:req.body.FaceValue,
        SellValue:req.body.SellValue,
        NetValue:req.body.NetValue,
        EnterUser:req.body.EnterUser,
        EnterDate:req.body.EnterDate,
        EnterTime:req.body.EnterTime
    });

    Item.saveItem(newItemAdd,function(err,AddItem){
        if(err){
            res.json({state:"false",msg:"data not inserted"});
        }
        if(AddItem){
            res.json({state:"true",msg:"data inserted"});
        }
    });
});
 
module.exports = router;
