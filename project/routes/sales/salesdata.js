const express = require('express');
const router = express.Router();
const Item = require('../../models/dailySales');

router.post('/', function (req, res) {
    const newsalesAdd = new Item({
        EmpId:req.body.EmpId,
        Date:req.body.Date,
        ItemName:req.body.ItemName,
        SalesQty:req.body.SalesQty,
        SalesCost:req.body.SalesCost,
        DailySaveqty:req.body.DailySaveqty,
        TotalSaveqty:req.body.TotalSaveqty,
        OTachieve:req.body.OTachieve,
        DailyDeduction:req.body.DailyDeduction,
        BankingDetails:req.body.BankingDetails,
        Attendency:req.body.Attendency,
        CashDetails:req.body.CashDetails,
        AreaDetails:req.body.AreaDetails,
        Remark:req.body.Remark,
        EnterUser:req.body.EnterUser,
        EnterDate:req.body.EnterDate,
        EnterTime:req.body.EnterTime
    });

    Item.savesales(newsalesAdd,function(err,AddItem){
        if(err){
            res.json({state:"false",msg:"data not inserted"});
        }
        if(AddItem){
            res.json({state:"true",msg:"data inserted"});
        }
    });
});
 
module.exports = router;
