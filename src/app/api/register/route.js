import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { dbConnect } from "@/lib/connectDb"
import { createUser } from "@/queries/user"
import { User } from "@/model/user-model"

export const  POST = async (request)=>{
    const {name, email, password} = await request.json()

    const hasedPassword = await bcrypt.hash(password, 8)

    await dbConnect()

    const newUser = {
        name,
        email,
        password: hasedPassword
    }

   try {

    const existUser = await User.findOne({email})
    if(existUser){
        return NextResponse.json("User already exist")
    }
    await createUser(newUser)
    return new NextResponse("User has been  crated", {
        status: 201, newUser
    })
   } catch (error) {
    return new NextResponse(error.message, {
        status: 500
    })
   }


   
}