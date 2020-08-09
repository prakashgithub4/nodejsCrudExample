const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const { check, validationResult } = require('express-validator');
const { route } = require('../user');
const conn = require('../dbconfig');




router.get('/',function(req,res){
    const sql="select * from users";
    conn.query(sql,function(err,result){
         if(err) throw err;
         res.render('crud/index',{
             users:result
            });
      
    });
    //res.render('crud/index');
 });

router.get('/add',(req,res)=>{
 
  res.render('crud/add');
});
router.post('/save',function(req,res){
  let {fname,lname,email,password} = req.body;
  let data ={f_name:fname,l_name:lname,email:email,password:password};
  let sql = "INSERT INTO users SET ?";
   conn.query(sql,data,function(err,results){
      if(err) throw err;
      res.redirect('/crud/');
  });
 // console.log(fname);
 
});
router.get('/edit/:id',(req,res)=>{
  let id = req.params.id;
 const sql=`select * from users where id = ${id}`;
 conn.query(sql,function(err,results){
     if(err) throw err;
    // res.json(results);
     res.render('crud/edit',{
       record:results
     });
 });
 
 // res.render('crud/edit');
});

router.post('/update',function(req,res){
  let {fname,lname,email,password} = req.body;
  //let data ={f_name:fname,l_name:lname,email:email,password:password};
  let id = req.body.id;
  let sql = "UPDATE users SET f_name='"+fname+"', l_name='"+lname+"',email ='"+email+"',password ='"+password+"' WHERE id="+id;
  conn.query(sql,function(err,results){
       if(err) throw err;
       res.redirect('/crud/');
  });
});

router.get('/delete/:id',function(req,res){
   let id = req.params.id;
    let sql = "DELETE FROM `users` WHERE id="+id;
    conn.query(sql,function(err,results){
        if(err) throw err;
        res.redirect('/crud/');
        
    });
});

module.exports=router;


