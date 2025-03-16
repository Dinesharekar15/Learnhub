import React from 'react'
import Coursecard from '../App/Coursecard';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Purchases = () => {
    // const [loading,setLoading]=useState(true);
    // const [error,setError]=useState(null)
    // const [courses,setCourses]=useState([]);
    //   useEffect(()=>{
    //     const getCourses=async ()=>{
    //       try {
    //         const response=await axios.get("http://localhost:3000/api/user/mycourse")
    //         console.log(response)
    //         // console.log(response.data.Courses);
    //         setCourses(response.data.Courses)
    //       } catch (error) {
    //         setError(error)
    //       }finally{
    //         setLoading(false);
    //       }
    //     }
    //     getCourses();
    //   },[])
    //   if(loading) return(<>Loading...</>)
    //   if(error) return (<>{error}</>)
    const courses=[
        // {
        //     imgurl:"#",
        //     name:"codinghub",
        //     description:"learn coding",
        //     price:40
        // },
        // {
        //     imgurl:"#",
        //     name:"codinghub",
        //     description:"learn coding",
        //     price:40
        // },
        // {
        //     imgurl:"#",
        //     name:"codinghub",
        //     description:"learn coding",
        //     price:40
        // }
    ]
  return (
    <>
    
    <div className='max-w-7xl mx-auto p-6'>
      <h2 className='text-2xl font-bold  mb-6'>My Purchases</h2>
      {courses.length==0?(
        <div className='bg-blue-100 rounded-md  h-16'>
            <p className="text-gray-500 text-lg ">No purchases yet.</p>
        </div>
      ):(

      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
      {courses.map((course, index) => (
          <Coursecard
            key={index}
            imagurl={course.imgurl}
            name={course.title}
            description={course.description}
            price={course.price}
          />
        ))}
      </div>
      )}
    </div>
    </>
  )
}

export default Purchases
