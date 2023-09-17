import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/common/components/header'
import NavigateMenu from '@/common/components/navigate-menu'
import PostsList from '@/common/components/posts-list'

export default function Home() {
  return (
    <>
      <Head>
        <title>Блог Степанова Павла</title>
        <meta name="description" content="Блог Степанова Павла. Здесь я рассказываю о IT и своей жизни" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <div style={{display: 'flex'}}>
          <NavigateMenu/>
          <PostsList/>
        </div>
      </main>
    </>
  )
}
