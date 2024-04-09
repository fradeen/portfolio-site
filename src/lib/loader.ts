'use client'
import { ImageLoaderProps } from "next/image"

export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
    const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    return `https://res.cloudinary.com/dozwseg65/image/upload/${params.join(',')}${src}`
}