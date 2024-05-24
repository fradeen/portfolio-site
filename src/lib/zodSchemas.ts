import { z } from 'zod'

export const userSchema = z.object({
    title: z.string().min(1).max(50),
    name: z.string().min(1).max(50),
    avatarSrc: z.string().startsWith('/').min(2),
    home: z.string().min(1),
    intro: z.string().refine(string => {
        const wordCount = string.split(' ').length
        return wordCount >= 5 && wordCount <= 100
    }, { message: 'Intro should have word count between 5 and 100.' }),
    about: z.string().refine(string => {
        const wordCount = string.split(' ').length
        return wordCount >= 5 && wordCount <= 1000
    }, { message: 'About should have word count between 5 and 1000.' }),
    tags: z.array(z.string().min(1).max(100)).min(0)
})

export const socialMediaLinkSchema = z.object({
    id: z.optional(z.string().max(50).min(5)),
    title: z.string().min(1).max(50),
    url: z.string().url(),
    imgSrc: z.string().startsWith('/').min(2),
    accentColor: z.string().min(3).max(15),
    message: z.string().refine(string => {
        const wordCount = string.split(' ').length
        return wordCount >= 5 && wordCount <= 30
    }, { message: 'Message should have word count between 5 and 30.' }),
})

export type mediaLinkType = z.infer<typeof socialMediaLinkSchema>

export const projectSchema = z.object({
    id: z.optional(z.string().max(50).min(5)),
    title: z.string().min(1).max(50),
    imgSrc: z.string().startsWith('/').min(2),
    markdown: z.string().refine(string => {
        const wordCount = string.split(' ').length
        return wordCount >= 5 && wordCount <= 1000
    }, { message: 'Markdown should have word count between 5 and 1000.' }),
    tags: z.array(z.string().min(1).max(100)).min(0)
})

export type projectType = z.infer<typeof projectSchema>