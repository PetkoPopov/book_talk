const router = require('express').Router()
router.get('/',(req,res)=>{res.render('home')})
router.get('/login',(req,res)=>{res.render('login')})
router.get('/register',(req,res)=>{res.render('register')})
router.get('/details',(req,res)=>{res.render('details')})
router.get('/logout',(req,res)=>{res.render('logout')})


module.exports = router