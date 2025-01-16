
const { db } = require("../Database/Connection");

const signUpUser=async (req,res)=>{
    const {name,email,password}=req.body;
    if(!name|| !email || !password){
        res.status.json({msg:"please provide all the fields"})
    }
    try {
        
        const insertQuery="INSERT INTO users(name,email,password) VALUES($1,$2,$3)"
        const values=[name,email,password]
        const user=await db.query(insertQuery,values)
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
    res.json({
        msg:"userSignIn"
    })
}


const myCourse=async(req,res)=>{
    res.json({msg:"my all courses"})
}

module.exports={signUpUser,SignInUser,myCourse}