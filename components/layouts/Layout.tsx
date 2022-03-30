import { FC } from "react"
import Head from "next/head"

import { Navbar } from '../ui';

interface Props {
    title?: string;
}
//NOTE: verificar el window en el backend
const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Brandon Padilla" />
                <meta name="description" content={`Informacion sobre pokemon ${title}`} />
                <meta name="keywords" content={`esta es la pagina sobre ${title}`} />

                <meta property="og:title" content={`Informacion sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina de ${title}`} />
                <meta property="og:image" content={`${origin}/img/bannerPokemon.png`} />
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
