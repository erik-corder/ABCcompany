const express = require('express');
const router = express.Router();
const salary = require('../models/salary');

router.post('/', function (req, res) {
    const salaryAdd = new salary({
        EmaployeeId:req.body.EmaployeeId,
        Date:req.body.Date,
        Remark:req.body.Remark,
        Budget2010:req.body.Budget2010,
        Budger2016:req.body.Budger2016,
        MealAllowance:req.body.MealAllowance,
        SalesCommition:req.body.SalesCommition,
        TelephoneCommition:req.body.TelephoneCommition,
        TargetAchieve:req.body.TargetAchieve,
        MotorbikeCommition:req.body.MotorbikeCommition,
        FuelAllowance:req.body.FuelAllowance,
        EnterUser:req.body.EnterUser,
        EnterDate:req.body.EnterDate,
        EnterTime:req.body.EnterTime
    });

    salary.saveSalary(salaryAdd,function(err,AddSalary){
        if(err){
            res.json({state:"false",msg:"data not inserted"});
        }
        if(AddSalary){
            res.json({state:"true",msg:"data inserted"});
        }
    });
});

module.exports = router;