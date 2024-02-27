import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div className='min-h-fit w-full border-2 p-2 border-gray-500'>
            <div className=' md:float-right rounded-lg overflow-hidden m-5 w-fit'>
                <Image
                    src='https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?cs=srgb&dl=pexels-lukas-574070.jpg&fm=jpg&w=6144&h=4069&_gl=1*51sk5i*_ga*ODY2MjY3NTk1LjE3MDg1MTEwODQ.*_ga_8JE65Q40S6*MTcwODc3MjMzMC4yLjEuMTcwODc3MjYyMi4wLjAuMA..'
                    width={1920}
                    height={1080}
                    alt="hero image"
                    className='w-fit md:max-w-md md:float-right aspect-video'
                />
            </div>
            <h1 className='text-7xl my-5'>Title</h1>
            <div className='mb-5'>
                <span>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar et nunc at lobortis. Nunc ac ullamcorper augue, in varius nisi. Phasellus sit amet tristique nisl. Integer maximus tempus ex, vitae euismod diam fermentum ac. Morbi venenatis nisl quis lectus vehicula, quis pellentesque diam ornare. Nunc euismod dapibus elementum. Sed porta cursus malesuada. Mauris eget eleifend quam. Etiam ullamcorper sed neque nec auctor. Nunc justo nisl, volutpat at volutpat eget, dignissim ut velit. Proin consequat posuere nisl. Integer rhoncus erat et vestibulum sollicitudin.

                    Ut eu magna vestibulum, semper libero ut, volutpat sem. Donec diam quam, tempus vitae lorem quis, placerat cursus nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque ut turpis ut elit imperdiet egestas vel sed neque. Vivamus id nisi nisl. Aenean nec leo sem. Curabitur lobortis molestie quam, eu ullamcorper nisi eleifend nec. Sed scelerisque vel felis non sollicitudin. Morbi eu feugiat sapien.

                    Vivamus quis elit non risus dictum placerat. Morbi quis turpis libero. Sed in ante diam. Ut ut est dignissim, rhoncus ipsum at, porttitor ipsum. In leo ante, efficitur eget ultrices eget, sollicitudin ultricies nisl. Proin sagittis finibus diam. Aliquam cursus consectetur mi sollicitudin eleifend. Sed semper dui id augue ultricies, eget facilisis erat scelerisque. Pellentesque blandit dapibus urna in maximus. Nullam sollicitudin vehicula dui eget iaculis. Donec quis commodo tellus. Donec tempus vulputate mattis. Proin a sollicitudin sapien, vel tincidunt odio. Ut imperdiet, diam a viverra maximus, ligula elit consectetur arcu, id finibus tortor erat non nisl. Fusce diam arcu, sollicitudin eu quam a, ultrices vehicula felis.

                    Ut viverra sagittis nisl. Sed dictum blandit metus, viverra convallis massa varius sed. In hac habitasse platea dictumst. In ut mollis justo. Aliquam convallis, ante id pulvinar tincidunt, nulla odio suscipit nunc, eu scelerisque augue ex in augue. Sed commodo, lorem ut aliquet facilisis, orci est iaculis nisi, in dictum mauris nisl sit amet metus. Vivamus eget odio vitae elit hendrerit vulputate nec vitae lacus. Vivamus id eros vel odio vehicula elementum. Vivamus mattis massa quis tortor molestie, a blandit nisl feugiat. Pellentesque a orci varius, cursus purus convallis, blandit orci.

                    Duis eleifend urna lectus, vel rhoncus dolor dapibus sit amet. Vestibulum semper porttitor dui, sit amet ornare lorem tincidunt ut. Aenean a elementum erat, ac euismod justo. Suspendisse rhoncus leo ut urna lobortis sagittis. Curabitur tristique fermentum lectus eu maximus. Suspendisse eu ex malesuada, facilisis lacus quis, vehicula lorem. Phasellus odio mauris, tempor eget iaculis eget, sodales eget justo. Aenean non metus a nunc congue laoreet. Ut eros est, varius quis dictum a, viverra porttitor erat.

                    Morbi quis lacus vitae mauris varius porta. In eu lorem egestas, accumsan massa ac, elementum dui. In auctor purus id dictum vehicula. Vestibulum mauris nunc, vulputate a mauris ac, finibus interdum sem. Nulla sollicitudin nec tellus sed finibus. Curabitur convallis dolor in risus pretium egestas. Sed id quam ac tellus sodales pulvinar. Maecenas at quam iaculis, lacinia diam sed, posuere nisi. Donec elementum felis nisl, non rhoncus ipsum tincidunt vitae. Suspendisse in dapibus justo. Proin aliquam dolor.
                </span>
            </div>
            <div className='w-full flex justify-around'>
                <Link href='/portfolio' className='bg-green-500 text-white w-fit p-1 rounded-lg mb-5 self-center'>See My Works</Link>
            </div>
        </div>
    )
}
