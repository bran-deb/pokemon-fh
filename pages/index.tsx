import { NextPage, GetStaticProps } from 'next'

import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonList } from '../components/pokemonList'


interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <>
      <Layout title='listado de pokemons'>
        <PokemonList pokemons={pokemons} />
      </Layout>
    </>
  )
}

//TODO:
// it runs on server side and only at build time and it is only used in pages
export const getStaticProps: GetStaticProps = async (ctx) => {

  //tipado estricto para la llamada a la API
  const { data: { results } } = await pokeApi.get<PokemonListResponse>('/pokemon/?limit=151')
  //agregamos un id y img por cada pokemon
  const pokemons: SmallPokemon[] = results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }))

  return {
    props: {  //las props las manda al cliente
      pokemons
    }
  }
}

export default HomePage
