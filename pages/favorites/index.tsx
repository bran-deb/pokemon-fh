import { useState, useEffect } from 'react';

import { Layout } from "../../components/layouts";
import { NoFavoritos } from "../../components/ui";
import { favoritesStorage } from '../../utilities';
import { FavoritePokemons } from '../../components/pokemon';

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
                    : (<FavoritePokemons pokemons={favoritePokemons} />)
            }
        </Layout>
    )
}

export default FavoritesPage
