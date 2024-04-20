let express=require('express')
const router=express.Router()
const userController=require('../controller/user')
const authMiddleware=require('../middileware/auth')
const validateRegistration=require('../middileware/validation')


router.post("/register",validateRegistration,userController.userRegister)
router.post("/login",userController.userLogin)
router.get('/userDetails', authMiddleware, userController.getUserDetails)


module.exports=router