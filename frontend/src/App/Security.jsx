import React from 'react'

const Security = () => {
  return (
    <div className="mt-4">
        <div className="text-start flex flex-col mt-3 gap-2">
          <label className="font-semibold">Current Password*</label>
          <input type="password" placeholder="Enter current password" className="rounded-3xl p-3 bg-gray-200 outline-none" />
        </div>
        <div className="text-start flex flex-col mt-3 gap-2">
          <label className="font-semibold">New Password*</label>
          <input type="password" placeholder="Enter new password" className="rounded-3xl p-3 bg-gray-200 outline-none" />
        </div>
        <div className="text-start flex flex-col mt-3 gap-2">
          <label className="font-semibold">Confirm New Password*</label>
          <input type="password" placeholder="Confirm new password" className="rounded-3xl p-3 bg-gray-200 outline-none" />
        </div>
        <div className="mt-10">
          <button className="bg-blue-500 py-2 text-white font-semibold px-4 rounded-3xl w-full hover:bg-red-600">
            Change Password
          </button>
        </div>
      </div>
  )
}

export default Security
