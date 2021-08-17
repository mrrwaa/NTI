const express = require('express')
const router = express.Router()
const userController = require('../src/controller/user.cont')
const customerController = require('../src/controller/customer')
router.get('/' , (req,res) =>{
    res.redirect('/showall');
})

router.get('/add' , (req,res) =>{
    res.render('add' , {title: 'add new user'});
})

router.post('/add' , (req,res) =>{
    customerController.addData(req.body.name,req.body.balance)
    res.redirect('/showall')
})

router.get('/showall' , (req,res) =>{
   let allusers = userController.showAllUsers();
   
    res.render('all' , {
        title:"show all users",
        allusers,
        isEmpty: allusers.length?false:true
    })

})

router.get('/deposit/:id' , (req,res) =>{
    res.render("dep");
})

router.post('/deposit/:id' , (req,res) =>{
    customerController.Deposit(req.params.id , req.body.deposit)
 
    res.redirect('/showall');
})

router.post('/delete/:id' , (req,res) =>{
    customerController.delete(req.params.id);
    res.redirect('/showall');
})

router.get('/edit/:id' , (req,res) =>{
   let userdata = customerController.searchUser(req.params.id)
    res.render("edit" , {
     user: userdata,
  })
   
})
router.post('/edit/:id' , (req,res) =>{
    customerController.editUser(req.params.id , req.body)
    res.redirect('/showall')
})
module.exports = router