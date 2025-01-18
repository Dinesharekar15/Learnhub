const {db}=require("../Database/Connection")

const allCourses=async(req,res)=>{
    try {
        const searchQuery="SELECT * FROM courses"
        const {rows}=await db.query(searchQuery)
        if(rows.length==0){
            return res.status(404).json({ msg: "No courses found" });
        }
        res.status(200).json({
            Courses:rows
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({msg:"Internal server error"})
    }
    
}

const purchesCourse=async(req,res)=>{
    const email=req.email;
    console.log(email)
    const courseId=req.params.courseId
    console.log(courseId)
    try {
        const findQuery="SELECT*FROM courses WHERE id=$1 "
        const values=[courseId];
        const updateQuery="UPDATE users SET courseIds = array_append(courseIds, $1) WHERE email=$2 RETURNING*"
        const data=[courseId,email]
        await db.query(updateQuery,data)
        const {rows}=await db.query(findQuery,values)
        
        if(rows.length==0){
            res.status(404).json({msg:"Course not found"})
        }else{
        const course=rows[0];
        
        res.status(200).json({
            msg:"Couse Purchesed ",
            course:course
        })
      }
    } catch (error) {
        console.log(error)
        res.status(404).json({msg:"Internal server error"})
    }
    
}

module.exports={allCourses,purchesCourse}