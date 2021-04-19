import { HomeIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import Head from 'next/head';
export default function route({ children, frontMatter }) {
    return (
        <>
            <Head>
                <title>
                    {frontMatter.title} - Cultural Routes
                </title>
            </Head>
            <Link href="/">
                <a className="absolute top-0 left-0 flex items-center p-4 space-x-1 text-gray-400">
                    <HomeIcon width={24} height={24} />
                    <span>back to the home</span>
                </a>
            </Link>
            <div className="py-20 mx-auto routes-container">
                <div className="mx-auto border-2 border-white max-w-7xl rounded-2xl bg-sky-2 border-opacity-20 backdrop-filter bg-blend-overlay backdrop-blur-xl bg-opacity-20">
                    <article className="max-w-5xl pt-10 pb-16 mx-auto prose prose-blue">
                        <div>{children}</div>
                        <div className="italic text-green-300">
                            Written by {frontMatter.author}
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}
