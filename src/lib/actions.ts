'use server'

import { Project, SocialMediaLink, User } from "@prisma/client";
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

export async function addMediaLink(link: SocialMediaLink) {
    try {
        await prisma.socialMediaLink.create({
            data: {
                title: link.title,
                url: link.url,
                imgSrc: link.imgSrc,
                accentColor: link.accentColor,
                message: link.message
            }
        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/', 'layout')
    //redirect('/')
}

export async function updateMediaLink(link: SocialMediaLink) {
    try {
        let result = await prisma.socialMediaLink.update({
            where: {
                id: link.id
            },
            data: {
                title: link.title,
                url: link.url,
                imgSrc: link.imgSrc,
                accentColor: link.accentColor,
                message: link.message
            }

        })
        console.log(result)
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/', 'layout')
    //redirect('/')
}

export async function addProject(project: Project) {
    try {
        await prisma.project.create({
            data: {
                title: project.title,
                imgSrc: project.imgSrc,
                markdown: project.markdown
            }
        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/', 'layout')
    //redirect('/')
}