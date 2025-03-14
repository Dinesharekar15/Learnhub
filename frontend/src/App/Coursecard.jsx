import React from 'react'
import { Button } from '@/components/ui/button'
const Coursecard = ({  name, description, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72">
      {/* Course Image */}
      <img src="/public/4k.jpg" alt={name} className="w-full h-40 object-cover" />
      
      {/* Course Details */}
      <div className="p-4 text-center">
        {/* Course Name */}
        <h3 className="text-lg font-semibold mb-2">{name}</h3>

        {/* Start Date */}
        <p className="text-gray-600 text-sm"> {description}</p>

        {/* Price */}
        <p className="text-blue-500 font-bold text-lg mt-2">₹{price}</p>

        {/* View Details Button */}
        <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600">
          View Details
        </Button>
      </div>
    </div>
  )
}

export default Coursecard
