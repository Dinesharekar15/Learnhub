const express=require("express")
const router=express.Router();
const userAuth=require("../Middelwares/userAuth")
const{signUpUser,signInUser,myCourse}=require('../Controllers/userController')


router.post("/signup",signUpUser)
router.post("/signin",signInUser)
router.get("/mycourse",userAuth,myCourse);

module.exports={userRoute:router};