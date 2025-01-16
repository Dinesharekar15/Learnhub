
const signUpAdmin=async(req,res)=>{
    res.json({msg:"signUp admin"})
}
const signInAdmin=async(req,res)=>{
    res.json({msg:"login admin"})
}
const createCourse=async(req,res)=>{
    res.json({msg:"course creared"})
}
const deleteCourse=async(req,res)=>{
    res.json({msg:"deleted course"})
}
const addCourseContent=async(req,res)=>{
    res.json({msg:"Added course content"})
}
module.exports={signInAdmin,signUpAdmin,addCourseContent,createCourse,deleteCourse}