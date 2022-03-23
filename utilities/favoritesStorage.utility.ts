

const toggleFavorite = (id: number) => {

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    //si existe el id lo quita del array
    if (favorites.includes(id)) {
        favorites = favorites.filter(storageID => storageID !== id)
    } else {
        favorites.push(id)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
}

const existPokemon = (id: number): Boolean => {
    //NOTE: para solucionar el error que da en el serverside y ejecuta solo el lado del cliente
    if (typeof window === 'undefined') return false

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    return favorites.includes(id)  //true/false
}

const getPokemons = (): number[] => {
    //NOTE: para no tener el error del serverside se lo manda por un useeffect
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    toggleFavorite,
    existPokemon,
    getPokemons,
}
