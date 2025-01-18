const express=require("express");
const adminAuth=require("../Middelwares/adminAuth")
const {signInAdmin,signUpAdmin,addCourseContent,deleteCourse,createCourse}=require("../Controllers/adminController")
const router=express.Router();

router.post("/signup",signUpAdmin)
router.post("/signin",signInAdmin)
router.post("/creatcourse",adminAuth,createCourse)
router.post("/addcontent",adminAuth,addCourseContent)
router.delete("/course/delete/:id",adminAuth,deleteCourse)

module.exports={adminRoute:router};