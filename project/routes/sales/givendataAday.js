const express = require('express');
const router = express.Router();
const givenDataAday = require('../../models/dailyGiven');

router.post('/', function (req, res) {
    
    const givenDataAdd = new givenDataAday({
        EmpId:req.body.EmpId,
        ItemName:req.body.ItemName,
        Date:req.body.Date,
        givenqty:req.body.givenqty,
        givensales:req.body.givensales,
        Remark:req.body.Remark,
        EnterUser:req.body.EnterUser,
        EnterDate:req.body.EnterDate,
        EnterTime:req.body.EnterTime
    });

    givenDataAday.saveGivenSales(givenDataAdd,function(err,Addgivendata){
        if(err){
            res.json({state:"false",msg:"data not inserted"});
        }
        if(Addgivendata){
            res.json({state:"true",msg:"data inserted"});
        }
    });
});

module.exports = router;