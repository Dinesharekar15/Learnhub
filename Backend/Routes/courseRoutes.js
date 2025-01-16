const express=require("express")
const router=express.Router();
const { allCourses,purchesCourse } = require("../Controllers/courseController")
 
router.get("/preview",allCourses)
router.put("/purches",purchesCourse)

module.exports={courseRouter:router}
