import { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts'


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

  const { data: { results } } = await pokeApi.get('/pokemon/?limit=151')
  console.log(results)

  return {
    props: {  //las props las manda al cliente
      pokemons: results
    }
  }
}

export default HomePage
