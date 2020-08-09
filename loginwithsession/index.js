const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('public'))
app.use(session({secret: "key"}));
app.get('/',function(req,res){
    res.render('index');  
});
app.get('/login',(req,res)=>{
   res.render('login');
});
app.post('/login/process',(req,res)=>{

    if((req.body.email == 'pp@gmail.com')&&(req.body.pass =='1234')){
      req.session.email = req.body.email;
       res.render('dashbord.ejs',{
        session: req.session
    });
       // res.send('Login Successfull with'+ req.session.email);

    }
    else{
       
        res.render('login');
    }
    
});
const user = require('./user');
app.use('/user',user);

const crud = require('./crud/crud');
app.use('/crud',crud);

app.listen(8080);
