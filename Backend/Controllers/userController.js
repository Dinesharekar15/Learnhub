
const { db } = require("../Database/Connection");

const signUpUser=async (req,res)=>{
    const {name,email,password}=req.body;
    if(!name|| !email || !password){
        res.json({msg:"please provide all the fields"})
    }
    try {
        
        const insertQuery="INSERT INTO users(name,email,password) VALUES($1,$2,$3)"
        const values=[name,email,password]
        const {rows}=await db.query(insertQuery,values)
        const user=rows[0]
        console.log("Insertion success",user)
        res.status(200).json({
            msg:"userSignUp",
            user:user.rows
        })
    } catch (error) {
        // console.log(error)
        res.status(500).json({ msg: "Internal Server Error", error: error.message });
    }
    
}
const SignInUser=async (req,res)=>{
    const {email,password}=req.body;

    try {
    const findQuery="SELECT * FROM users WHERE email=$1 AND password=$2"
    const values=[email,password]
    const {rows}=await db.query(findQuery,values)
    if(rows.length==0){
        res.statsu(400).json({msg:"Incorrect Password or username"})
    }
    const user=rows[0];
    
    res.json({
        user
    })
    } catch (error) {
        console.log(error)
        res.status(500).json({msg:"server error"})
    }
    
}


const myCourse=async(req,res)=>{
    res.json({msg:"my all courses"})
}

module.exports={signUpUser,SignInUser,myCourse}