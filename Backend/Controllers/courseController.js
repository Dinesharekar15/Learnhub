const allCourses=async(req,res)=>{
    res.json({msg:"all courses"})
}

const purchesCourse=async(req,res)=>{
    res.json({msg:"coursePurchesed"})
}

module.exports={allCourses,purchesCourse}