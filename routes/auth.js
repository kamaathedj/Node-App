const router=require('express').Router();


// models to save data
const userData=require('../models/user.js');

// register user route
router.post('/register',(req,res)=>{
    res.send('set to register ');
    userData.personUser(req.body);

});

// login user route
router.post('/login',(req,res)=>{
    res.send('set to log in the system');
    
});

router.get('/users',(req,res)=>{
    var users =userData.fetchUsers();
   res.json(users);
});

// secret part in the app 🥠🥟🤣
router.all('/secret',(req,res)=>{
    res.send('you can get anything from this endpoint 🎁')
});


module.exports=router;