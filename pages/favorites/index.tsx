import { useState, useEffect } from 'react';

import { Card, Container, Grid, Image, Text } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { NoFavoritos } from "../../components/ui";
import { favoritesStorage } from '../../utilities';

const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(favoritesStorage.getPokemons())
    }, [])

    return (
        <Layout title="Pokemons - Favoritos">
            <NoFavoritos />
            {/*
            <Grid.Container css={{
                marginTop: '5px',
                display: 'flex',
                flexDirection: 'column',
                height: 'calc(100vh - 100px)',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center'
            }} >
                <Grid xs={12} sm={8}>
                    <Card hoverable >
                        <Card.Body css={{ display: 'flex', alignItems: "center" }}>
                            <Text h1>No hay Favoritos</Text>
                            <Image
                                alt=''
                                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                                width={250}
                                height={250}
                                css={{ opacity: 0.1 }}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container> */}
        </Layout>
    )
}

export default FavoritesPage
