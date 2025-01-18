
const {secret}=require('../config')
const jwt=require('jsonwebtoken')
const userAuth=(req,res,next)=>{
    const token=req.headers.authorization;
    
    if(!token){
        res.status(403).json({msg:"token must be provided"})
    }
    try {
        const decodedToken=jwt.decode(token,secret)
        
        if(decodedToken&&decodedToken.email){
            req.email=decodedToken.email;
            next();
        }else{
            res.status(403).json({
                msg:"You are not authorized"
            })
        }
    } catch (error) {
        
        res.status(403).json({msg:"authentication erro:",error})
    }
    
    
}
module.exports=userAuth;