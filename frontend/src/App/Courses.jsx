import React from 'react'
import Coursecard from './Coursecard';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Courses = () => {

    
      // const [loading,setLoading]=useState(true);
      // const [error,setError]=useState(null)
      // const [courses,setCourses]=useState([]);
      // useEffect(()=>{
      //   const getCourses=async ()=>{
      //     try {
      //       const response=await axios.get("http://localhost:3000/api/courses/preview")
      //       // console.log(response.data.Courses);
      //       setCourses(response.data.Courses)
      //     } catch (error) {
      //       setError(error)
      //     }finally{
      //       setLoading(false);
      //     }
      //   }
      //   getCourses();
      // },[])
      // if(loading) return(<>Loading...</>)
      // if(error) return (<>{error}</>)
      const courses = [
        {
          title: 'Introduction to React',
          description: 'Learn the basics of React and build your first application.',
          price: 49.99,
        },
        {
          title: 'Advanced JavaScript',
          description: 'Master advanced JavaScript concepts and techniques.',
          price: 59.99,
        },
        {
          title: 'Node.js for Beginners',
          description: 'Get started with Node.js and build scalable backend applications.',
          price: 69.99,
        },
        {
          title: 'Full-Stack Development',
          description: 'Learn full-stack development with React and Node.js.',
          price: 99.99,
        },
        {
          title: 'Python for Data Science',
          description: 'Explore Python and its applications in data science.',
          price: 79.99,
        },
        {
          title: 'UI/UX Design Fundamentals',
          description: 'Understand the principles of UI/UX design and create stunning interfaces.',
          price: 49.99,
        },
      ];
    
      
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <Coursecard
            key={index}
            
            name={course.title}
            description={course.description}
            price={course.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Courses
