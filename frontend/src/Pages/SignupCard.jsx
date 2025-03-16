import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {z} from "zod"
import axios from "axios"
import { useNavigate } from "react-router-dom"; 
// import { backend_url } from "config.js";



const signupSchema=z.object({
  name:z.string().min(1,{message:"Name is required"}),
  email:z.string().email({message:"Invlaid email address"}),
  password:z.string().min(6,{message:"Password must be at least 6 characters"})
})

export default function SignupCard() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [loading,setLoading]=useState(false); 
    const [apiErrors,setApierror]=useState();
    const navigate =useNavigate();
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit =async (e) => {
      e.preventDefault();
      setLoading(true) 
      let response=({})
      try {
        signupSchema.parse(form)
        setErrors({});
        response =await axios.post(`http://localhost:3000/api/user/signup`,form)
        console.log(response.data.token)
        const token=localStorage.setItem("token",response.data.token)
        console.log(token)
        // console.log("Signup successful:", response.data);
        navigate("/"); 

      } catch (error) {
        if (error instanceof z.ZodError) {
          const fieldErrors ={};
          error.errors.forEach((err)=>{
            fieldErrors[err.path[0]]=err.message;
          })
          setErrors(fieldErrors);
        } else {
          console.log(error.response)
          const errorMsg=error.response?error.response.data.Msg||"An error occurred during signup."
          : "Network error. Please check your connection.";
          setApierror(errorMsg)
          // Handle API request error
          
        }
      }finally{
        setLoading(false)
      }
      
    };
  
    return (
      <Card className="max-w-sm mx-auto p-6 rounded-2xl shadow-xl bg-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <CardContent> 
        {apiErrors && (
          <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
            {apiErrors}
          </div>
        )}
        
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

            </div>
            <div>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
          <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <button onClick={() => navigate("/signin")} className="text-blue-600 hover:underline">
            Sign in
          </button>
          </p>
        </CardContent>
      </Card>
    );
  }
  