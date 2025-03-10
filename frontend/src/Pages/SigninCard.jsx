import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { backend_url } from "config.js";


const SigninCard = () => {
    const [form, setForm] = useState({ email: "", password: "" }); // Removed name field
    const [loading, setLoading] = useState(false);
    const [apiError, setApiError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const response = await axios.post(`http://localhost:3000/api/user/signup`, form);
            localStorage.setItem("token", response.data.token);
            console.log("Signin successful:", response.data);
            navigate("/"); // Redirect to home page
        } catch (error) {
            console.error("Signin error:", error.response); // Log error for debugging
            
            const errorMsg = error.response?.data?.msg || "An error occurred during signin.";
            setApiError(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="max-w-sm mx-auto p-6 rounded-2xl shadow-xl bg-white">
            <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>
            <CardContent>
                {apiError && (
                    <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                        {apiError}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
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
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? "Signing In..." : "Sign In"}
                    </Button>
                </form>
                <p className="text-center text-sm mt-4">
                    Don't have an account?{" "}
                    <button onClick={() => navigate("/")} className="text-blue-600 hover:underline">
                        Sign Up
                    </button>
                </p>
            </CardContent>
        </Card>
    );
};

export default SigninCard;
