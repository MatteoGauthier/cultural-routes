import Head from 'next/head'
import dynamic from 'next/dynamic'

import Layout from '../components/layout'

const GlobeViz = dynamic(
  () => import('../components/GlobeViz'),
  { ssr: false }
)


export default function Home() {
  return (
    <Layout>
      <div className="strict-container">
        <GlobeViz/>
        <div className="w-full content-container">
          <div className="flex flex-col space-y-2">
            <p className="text-gray-a">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, felis mi lectus non sed. Venenatis ut amet auctor ultricies eget tincidunt ultricies scelerisque. 
            </p>
          </div>

          {
            Array(3).map(e => <div className="h-40 w-full bg-red"></div>)
          }

        </div>
      </div>
    </Layout>
  )
}
