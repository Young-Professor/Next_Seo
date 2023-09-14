"use client"
import React, { useState } from 'react';
import Link from "next/link"

const Register = () => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // New state variable for loading state
  const [verificationRequest, setVerificationRequest] = useState(false);
  // const [sendingVerification, setVerificationRequest] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirmPassword, setShowconfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: ''
  });

  // Handle checkbox change for accepting terms and conditions
  const handleCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  // Toggle password visibility for main password input field
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // Toggle password visibility for confirm password input field
  const toggleShowconfirmPassword = () => {
    setShowconfirmPassword((prevShowconfirmPassword) => !prevShowconfirmPassword);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords Must be the same", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
      });
      setFormData({
        ...formData,
        password: '',
        confirmPassword: ''
      });
      return;
    }

   
  };

  // Handle input change for form fields
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <section className="bg-gray-50 min-h-screen pt-6">
      {verificationRequest ? (
        <div className="auth-forms flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="form w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-2 xl:space-y-3 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Email Verification
              </h1>
              <p className="text-gray-600 mb-4">
                Thank you for registering! An email has been sent to your email address for verification.
                Please check your email and click on the verification link to complete the registration process.
              </p>
              <p className="text-gray-600">
                If you do not receive the email within a few minutes, please check your spam folder.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="auth-forms flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="form w-full bg-white rounded-lg shadow dark:border md:mt-0  sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-2 xl:space-y-3  sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form className="space-y-1 xl:space-y-3" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-blue-500"
                    required
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div
                    className='mt-[-27px] ml-[90%] mb-[25px]'
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? "hide" : "👁‍🗨"}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm password
                  </label>
                  <input
                    type={showconfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-blue-500"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <div
                    className='mt-[-27px] ml-[90%] mb-[25px]'
                    onClick={toggleShowconfirmPassword}
                  >
                    {showPassword ? "hide" : "👁‍🗨"}
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded"
                      required
                      onChange={handleCheckboxChange}
                      checked={termsAccepted}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-gray-700">
                      I accept the{' '}
                      <Link
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="/termsofuse"
                      >
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className={`w-full text-gray-900 bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                    !termsAccepted ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={!termsAccepted}
                >
                  {loading ? 'Loading...' : 'Create an account'}
                </button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account?{' '}
                  <Link
                    href="/Login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Register;
