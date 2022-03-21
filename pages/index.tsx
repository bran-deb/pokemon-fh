import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'


const HomePage: NextPage = () => {
  return (
    <>
      <Layout title='listado de pokemons'>
        <Button color='gradient'>
          Hello world
        </Button>
      </Layout>
    </>
  )
}

export default HomePage
