import { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'
import { PokemonListResponse } from '../interfaces'


const HomePage: NextPage = (props) => {

  console.log({ props })

  return (
    <>
      <Layout title='listado de pokemons'>
        <ul>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
          <li>Pokemon</li>
        </ul>
      </Layout>
    </>
  )
}

//TODO:
// it runs on server side and only at build time and it is only used in pages
export const getStaticProps: GetStaticProps = async (ctx) => {

  //tipado estricto para la llamada a la API
  const { data: { results } } = await pokeApi.get<PokemonListResponse>('/pokemon/?limit=151')

  return {
    props: {  //las props las manda al cliente
      pokemons: results
    }
  }
}

export default HomePage
