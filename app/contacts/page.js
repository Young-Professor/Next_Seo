'use client'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { RiMapPin2Line } from "react-icons/ri";
import { useState } from "react";

const Contacts = () => {
  const [isloading, setisLoading]=useState(false);
  const [messageReceived, setMessageReceived]=useState(false);
  const [formMessages, setFormMessages] = useState({
    name: "",
    email: "",
    message: "",
    source:"Message from Campus closet ",
  });
  const handleInputChange = (event) => {
    setFormMessages({
      ...formMessages,
      [event.target.name]: event.target.value,
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true)
    
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <div className="form  rounded-lg shadow-lg p-6 md:w-96">
        <div className="flex items-center mb-4">
          <AiOutlineMail className="text-gray-500 text-xl mr-2" />
          <span className="font-semibold">Email:</span>
          <a href="mailto:jgathiru02@gmail.com" className="text-blue-500 ml-2">
          info@campuscloset.com
          </a>
        </div>
        <div className="flex items-center mb-4">
          <AiOutlinePhone className="text-gray-500 text-xl mr-2" />
          <span className="font-semibold">Phone:</span>
          <span className="ml-2">+254-729-144-533</span>
        </div>
        <div className="flex items-center mb-4">
          <RiMapPin2Line className="text-gray-500 text-xl mr-2" />
          <span className="font-semibold">Address:</span>
          <span className="ml-2">5912, Eldoret, Kenya</span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="font-semibold mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={formMessages.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="font-semibold mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter valid email address"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={formMessages.email}
                onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="font-semibold mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-gray-300 rounded-md px-3 py-2 w-full"
              value={formMessages.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            disabled={isloading}
          >
            {isloading ? 'Loading...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
// import React from 'react'

// function page() {
//   return (
//     <div>page</div>
//   )
// }

// export default page