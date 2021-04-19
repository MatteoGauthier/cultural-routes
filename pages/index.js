import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import Layout from '../layouts/default';

const GlobeViz = dynamic(() => import('../components/GlobeViz'), {
    ssr: false
});

const routesData = [
    {
        title: 'History of Jazz',
        description:
            'Jazz today refers to a group of musical genres of Afro-American origin. Its essential characteristics are the emphasis on specific rhythms, the preponderance of improvisation and the particular treatment of instrumental or vocal sounds, originally derived from the imitation of human voices.',
        readingTime: '12”30’',
        slug: 'history-of-jazz'
    },
    {
        title: 'Colonial France',
        description:
            'Colonization is defined as the annexation of territory by a foreign force for political and economic purposes. This action represents one of the undeniable facts of world history, and developed in an increased form with the European expansion from the 15th century. ',
        readingTime: '12”30’',
        slug: 'colonial-france'
    },
    {
        title: 'Globalization',
        description:
            'What is globalisation? What is its history and what does it bring to the world? Are all regions of the Planet concerned by this phenomenon?',
        readingTime: '12”30’',
        slug: 'globalization'
    }
];

export default function Index() {
    return (
        <Layout>
            <Head>
                <title>
                    Cultural Routes - Discover hand-picked cultural
                    routes worldwide - MMI
                </title>
            </Head>
            <div className="flex strict-container">
                <div className="globe-elm">
                    <GlobeViz />
                </div>
                <div className="w-full max-w-xl ml-4 content-container">
                    <div className="flex flex-col mt-12 mb-8 space-y-2 3xl:mt-28 ">
                        <h1 className="w-3/4 text-2xl font-bold leading-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
                            Discover hand-picked cultural routes
                            worldwide
                        </h1>
                        <p className="leading-6 text-gray-a">
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Amet, felis mi lectus
                            non sed. Venenatis ut amet auctor
                            ultricies eget tincidunt ultricies
                            scelerisque.
                        </p>
                    </div>
                    <div className="pl-4 mt-4 mb-2 text-xs font-medium tracking-wider text-white uppercase text-opacity-60">
                        last routes
                    </div>
                    <div className="z-0 flex flex-col space-y-5">
                        {routesData.map(
                            (
                                {
                                    title,
                                    description,
                                    readingTime,
                                    slug
                                },
                                idx
                            ) => (
                                <Link
                                    href={'/routes/' + slug}
                                    key={idx}
                                >
                                    <a className="w-full h-full px-4 py-3 text-white cursor-pointer gradient-box ">
                                        <div className="text-lg">
                                            {title}
                                        </div>
                                        <p className="mt-1 text-sm text-gray-300">
                                            {description}
                                        </p>
                                        <div className="flex justify-between mt-2">
                                            <span className="text-gray-400">
                                                Reading time :{' '}
                                                {readingTime}
                                            </span>
                                            <button className="text-glow-gray">
                                                Read this route
                                            </button>
                                        </div>
                                    </a>
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
