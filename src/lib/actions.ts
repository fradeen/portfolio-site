'use server'

import { User } from "@prisma/client";
import prisma from "./db";
import { revalidatePath } from "next/cache";

export async function updateUserInfo(user: User) {
    try {

        let batchResult = await prisma.user.updateMany({
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
        if (batchResult.count === 0)
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
        revalidatePath('/', 'layout')

    } catch (err) {

    }
}