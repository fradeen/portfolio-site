'use server'

import { Project, SocialMediaLink, User } from "@prisma/client";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { projectSchema, socialMediaLinkSchema, userSchema } from "./zodSchemas";

export async function updateUserInfo(user: User) {
    try {

        const userId = await prisma.user.findFirst({ select: { id: true } })
        const validatedUser = userSchema.safeParse(user)
        if (!validatedUser.success) {
            return validatedUser.error.flatten()
        }
        if (userId)
            await prisma.user.update({
                where: {
                    id: userId.id
                },
                data: {
                    name: validatedUser.data.name,
                    home: validatedUser.data.home,
                    avatarSrc: validatedUser.data.avatarSrc,
                    title: validatedUser.data.title,
                    tags: validatedUser.data.tags,
                    intro: validatedUser.data.intro,
                    about: validatedUser.data.about
                }
            })
        else
            await prisma.user.create({
                data: {
                    name: validatedUser.data.name,
                    home: validatedUser.data.home,
                    avatarSrc: validatedUser.data.avatarSrc,
                    title: validatedUser.data.title,
                    tags: validatedUser.data.tags,
                    intro: validatedUser.data.intro,
                    about: validatedUser.data.about
                }
            })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/')
    revalidatePath('/about')
    redirect('/dashboard/user')
}

export async function addMediaLink(link: SocialMediaLink) {
    try {
        const validatedLink = socialMediaLinkSchema.safeParse(link)
        if (!validatedLink.success) {
            return validatedLink.error.flatten()
        }
        await prisma.socialMediaLink.create({
            data: {
                title: validatedLink.data.title,
                url: validatedLink.data.url,
                imgSrc: validatedLink.data.imgSrc,
                accentColor: validatedLink.data.accentColor,
                message: validatedLink.data.message
            }
        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/')
    revalidatePath('/contact')
    revalidatePath('/about')
    redirect('/dashboard/mediaLinks')
}

export async function updateMediaLink(link: SocialMediaLink) {
    try {
        const validatedLink = socialMediaLinkSchema.safeParse(link)
        if (!validatedLink.success) {
            return validatedLink.error.flatten()
        }
        await prisma.socialMediaLink.update({
            where: {
                id: validatedLink.data.id
            },
            data: {
                title: validatedLink.data.title,
                url: validatedLink.data.url,
                imgSrc: validatedLink.data.imgSrc,
                accentColor: validatedLink.data.accentColor,
                message: validatedLink.data.message
            }

        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/')
    revalidatePath('/contact')
    revalidatePath('/about')
    redirect('/dashboard/mediaLinks')
}

export async function deleteMediaLink(linkId: string) {
    try {
        await prisma.socialMediaLink.delete({
            where: { id: linkId },
        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/')
    revalidatePath('/contact')
    revalidatePath('/about')
    redirect('/dashboard/mediaLinks')

}

export async function addProject(project: Project) {
    const validatedProject = projectSchema.safeParse(project)
    if (!validatedProject.success) {
        return validatedProject.error.flatten()
    }
    try {
        await prisma.project.create({
            data: {
                title: validatedProject.data.title,
                imgSrc: validatedProject.data.imgSrc,
                tags: validatedProject.data.tags,
                markdown: validatedProject.data.markdown
            }
        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/projects', 'layout')
    revalidatePath('/dashboard/projects', 'layout')
    redirect('/dashboard/projects')
}

export async function updateProject(project: Project) {
    const validatedProject = projectSchema.safeParse(project)
    if (!validatedProject.success) {
        return validatedProject.error.flatten()
    }
    try {
        await prisma.project.update({
            where: { id: validatedProject.data.id },
            data: {
                title: validatedProject.data.title,
                imgSrc: validatedProject.data.imgSrc,
                tags: validatedProject.data.tags,
                markdown: validatedProject.data.markdown
            }
        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/projects')
    revalidatePath(`/projects/${project.id}`)
    revalidatePath('/dashboard/projects', 'layout')
    redirect('/dashboard/projects')
}

export async function deleteProject(projectId: string) {
    try {
        await prisma.project.delete({
            where: { id: projectId },
        })
    } catch (err) {
        console.log(err)
    }
    revalidatePath('/projects', 'layout')
    revalidatePath('/dashboard/projects', 'layout')
    redirect('/dashboard/projects')
}
