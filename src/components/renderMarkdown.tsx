import React from 'react'
import { customRemarkDirective } from '@/lib/remarkPlugIns'
import Markdown, { Components } from 'react-markdown'
import remarkDirective from 'remark-directive'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism'
import Image from 'next/image'
import remarkUnwrapImages from 'remark-unwrap-images'
import Carousel from '@/components/carousel'

const components: Partial<Components> = {
    pre(props) {
        return <>{props.children}</>
    },
    center(props) {
        return <div className={`${props.className} mx-auto flex flex-col justify-center items-center`}>{props.children}</div>
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
                className='aspect-video object-scale-down'
            />
        ) : null
    },
    //@ts-ignore
    'Carousel': Carousel
}

export default function RenderMarkdown({ markdown }: { markdown: string }) {
    return (
        <Markdown remarkPlugins={[remarkUnwrapImages, remarkDirective, customRemarkDirective]} components={components}
        >
            {markdown}
        </Markdown>
    )
}
