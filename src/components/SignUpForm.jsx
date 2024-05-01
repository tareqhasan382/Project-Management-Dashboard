"use client";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const SignUpForm = () => {
  const router = useRouter()
 const [loading,setLoading]=useState(false)
 const schema = yup
 .object()
 .shape({
   name: yup.string().required(),
   email: yup.string().email().required(),
   password: yup.string().min(4).max(10).required(),
 })
 .required();
 const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver:yupResolver(schema)})
  const onSubmit = async(data) => {
    try {
        setLoading(true)
           const result= await fetch('/api/signup',{
          method:"POST",
          headers:{"Content-Type":"application/json"},body:JSON.stringify(data)
        })
       if(result.ok){
        setLoading(false)
        toast.success("User created successfully")
        router.push('/sign-in')
       }else if(result.status===409){
        setLoading(false)
        toast.warning("User already exist")
       }else{
        setLoading(false)
        toast.error("User created failed")
    //    form.reset()
      }

    } catch (error) {
        setLoading(false)
        console.log(error)
    }
    
  }

  return (
    <div className=" flex flex-col items-center justify-center h-auto ">
      <div className=" my-10 ">
        <h1 className=" text-heading1-bold font-bold mb-4 text-center text-5xl ">Sign Up</h1>
        <form
         onSubmit={handleSubmit(onSubmit)}
          className=" py-10 rounded-lg shadow-lg flex flex-col bg-gray-200 px-6 md:px-10 "
        >
          <div className=" flex flex-col mb-4 ">
            <label className=" mb-2 ">Name</label>
            <input
              className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px]  outline-none focus:border-gray-600 text-black "
              type="text"
              id="name"
              name="name"
              {...register("name")}
            />
            {errors.name && <span className=" text-sm text-red-500 ">{errors?.name?.message}</span>}
            
          </div>
          <div className=" flex flex-col mb-4">
            <label className=" mb-2 ">Email</label>
            <input
              className=" p-2 border-gray-300 border-[1px] rounded-lg w-[300px]  outline-none focus:border-gray-600 text-black "
              type="email"
              id="email"
              name="email"
              {...register("email")}
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
              {...register("password")}
            />
               {errors.password && <span className=" text-sm text-red-500 ">{errors?.password?.message}</span>}
          </div>

          <button
          disabled={loading}
            type="submit"
            className=" text-heading4-bold p-2 border rounded-lg bg-blue-500 text-white border-gray-300 mt-2 mb-4 focus:border-gray-600"
          >
           {loading? "Loading...":"Submit"} 
          </button>
          <span className=" text-right ">
            Already have an account ?
            <Link href="/sign-in" className=" text-blue-600 underline pl-2  ">
              Log in
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;