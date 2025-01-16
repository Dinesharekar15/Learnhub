const express=require("express")
const router=express.Router();
const userAuth=require("../Middelwares/userAuth")
const{signUpUser,SignInUser,myCourse}=require('../Controllers/userController')

router.post("/signup",signUpUser)
router.post("/signin",SignInUser)
router.get("/mycourse",userAuth,myCourse);

module.exports={userRoute:router};