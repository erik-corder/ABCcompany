const express = require('express');
const router = express.Router();
const Deduction = require('../models/deduction');

router.post('/', function (req, res) {
    const deduction = new Deduction({
        EmployeeId:req.body.EmployeeId,
        Date:req.body.Date,
        MonthlyDeduction:req.body.MonthlyDeduction,
        TotalDeduction:req.body.Total,
        EPF:req.body.EPF,
        ETF:req.body.ETF,
        OtherDeduction:req.body.OtherDeduction,
        EnterUser:req.body.EnterUser,
        EnterDate:req.body.EnterDate,
        EnterTime:req.body.EnterTime,
    });

    Deduction.saveDeduction(deduction,function(err,AddDeduction){
        if(err){
            res.json({state:"false",msg:"data not inserted"});
        }
        if(AddDeduction){
            res.json({state:"true",msg:"data inserted"})
        }
    });
});

module.exports = router;