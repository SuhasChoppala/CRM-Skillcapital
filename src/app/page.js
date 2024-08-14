'use client';
import * as React from 'react';
// import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

export default function LoginPage() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');


  const handleLogin = async () => {
    let hasError = false;
    if (!hasError) {
      try {
        const response = await axios.post(`http://34.203.244.72:8080/login`, {
          "username": username,
          "password": password
        });
        if (response.status === 200) {
          router.push('/dashboard')
          console.log(response.data);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error('Error response:', error.response);
          setLoginError('Invalid username or password');
        } else {
          setLoginError('An error occurred. Please try again.');
        }
      }
    }
  };

  // loginUser function
  const loginUser = (data) => {
    handleLogin();
  };

  return (
    <div className="mobiles:px-6 min-h-screen align-baseline flex sm:flex-row">
      <div className="flex flex-col justify-center w-full sm:w-2/4 items-center">
        <div className="flex justify-center">
          <img
            src="https://crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskillcapital.41121682.png&w=640&q=75"
            width={400}
            className="text-center"
          ></img>
        </div>
        <div className="mobiles:mt-8 mt-10 xl:mt-8 bg-white border border-grey-300 p-6 rounded-lg shadow-lg w-full xl:w-[32rem] md:w-full">
          <form noValidate onSubmit={handleSubmit(loginUser)}>
            <div>
              <label className="block text-sm font-normal leading-6 text-gray-900">
                User Name
              </label>
              <input
                {...register('email', { required: true })}
                onChange={(e) => setUsername(e.target.value)}
                aria-label="username"
                className="w-full py-2.5 px-2 text-base font-normal leading-relaxed border rounded-lg bg-white text-gray-900 border-gray-200 shadow-sm focus:border-blue-400  focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors duration-300 hover:border-blue-400"
              />
              {errors.email?.type === 'required' && (
                <p className="text-sm text-red-600 mt-1">
                  Please enter username
                </p>
              )}
            </div>
            <div className="mt-5">
              <label className="block text-sm font-normal leading-6 text-gray-900">
                Password
              </label>
              <input
                {...register('password', { required: true })}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="password"
                className="w-full py-2.5 px-2 text-base font-normal leading-relaxed border rounded-lg bg-white text-gray-900 border-gray-200 shadow-sm focus:border-blue-400  focus:ring-2 focus:ring-blue-200 focus:outline-none transition-colors duration-300 hover:border-blue-400"
              />
              {errors.password?.type === 'required' && (
                <p className="text-sm text-red-600 mt-1">
                  Please enter password
                </p>
              )}
            </div>
            <div className="mt-9">
              <button
                type="submit"
                onClick={handleLogin}
                className="flex w-full justify-center rounded-lg bg-gradient-to-r from-orange-300 to-pink-500 p-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
            <div className="flex gap-2 mt-8">
              <Checkbox {...label} className="h-5 w-5" />
              <span className="font-normal text-sm">Remember me</span>
            </div>
            <div className="text-center mt-24 text-gray-500 text-sm font-medium block">
              <h1>©2024, All rights reserved</h1>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden sm:flex w-2/4 flex-col justify-between">
        <div className="text-center px-14 2xl:px-24 mt-10">
          <h1 className="text-[#042D60] font-bold leading-[normal] text-3xl xl:text-[2rem] lg:text-[2rem]">
            Seamlessly manage all learner data in a unified platform.
          </h1>
          <p className="text-[#042D60] font-normal text-lg">
            Centralize customer data effortlessly. Streamline communication,
            sales, and support for seamless growth.
          </p>
        </div>
        <div>
          <img
            src="https://crm.skill-capital.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpinkcrm.d54abf0d.png&w=1920&q=75"
            className="h-full w-full"
          ></img>
        </div>
      </div>
    </div>
  );
}
