import { auth } from "@/auth";
import { redirect } from "next/navigation";


export default async function Home() {
  
  const session = await auth()
  if (!session?.user) redirect("/login");
  return (
    <div className="flex flex-col space-y-4 text-center items-center my-6">
     <h1 className=" text-3xl font-bold text-purple-500">Welcome {session?.user.name}</h1>

     <p>To logout click the photo icon and select signout</p>
      
    </div>
  );
}
