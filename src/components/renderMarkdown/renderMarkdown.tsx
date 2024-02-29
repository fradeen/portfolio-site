'use client'
import React from 'react'
import { useThemeContext } from '@/contexts/themeContext';
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark as darkTheme, oneLight as lightTheme } from 'react-syntax-highlighter/dist/cjs/styles/prism'
export default function RenderMarkdown() {
    const value = `
<div class='text-5xl'>test</div>

~~continuing with the article~~
 Just a link: www.nasa.gov.
[Link text](https://google.com)
hello 123
![alt text for screen readers](https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?cs=srgb&dl=pexels-lukas-574070.jpg&fm=jpg&w=6144&h=4069&_gl=1*51sk5i*_ga*ODY2MjY3NTk1LjE3MDg1MTEwODQ.*_ga_8JE65Q40S6*MTcwODc3MjMzMC4yLjEuMTcwODc3MjYyMi4wLjAuMA.. "Text to show on mouseover" )

<img src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?cs=srgb&dl=pexels-lukas-574070.jpg&fm=jpg&w=6144&h=4069&_gl=1*51sk5i*_ga*ODY2MjY3NTk1LjE3MDg1MTEwODQ.*_ga_8JE65Q40S6*MTcwODc3MjMzMC4yLjEuMTcwODc3MjYyMi4wLjAuMA" width="40%" />

\`\`\`c
#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!");
   return 0;
}
\`\`\`
<div class='text-2xl'>test</div>

<Image src="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?cs=srgb&dl=pexels-lukas-574070.jpg&fm=jpg&w=6144&h=4069&_gl=1*51sk5i*_ga*ODY2MjY3NTk1LjE3MDg1MTEwODQ.*_ga_8JE65Q40S6*MTcwODc3MjMzMC4yLjEuMTcwODc3MjYyMi4wLjAuMA" width=500 height=500 />

<p align="center">
  <img src="https://github.com/waldyr/Sublime-Installer/blob/master/sublime_text.png?raw=true" alt="Sublime's custom image"/>
</p>



## Table

| a | b  |  c |  d  |
| - | - | - | - |




# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done
`
    const test = '# Hi, *Pluto*!'
    const { theme } = useThemeContext()
    return (
        <div className='grow min-h-fit flex flex-col border-2 border-gray-500' data-color-mode={theme} >
            {/* <MDEditor
                value={value}
                preview='preview'
                hideToolbar
                //height="100%"
                visibleDragbar={false}
                className='grow'
            //height='100%'
            /> */}
            <Markdown
                remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
                rehypePlugins={[rehypeRaw]}
                components={{
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
                    }
                }}
            >{value}</Markdown>
        </div>
    )
}
