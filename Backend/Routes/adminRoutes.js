const express=require("express");
const adminAuth=require("../Middelwares/adminAuth")
const {signInAdmin,signUpAdmin,addCourseContent,deleteCourse,createCourse}=require("../Controllers/adminController")
const router=express.Router();
const upload=require('../Middelwares/multer.middelware')
const { body, param } = require('express-validator'); // For input validation


router.post("/signup", [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], signUpAdmin);

router.post("/signin", [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required'),
], signInAdmin);

router.post("/courses", adminAuth, upload.single('coverImage'), [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('price').isNumeric().withMessage('Price must be a number'),
], createCourse);

router.post("/courses/:id/content", adminAuth, [
    param('id').isUUID().withMessage('Invalid course ID'),
    body('content').notEmpty().withMessage('Content is required'),
], addCourseContent);

router.delete("/courses/:id", adminAuth, [
    param('id').isUUID().withMessage('Invalid course ID'),
], deleteCourse);


module.exports={adminRoute:router};