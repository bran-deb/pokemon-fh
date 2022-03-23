import { GetStaticProps, GetStaticPaths, NextPage } from 'next';

import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';
import { Layout } from "../../components/layouts"


interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    return (
        <Layout title='algun pokemon'>
            <h1>{pokemon.name}</h1>
        </Layout>
    )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes [id]
//se ejecuta serverside y en buildtime
export const getStaticPaths: GetStaticPaths = async (ctx) => {

    // contiene un array de 1 a 151
    const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)
    //por cada id se crea un path y fallback:false para que solo acceda al num de paths
    return {
        paths: pokemons151.map(id => ({ params: { id } })),
        fallback: false
    }
}

// it runs on server side and only at build time and it is only used in pages
export const getStaticProps: GetStaticProps = async ({ params }) => {

    const { id } = params as { id: string }
    //tipado estricto para la llamada a la API
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)
    //regresa data de pokemon deacuerdo al id
    return {
        props: {  //las props las manda al cliente
            pokemon: data
        }
    }
}

export default PokemonPage
