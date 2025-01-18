
const { db } = require("../Database/Connection");
const jwt=require("jsonwebtoken")
const {secret}=require("../config")
const signUpUser=async (req,res)=>{
    const {name,email,password}=req.body;
    if(!name|| !email || !password){
        return res.json({msg:"please provide all the fields"})
    }
    try {
        const checkUser="SELECT * FROM users WHERE email=$1"
        const result=await db.query(checkUser,[email])
        if(result.rows.length>0){
           return res.status(404).json({Msg:"email already exist"})
        }
        
        const insertQuery="INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING*"
        const values=[name,email,password]
        const {rows}=await db.query(insertQuery,values)
        console.log(rows)
        const user=rows[0]
        
        const token=jwt.sign({
            email
        },secret)
        return res.status(200).json({
            msg:"userSignUp",
            user:user.rows,
            token:token
        })
    } catch (error) {
        // console.log(error)
        res.status(500).json({ msg: "Internal Server Error", error: error.message });
    }
    
}
const signInUser=async (req,res)=>{
    const {email,password}=req.body;

    try {
    const findQuery="SELECT * FROM users WHERE email=$1 AND password=$2"
    const values=[email,password]
    const {rows}=await db.query(findQuery,values)
    if(rows.length==0){
        res.statsu(400).json({msg:"Incorrect Password or username"})
    }
    const user=rows[0];
    const token=jwt.sign({
        email
    },secret)
    res.json({
        user:user,
        token:token
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"server error"})
    }
    
}


const myCourse=async(req,res)=>{
    const email=req.email
    console.log(email)
    try {
        const findQuery="SELECT * FROM users WHERE email=$1"
        const result=await db.query(findQuery,[email])
        if (result.rows.length === 0) {
            return res.status(404).json({ msg: "User not found" });
        }
        
        const courseIds=result.rows[0].courseids;
        


        const courseQuery = "SELECT * FROM courses WHERE id = ANY($1::int[])";
        const courseResult = await db.query(courseQuery, [courseIds]); // Pass courseIds as a single parameter
        res.status(200).json({ MyCourses: courseResult.rows }); 
       
    } catch (error) {
        console.log(error)
        res.status(403).json({msg:"Internal server error"})
    }
    
}

module.exports={signUpUser,signInUser,myCourse}