'use server'

import { getAuthUserDetails } from "@/lib/Queries"
import { currentUser } from "@clerk/nextjs/server"
// import { Plan } from '@prisma/client'
import { redirect } from 'next/navigation'

const page = async () => {
  const authUser = await currentUser()
  if (!authUser) return redirect('/sign-in')


  //get details of user

  const user = await getAuthUserDetails()

  return (
    <div className="flex justify-center items-center mt-4">
    <div className="max-w-[850px] border-[1px] p-4 rounded-xl">
      <h1 className="text-4xl"> Create An Agency</h1>
      {/* <AgencyDetails
        data={{ companyEmail: authUser?.emailAddresses[0].emailAddress }}
      /> */}
    </div>
  </div>
)
  
}

export default page