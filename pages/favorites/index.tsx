import { useState, useEffect } from 'react';

import { Card, Container, Grid, Image, Text } from "@nextui-org/react";

import { Layout } from "../../components/layouts";
import { NoFavoritos } from "../../components/ui";
import { favoritesStorage } from '../../utilities';
import { FavoritePokemons } from '../../components/pokemon/FavoritePokemons';

const FavoritesPage = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(favoritesStorage.getPokemons())
    }, [])

    return (
        <Layout title="Pokemons - Favoritos">
            {
                favoritePokemons.length === 0
                    ? (<NoFavoritos />)
                    : (<FavoritePokemons favoritePokemons={favoritePokemons} />)
            }
        </Layout>
    )
}

export default FavoritesPage
