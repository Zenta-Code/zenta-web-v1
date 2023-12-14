
import Image from 'next/image'
import Link from 'next/link'
import urlFor from '../lib/urlFor'
import CopyCode from './CopyCode'

export const RichTextComponents = {

    types: {
        image: ({ value }: any) => {

            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image
                        className='object-contain'
                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        fill
                    />
                </div>

            );
        },
        code: ({ value }: any) => {
            return (
                <div className='px-4 py-2 rounded-xl'>
                    <CopyCode value={value} ></CopyCode>
                </div>

            );
        }

    },
    list: {
        bullet: ({ children }: any) => (
            <ul className='list-disc space-y-2 rounded-xl p-2 mx-10 my-2'>
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ol className='list-decimal space-y-2 rounded-xl p-2 mx-10 my-2'>
                {children}
            </ol>
        ),
    },
    block: {
        normal: ({ children }: any) =>
            (<p   className='p-2 font-Sofia rounded-xl'>{children}</p>)
        ,
        h1: ({ children }: any) =>
            (<h1 id={children} className='p-2 font-Sofia text-3xl font-bold rounded-xl'>{children}</h1>)
        ,
        h2: ({ children }: any) =>
            (<h2 id={children} className='p-2 font-Sofia text-2xl font-bold rounded-xl'>{children}</h2>)
        ,
        h3: ({ children }: any) =>
            (<h3 id={children} className='p-2 font-Sofia text-xl font-bold rounded-xl'>{children}</h3>)
        ,
        h4: ({ children }: any) =>
            (<h4 id={children} className='p-2 font-Sofia text-lg font-bold rounded-xl'>{children}</h4>)
        ,
        blockquote: ({ children }: any) =>
        (<blockquote className='border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5'>{children}
        </blockquote>)
        ,
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
                ? "noopener noreferrer"
                : undefined;

            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline font-Sofia decoration-[#F7AB0A] hover:decoration-black font-bold text-lg text-orange-600 hover:text-blue-600">
                    {children}
                </Link>
            )
        },
        strong: ({ children }: any) => (
            <strong className="font-bold">{children}</strong>
        ),
        em: ({ children }: any) => (
            <em className="italic">{children}</em>
        ),
        code: ({ children }: any) => (
            <code className="inline-block bg-slate-300 text-pink-700 dark:bg-gray-800 rounded px-2 ">{children}</code>
        ),
        highlight: ({ children }: any) => (
            <span className=" text-black bg-yellow-300 rounded">{children}</span>
        )
    }

}