import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify-by-Sean</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
        {/* Main Contet area */}
      </main>

      <div>
        {/* footer / player */}
      </div>
    </div>
  )
}
