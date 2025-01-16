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
    res.json({msg:"coursePurchesed"})
}

module.exports={allCourses,purchesCourse}