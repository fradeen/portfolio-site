'use server'

import { User } from "@prisma/client";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateUserInfo(user: User) {
    try {

        const userId = await prisma.user.findFirst({ select: { id: true } })
        if (userId)
            await prisma.user.update({
                where: {
                    id: userId.id
                },
                data: {
                    name: user.name,
                    home: user.home,
                    avatarSrc: user.avatarSrc,
                    title: user.title,
                    tags: user.tags,
                    intro: user.intro,
                    about: user.about
                }
            })
        else
            await prisma.user.create({
                data: {
                    name: user.name,
                    home: user.home,
                    avatarSrc: user.avatarSrc,
                    title: user.title,
                    tags: user.tags,
                    intro: user.intro,
                    about: user.about
                }
            })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/', 'layout')
    redirect('/')
}