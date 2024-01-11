import React, { useState } from "react";
import Background from '../assests/data/Background.jpg';
import Logo from '../assests/data/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const navigate = useNavigate();

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Add your authentication logic here

    //     // Assuming authentication is successful, navigate to the Home page
    //     navigate('/Home');
    // };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="w-full h-screen bg-zinc-900/90">

                <div className="relative">
                    <img
                        className="w-screen h-screen object-cover mix-blend-overlay"
                        src={Background}
                        alt=""
                        style={{
                            backgroundColor: "rgb(57, 54, 70)"
                        }}
                    />
                </div>
                <div className="absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <img className="flex items-center w-32 h-10 mb-4 ml-28" src={Logo} alt="logo" />
                    <div className="w-screen bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 transform hover:scale-105 transition-transform duration-300">
                        <div className="p-4 space-y-2 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            {/* <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}> */}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input type="email" name="email" id="email" autoComplete="off" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" autoComplete="new-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-blue-700 hover:underline dark:text-blue-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign in</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                                </p>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
