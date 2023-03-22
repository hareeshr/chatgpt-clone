'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

//Login Page
function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
        <Image
            src="https://cdn.cdnlogo.com/logos/c/38/ChatGPT.svg"
            width={100}
            height={100}
            alt="logo"
        />
        <h1 className="text-gray-700 font-fold text-3xl p-2">ChatGPT Clone</h1>
        <button onClick={() => signIn("google")} className="text-white font-fold text-1xl animate-pulse">Sign In to use ChatGPT Clone</button>
    </div>
  )
}

export default Login