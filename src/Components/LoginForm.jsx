"use client"
import { doCredentialLogin } from "@/app/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";


const LoginForm = () => {
    const router = useRouter()
    
    async function handleSubmit (e){
        e.preventDefault()

        try {
          const formData = new FormData(e.currentTarget)
          const response = await doCredentialLogin(formData)
          if (response.error) {
            console.error(response.error);
            
        } else {
            router.push("/");
        }
        } catch (error) {
          console.log(error);
        }
    }
    return (
        <div className="bg-white shadow-md rounded-lg w-[400px] p-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          
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
           Login
          </button>
        </form>

        <p className="my-3">Don't have any account? {} 
            <Link className="text-red-400" href="/signup">Sign Up</Link>
        </p>
      </div>
    );
};

export default LoginForm;