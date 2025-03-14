const {db}=require("../Database/Connection")
const jwt=require('jsonwebtoken')
const {secret}=require('../config');
const { uploadOnCloudinary } = require("../utils/cloudinary");
const signUpAdmin=async(req,res)=>{

    const {name,email,password}=req.body;
    if(!email||!password||!name){
        res.json({msg:"please provide all the fields"})
    }
    try {
        const checkUser="SELECT * FROM admins WHERE email=$1"
        const result=await db.query(checkUser,[email])
        if(result.rows.length>0){
           return res.status(404).json({Msg:"email already exist"})
        }

        const inserQuery="INSERT INTO admins(name,email,password) VALUES($1,$2,$3)"
        const values=[name,email,password]
        const admin=await db.query(inserQuery,values)
       
        
        console.log(admin)
        const token=jwt.sign({
            email
        },secret)

        res.status(200).json({msg:"admin created ",token:token})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg:"Internal server"})
    }
    
}
const signInAdmin=async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
       return res.json({msg:"Plaseprovide the fields"})
    }
    try {
        const searchQuery="SELECT * FROM admins WHERE email=$1 AND password=$2"
        const values=[email,password];
        const {rows}=await db.query(searchQuery,values)
        // console.log(rows.length)
        if(rows.length==0){
            return res.status(400).json({msg:"Please Enter the Correct email or Password"})
        }
        // console.log(rows[0])
        const admin=rows[0];
        const token=jwt.sign({email},secret)
        return res.status(200).json({admin,token:token})

    } catch (error) {
        console.log(error)
        return res.status(404).json({msg:"Internal server error"})
    }
}
const createCourse=async(req,res)=>{
    const {title,description,price}=req.body
    const email=req.email;
    if (!title || !description || !price  ) {
        return res.status(400).json({ msg: "Please fill all the fields" });
    }
    // Validate price is a number
    if (isNaN(price)) {
        return res.status(400).json({ msg: "Price must be a valid number" });
    }
    // check the proper image provided or not 
    if (!req.file?.mimetype.startsWith('image/')) {
        return res.status(400).json({
            msg: "Please upload image and not the other files"
        })
    }
    const thumbnailImgBuffer = req.file.buffer;
    const fileName = `${Date.now()}-${req.file.originalname}`; 
    // upload to coudinary
    
    

    
    const thumbnailImg = await uploadOnCloudinary(thumbnailImgBuffer, fileName);
        if (!thumbnailImg) {
            return res.status(500).json({
                msg: "Failed to upload cover image to Cloudinary"
            });
        }


    try {
        const findQuery=`SELECT id FROM admins WHERE email=$1`
        const result=await db.query(findQuery,[email])
        const id=result.rows[0].id;


        const insertQuery="INSERT INTO courses(title,description,price,imgurl,creator_id) VALUES($1,$2,$3,$4,$5) RETURNING*"
        const { rows } = await db.query(insertQuery, [title,description,price,thumbnailImg
            .secure_url,id]);
        const courseId=rows[0].id

        const updateQuery="UPDATE admins SET courseIds = array_append(courseIds, $1) WHERE email=$2 RETURNING* "
        await db.query(updateQuery,[courseId,email])

        res.status(201).json({
            msg: "Course created successfully",
            course: rows[0] 
        });

    } catch (error) {
        console.log(error)
        res.status(404).json({msg:"Internal server error"})
    }
    
}
const deleteCourse=async(req,res)=>{
    const {id}=req.params
    const email=req.email
    if (!id) {
        return res.status(400).json({ msg: "Course ID is required" });
    }
    try {
        const findQuery="SELECT id FROM admins WHERE email=$1"
        const result=await db.query(findQuery,[email])
        if(result.rows.length==0){
            res.status(404).json({msg:"admin not found"})
        }
        
        const admin_Id=result.rows[0].id;

        // find the course 
        const findCourse="SELECT * FROM courses WHERE id=$1"
        const courseresult=await db.query(findCourse,[id])
        if(courseresult.rows.length==0){
            res.status(404).json({msg:"Course not found"})
        }
        // console.log(courseresult.rows[0])
        const creator_id=courseresult.rows[0].creator_id;
        console.log(creator_id,admin_Id)
        // match the creator id with the adminId
        if(creator_id!==admin_Id){
            return res.status(403).json({ msg: "You are not authorized to delete this course" });

        }

        const deleteQuery="DELETE FROM courses WHERE id=$1 RETURNING*"
        const {rows}=await db.query(deleteQuery,[id])
        const course=rows[0]

        const updateAdminQuery ="UPDATE admins SET courseids=array_remove(courseids,$1) WHERE id=$2 RETURNING*"
        await db.query(updateAdminQuery,[id,admin_Id])


        res.status(200).json({
            msg:"Course deleted ",
            course
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({msg:"Internal server error"})
    }
    
    
}
const addCourseContent=async(req,res)=>{
    res.json({msg:"Added course content"})
}
module.exports={signInAdmin,signUpAdmin,addCourseContent,createCourse,deleteCourse}