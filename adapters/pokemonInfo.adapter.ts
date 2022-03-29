import { pokeApi } from "../api"
import { Pokemon } from "../interfaces"


export const getPokemonInfo = async (nameOrId: string) => {

    try {
        //tipado estricto para la llamada a la API
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)
        const { id, name, sprites } = data
        //crea un object para usar solo los datos que se necesita
        return { id, name, sprites }
    } catch (error) {
        return null
    }
}