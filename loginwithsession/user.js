const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
router.get('/',function(req,res){
   res.render('register',{errors:''});
});
router.post('/submit',[
    check('name').notEmpty(),
    check('phone').notEmpty().isNumeric(),
    check('email').isEmail(),
    check('pwd').notEmpty()
  ],function(req,res){
    const errors = validationResult(req).array();
    if(errors.length > 0){
        res.render('register',{
            errors:errors
        });
    }
    else{
        res.send("User hasbeen successfully register");
    }
   
  
 
});
module.exports=router;