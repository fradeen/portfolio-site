'use client'
import React from 'react'
import { useThemeContext } from '@/contexts/themeContext';
import Image from 'next/image';
import Markdown, { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import remarkUnwrapImages from 'remark-unwrap-images'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark as darkTheme, oneLight as lightTheme } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import cloudinaryLoader from '@/lib/loader';
export default function RenderMarkdown({ markdown }: { markdown: string }) {

    const { theme } = useThemeContext()
    const components: Partial<Components> = {
        code(props) {
            const { children, className } = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
                <div className='flex flex-col'>
                    <SyntaxHighlighter
                        className='w-fit self-center'
                        wrapLongLines
                        PreTag="div"
                        language={match[1]}
                        style={theme === 'dark' ? darkTheme : lightTheme}
                    >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
                </div>
            ) : (
                <div className='flex flex-col'>
                    <code className={`${className} w-fit self-center`}>
                        {children}
                    </code>
                </div>
            )
        },
        img(props) {
            return props.src ? (
                <div className={` ${props.title && props.title?.search('@float') != -1 ? 'md:float-right' : ''} rounded-lg overflow-hidden m-5 md:my-0 w-fit`}>
                    <Image
                        src={props.src}
                        title={props.title?.replace('@float', '')}
                        width={1920}
                        height={1080}
                        loader={cloudinaryLoader}
                        alt={props.alt ? props.alt : 'no description provided'}
                        className='md:max-w-md aspect-video'
                    />
                </div>
            ) : null
        },
        p(props) {
            return (
                <div>{props.children}</div>
            )
        },
        a(props) {
            return (
                <a
                    href={props.href}
                    className='hover:text-green-500 text-white w-fit p-1 underline hover:no-underline'
                >{props.children}</a>
            )
        }
    }
    return (
        <div className='grow min-h-fit flex flex-col border-2 border-gray-500' data-color-mode={theme} >
            <Markdown
                className='break-words'
                remarkPlugins={[[remarkGfm, { singleTilde: false }], [remarkUnwrapImages]]}
                rehypePlugins={[rehypeRaw]}
                components={components}
            >{markdown}</Markdown>
        </div>
    )
}
