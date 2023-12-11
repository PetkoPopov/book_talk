const router = require("express").Router()
const homeController=require('../controllers/homeController.js')
const userController=require('../controllers/userController.js')
const bookController=require('../controllers/bookController.js')


router.use(homeController)
router.use('/user',userController)
router.use('/book',bookController)
module.exports = router