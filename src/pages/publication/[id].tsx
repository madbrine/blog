import Head from 'next/head'
import Header from '@/common/components/header'
import NavigateMenu from '@/common/components/navigate-menu'
import { useRouter } from 'next/router'
import Publication from '@/common/components/publication'
import { fakePostFullData } from '@/common/utils/fakePostFullData'
import RightColumn from '@/common/components/right-column'

export default function PublicationId() {

    const router = useRouter();
    const {id} = router.query

    const data = fakePostFullData;
    return (
        <>
            <Head>
                <title>Блог Степанова Павла</title>
                <meta name="description" content="Блог Степанова Павла. Здесь я рассказываю о IT и своей жизни" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header />
                <div style={{ display: 'flex' }}>
                    <NavigateMenu />
                    <Publication
                        data={data}
                    />
                    <RightColumn/>
                </div>
            </main>
        </>
    )
}