"use server"

import { signIn, signOut } from "@/auth";



export async function doCredentialLogin(formData) {
    console.log("formData", formData);

    try {
      const response = await signIn("credentials", {
        email: formData.get('email'),
        password: formData.get('password'),
        redirect: false
      })
      return response;
    } catch (err) {
       console.log(err)
    }
}

export async function Logout() {
    await signOut({redirectTo: "/login"})
}