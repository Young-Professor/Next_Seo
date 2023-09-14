// "use client"
// import React, { useState } from 'react';
// import Link from "next/link"
// import { useRouter } from 'next/router'
// const Login = () => {
//   const router = useRouter()
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [loading, setLoading] = useState(false); // New state variable for loading state
//   const [invalidLogin, setinvalidLogin]=useState(false)
//   const [showPassword, setShowPassword] = useState(false);
//   const [verifyEmail, setVerifyEmail] = useState(false);
//   const [loginError, setLoginError]=useState('')


//     // Toggle password visibility for main password input field
//   const toggleShowPassword = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();

    
//   };

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   return (
//     <section className="bg-gray-50 min-h-screen pt-6">
//       <div className="auth-forms flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
//         <div className="form w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//             <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
//               Login into your account
//             </h1>
//             <form className="space-y-4 md:space-y-6 h-auto" onSubmit={handleSubmit}>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Your email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
//                   placeholder="name@company.com"
//                   required
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div>
//                 <div className='flex justify-between'>
//                 <label
//                   htmlFor="password"
//                   className="block mb-2 text-sm font-medium text-gray-900"
//                 >
//                   Password
//                 </label>
//                 <p
//                   className="block mb-2 text-sm font-medium text-blue-600 cursor-pointer"
//                   onClick={()=>router.push('/forgot')}
//                 >
//                   forgot password?
//                 </p>
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   id="password"
//                   placeholder="••••••••"
//                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-blue-500"
//                   required
//                   value={formData.password}
//                   onChange={handleChange}
//                 />
//                 {/* show or hide password */}
//               <div
//                   className='mt-[-27px]  ml-[90%]'
//                     onClick={toggleShowPassword}
//                   >
//                     {showPassword  ? "Hide" : "👁"}
//               </div>
//               </div>
//               <button
//                 type="submit"
//                 className={`w-full text-gray-900 bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
//                   loading ? 'opacity-50 cursor-not-allowed' : ''
//                 }`}
//                 >
//                   {/* Change button text to "Loading..." when loading is true */}
//                 {loading ? 'Loading...' : 'Login'} 
//               </button>
//               <p className="text-sm font-light text-gray-500 dark:text-gray-900">
//                 Dont have an account?
//                 <Link
//                   href="/register"
//                   className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                 >
//                   Register here
//                 </Link>
//               </p>
//                {invalidLogin &&  <p className='text-red-600 '>{loginError}</p>}
//                {verifyEmail &&  <p className='text-red-600 '>Your Email is not Verified, please verify by the link sent to your email before login.</p>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Login;

import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
