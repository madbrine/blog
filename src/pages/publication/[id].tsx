import Head from 'next/head'
import Header from '@/common/components/header'
import NavigateMenu from '@/common/components/navigate-menu'
import { useRouter } from 'next/router'
import Publication from '@/common/components/publication'
import { fakePostFullData } from '@/common/utils/fakePostFullData'
import RightColumn from '@/common/components/right-column'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function PublicationId() {

    const router = useRouter();
    const { id } = router.query
    const fetchData = {
        fetchData: id
    }

    const [data, setData] = useState(
        {
            id: 1,
            category: 1,
            date: '',
            updateDate: '',
            header: '',
            description: '',
            imageUrl: '',
            views: 0,
            likes: 0,
            comments: 0,
            content: [{ type: 'h', data: 'РАБОТАЕТ' }],
            commentaries: null
        }
    );

    useEffect(() => {
        if (id!) {
            const getData = async () => {
                try {
                    console.log(`Has data ${id}`)
                    const response = await axios.post('/api/get-full-publication', fetchData);
                    if (response.status === 200) {
                        setData(response.data);
                        console.log(response.data);
                    } else {
                        console.error('Error fetching post data:', response.status);
                    }
                } catch (error) {
                    console.error('Error fetching post data:', error);
                }
            };
            getData();
        }

    }, [id])

    const fakeData = fakePostFullData;
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

                    <RightColumn />
                </div>
            </main>
        </>
    )
}