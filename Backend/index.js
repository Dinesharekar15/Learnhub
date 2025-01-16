const express=require("express");
const cors=require("cors")
const app=express();
const{userRoute }=require("./Routes/userRoutes")
const{adminRoute }=require("./Routes/adminRoutes")
const {courseRouter}=require("./Routes/courseRoutes")
app.use(express.json())
app.use(cors())


app.use("/api/user",userRoute)
app.use("/api/admin",adminRoute)
app.use("/api/courses",courseRouter)

app.listen(3000,()=>{
    console.log("server is running on port")
})

