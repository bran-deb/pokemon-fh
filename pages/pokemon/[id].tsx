import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { useRouter } from "next/router"

import { Layout } from "../../components/layouts"


interface Props {
    id: string;
    name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {

    const router = useRouter()
    console.log(router.query)

    return (
        <Layout title='algun pokemon'>
            <h1>{id} - {name}</h1>
        </Layout>
    )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes [id]
//se ejecuta serverside y en buildtime
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    return {
        paths: [
            {
                params: {
                    id: '1'
                }
            }
        ],
        fallback: false
    }
}

// it runs on server side and only at build time and it is only used in pages
export const getStaticProps: GetStaticProps = async (ctx) => {

    //tipado estricto para la llamada a la API
    // const { data: { results } } = await pokeApi.get<PokemonListResponse>('/pokemon/?limit=151')
    //agregamos un id y img por cada pokemon


    return {
        props: {  //las props las manda al cliente
            id: 1,
            name: 'Bulbasaur'
        }
    }
}

export default PokemonPage
