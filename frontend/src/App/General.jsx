import React from 'react'

const General = () => {
  return (
    <div className=" mt-4">
          <div className="text-start flex flex-col mt-3 gap-2">
            <label htmlFor="" className="font-semibold">
              Full name*
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className=" rounded-3xl p-3 bg-gray-300 outline-none"
            />
          </div>
          <div className="text-start flex flex-col mt-3 gap-2">
            <label htmlFor="" className="font-semibold">
              Full name*
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className=" rounded-3xl p-3 bg-gray-300 outline-none"
            />
          </div>
          <div className="text-start flex flex-col mt-3 gap-2">
            <label htmlFor="" className="font-semibold">
              Full name*
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className=" rounded-3xl p-3 bg-gray-300 outline-none"
            />
          </div>
          <div className="mt-10">
            <button className="bg-blue-500 py-2 w-full text-white font-semibold px-4 rounded-3xl">
              Save Profile
            </button>
          </div>
        </div>
  )
}

export default General
