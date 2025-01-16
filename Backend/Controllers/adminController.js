const {db}=require("../Database/Connection")
const signUpAdmin=async(req,res)=>{

    const {name,email,password}=req.body;
    if(!email||!password||!name){
        res.json({msg:"please provide all the fields"})
    }
    try {
        const inserQuery="INSERT INTO admins(name,email,password) VALUES($1,$2,$3)"
        const values=[name,email,password]
        const admin=await db.query(inserQuery,values)
       
        
        console.log(admin)
        res.status(200).json({msg:"admin created "})
    } catch (error) {
        console.log(error)
        res.status(400).json({msg:"Internal server"})
    }
    
}
const signInAdmin=async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        res.json({msg:"Plaseprovide the fields"})
    }
    try {
        const searchQuery="SELECT * FROM admins WHERE email=$1 AND password=$2"
        const values=[email,password];
        const {rows}=await db.query(searchQuery,values)
        // console.log(rows.length)
        if(rows.length==0){
            res.status(400).json({msg:"Please Enter the Correct email or Password"})
        }
        // console.log(rows[0])
        const admin=rows[0];
        
        res.status(200).json({admin})

    } catch (error) {
        console.log(error)
        res.status(404).json({msg:"Internal server error"})
    }
}
const createCourse=async(req,res)=>{
    const {title,description,price,imgurl,creator_id}=req.body
    if (!title || !description || !price || !imgurl || !creator_id) {
        return res.status(400).json({ msg: "Please fill all the fields" });
    }

    try {
        const insertQuery="INSERT INTO courses(title,description,price,imgurl,creator_id) VALUES($1,$2,$3,$4,$5) RETURNING*"
        const values=[title,description,price,imgurl,creator_id]
        const { rows } = await db.query(insertQuery, values);
                console.log(rows)
        // Respond with success
        res.status(201).json({
            msg: "Course created successfully",
            course: rows[0] // Return the inserted course details
        });

    } catch (error) {
        console.log(error)
        res.status(404).json({msg:"Internal server error"})
    }
    
}
const deleteCourse=async(req,res)=>{
    const {id}=req.params
    if (!id) {
        return res.status(400).json({ msg: "Course ID is required" });
    }
    try {
        const deleteQuery="DELETE FROM courses WHERE id=$1 RETURNING*"
        const values=[id]
        const {rows}=await db.query(deleteQuery,values)
        const course=rows[0]
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