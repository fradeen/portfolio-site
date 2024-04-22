import React from 'react'
import { customRemarkDirective } from '@/lib/remarkPlugIns'
import Markdown, { Components } from 'react-markdown'
import remarkDirective from 'remark-directive'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Image from 'next/image'
import ImgSlider from '@/components/imgSlider'
import remarkUnwrapImages from 'remark-unwrap-images'

const components: Partial<Components> = {
    pre(props) {
        return <>{props.children}</>
    },
    center(props) {
        return <div className='flex flex-col justify-center items-center'>{props.children}</div>
    },
    code(props) {
        const { children, className, node, ...rest } = props
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
            <SyntaxHighlighter
                language={match[1]}
                style={theme}
                showLineNumbers
                wrapLongLines
                customStyle={{ width: 'fit-content', margin: 'auto' }}
            >{String(children).replace(/\n$/, '')}</SyntaxHighlighter>
        ) : (
            <code {...rest} className={className}>
                {children}
            </code>
        )
    },
    img(props) {
        return props.src ? (
            <Image
                src={props.src}
                title={props.title}
                width={1280}
                height={720}
                alt={props.alt ? props.alt : 'no description provided'}
                className='max-w-screen-sm w-full rounded-lg aspect-video not-prose'
            />
        ) : null
    },
    //@ts-ignore
    'ImgSlider': ImgSlider
}

export default function RenderMarkdown({ markdown }: { markdown: string }) {
    return (
        <Markdown remarkPlugins={[remarkUnwrapImages, remarkDirective, customRemarkDirective]} components={components}
        >
            {markdown}
        </Markdown>
    )
}
