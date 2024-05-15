'use server'

import { Project, SocialMediaLink, User } from "@prisma/client";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { link } from "fs";

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
    redirect('/dashboard/mediaLinks')
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
    redirect('/dashboard/mediaLinks')
}

export async function addProject(project: Project) {
    try {
        console.log(project)
        await prisma.project.create({
            data: {
                title: project.title,
                imgSrc: project.imgSrc,
                tags: project.tags,
                markdown: project.markdown
            }
        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/', 'layout')
    //redirect('/')
}

export async function updateProject(project: Project) {
    try {
        console.log(project)
        await prisma.project.update({
            where: { id: project.id },
            data: {
                title: project.title,
                imgSrc: project.imgSrc,
                tags: project.tags,
                markdown: project.markdown
            }
        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/', 'layout')
    //redirect('/')
}

export async function deleteProject(projectId: string) {
    try {
        console.log(projectId)
        await prisma.project.delete({
            where: { id: projectId },
        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/', 'layout')
    redirect('/dashboard/projects')
}

export async function deleteMediaLink(linkId: string) {
    try {
        console.log(linkId)
        await prisma.socialMediaLink.delete({
            where: { id: linkId },
        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/', 'layout')
    redirect('/dashboard/mediaLinks')
}