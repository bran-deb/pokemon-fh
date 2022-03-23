

const toggleFavorite = (id: number) => {

    console.log('toggleFavorite llamado')

    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    //si existe el id lo quita del array
    if(favorites.includes(id)){
        favorites = favorites.filter(storageID =>storageID !==id)
    }else{
        favorites.push(id)
    }
    localStorage.setItem('favorites',JSON.stringify(favorites))
}


export default {toggleFavorite }
