import { FC } from "react"
import Head from "next/head"

import { Navbar } from '../ui';

//NOTE: verificar el window en el backend
const origin = (typeof window === 'undefined') ? '' : window.location.origin

interface Props {
    title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Brandon Padilla" />
                <meta name="description" content={`Informacion sobre pokemon ${title}`} />
                <meta name="keywords" content={`esta es la pagina sobre ${title}`} />

                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
