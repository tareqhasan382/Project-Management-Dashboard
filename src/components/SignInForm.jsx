"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const SignInFrom = () => {
  const router = useRouter()
  const [loading,setLoading]=useState(false)
  const schema = yup
 .object()
 .shape({
   email: yup.string().email().required(),
   password: yup.string().min(4).max(10).required(),
 })
 .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver:yupResolver(schema)});


  const onSubmit =async (data) => {
   
    try {
          setLoading(true)
        const result = await signIn( "credentials",{email:data.email, password:data.password, redirect:false})
        console.log("result:",result)
       setLoading(false)
       
         if(result.error){
          setLoading(false)
          toast.error("Invalid credentials")
         }
         if(result.ok){
          toast.success("User loggedIn successfully")
          setLoading(false)
          router.replace("/")
          
         }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  

  return (
    <div className=" flex flex-col items-center justify-center h-auto ">
      <div className=" my-10 ">
        <h1 className=" font-bold mb-4 text-center text-heading1-bold  text-5xl ">Sign In</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" py-10 rounded-lg shadow-lg flex flex-col bg-gray-200 px-6 md:px-10 "
        >
          <div className=" flex flex-col mb-4">
            <label className=" mb-2 ">Email</label>
            <input
              className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px]  outline-none focus:border-gray-600 text-black "
              type="email"
              id="email"
              name="email"
              {...register("email", { required: true })}
            />
             {errors.email && <span className=" text-sm text-red-500 ">{errors?.email?.message}</span>}
          </div>
          <div className=" flex flex-col mb-4">
            <label className=" mb-2 ">Password</label>
            <input
              className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px]  outline-none focus:border-gray-600 text-black "
              type="text"
              id="password"
              name="password"
              {...register("password", { required: true })}
            />
           {errors.password && <span className=" text-sm text-red-500 ">{errors?.password?.message}</span>}
          </div>

          <button
          disabled={loading}
            type="submit"
            className=" text-heading4-bold p-2 border rounded-lg bg-blue-500 text-white border-gray-300 mt-2 mb-4 focus:border-gray-600"
          >
            {loading?"Loading...":"Login"}
          </button>
          <span className=" text-right ">
          Don&rsquo;t have an account?
            <Link href="/sign-up" className=" underline text-blue-600 pl-2 ">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignInFrom;

// SignInForm