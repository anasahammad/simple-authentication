"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupForm = () => {
   const router = useRouter()

    async function handleSubmit(e){
        e.preventDefault()

        try {
            const formData = new FormData(e.currentTarget)
            const name = formData.get('name')
            const email = formData.get('email')
            const password = formData.get('password')

            const response = await fetch(`/api/register`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    name, 
                    email, 
                    password
                })
            })

            response.status === 201 && router.push("/")
            console.log(name, email, password)
        } catch (error) {
            console.log(error.message)
        }
       
    }
    return (
      <div className="bg-white shadow-md rounded-lg w-[400px] p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block  text-sm font-bold mb-2">
              Full Name
            </label>
            <input
            required
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md  "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block  text-sm font-bold mb-2">
              Email
            </label>
            <input
            required
              type="email"
              id="email"
               name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md "
            />
          </div>
         

          <div className="mb-4">
            <label htmlFor="password" className="block  text-sm font-bold mb-2">
              Password
            </label>
            <input
            required
             
              name="password"
              type="password"
              id="password"
              placeholder="Enter a password"
              className="w-full px-4 py-2 border rounded-md "
            />

            
          </div>

          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md  "
          >
            Sign Up
          </button>
        </form>

        <p className="my-3">Already have an account? {} 
            <Link className="text-red-400" href="/login">Login</Link>
        </p>
      </div>
    );
  };
  
  export default SignupForm;
  