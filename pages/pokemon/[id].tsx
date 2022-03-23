import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';

import { favoritesStorage } from '../../utilities';
import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';
import { Layout } from "../../components/layouts"


interface Props {
    pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    const onToggleFavorite = () => {
        favoritesStorage.toggleFavorite(pokemon.id)
    }
    //serverside no tiene acceso al window
    // console.log({ existewindow: typeof window });

    return (
        <Layout title={pokemon.name}>

            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card hoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform='capitalize'>{pokemon.name}</Text>
                            <Button
                                color='gradient'
                                ghost
                                onClick={onToggleFavorite}
                            >
                                Guardar en favoritos
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text size={30}>Sprites:</Text>
                            <Container direction='row' display='flex'>
                                <Image src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                                <Image src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                /><Image src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                /><Image src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>

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
