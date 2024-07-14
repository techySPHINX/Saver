'use server'

import { currentUser } from "@clerk/nextjs/server"
import { db } from "./db"
import { redirect } from 'next/navigation'

import {
    // Agency,
    // Lane,
    // Plan,
    // Prisma,
    // Role,
    // SubAccount,
    // Tag,
    // Ticket,
    User,
  } from '@prisma/client'

export const getAuthUserDetails  =async () => {
    const user = await currentUser()
    if(!user){
        return 
    }

    const userData = await db.user.findUnique({
        where: {
          email: user.emailAddresses[0].emailAddress,
        },
        include: {
          Agency: {
            include: {
              SidebarOption: true,
              SubAccount: {
                include: {
                  SidebarOption: true,
                },
              },
            },
          },
          Permissions: true,
        },
      })
}

export const createTeamUser = async (agencyId: string, user: User) => {
    if (user.role === 'AGENCY_OWNER') return null
    const response = await db.user.create({ data: { ...user } })
    return response
  }

export const verifyAndAcceptInvitation = async () => {
    const user = await currentUser()
    if (!user) return redirect('/sign-in')
    const invitationExists = await db.invitation.findUnique({
      where: {
        email: user.emailAddresses[0].emailAddress,
        status: 'PENDING',
      },
    })

    
  if (invitationExists) {
    const userDetails = await createTeamUser(invitationExists.agencyId, {
      email: invitationExists.email,
      agencyId: invitationExists.agencyId,
      avatarUrl: user.imageUrl,
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      role: invitationExists.role,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

}

}