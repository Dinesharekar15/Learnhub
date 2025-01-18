const express=require("express")
const router=express.Router();
const { allCourses,purchesCourse } = require("../Controllers/courseController")
const userAuth=require('../Middelwares/userAuth')
router.get("/preview",allCourses)
router.post("/purches/:courseId",userAuth,purchesCourse)

module.exports={courseRouter:router}
