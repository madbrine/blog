import { updateCategories } from '@/common/utils/updateCategories'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'
import moment from 'moment';
import 'moment/locale/ru';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700']
})
export default function App({ Component, pageProps }: AppProps) {
  moment.locale('ru');
  updateCategories();
  return (
    <main className={roboto.className}>
      <Component {...pageProps} />
    </main>
  )
}
