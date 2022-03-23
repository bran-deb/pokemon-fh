import { FC } from "react"
import { Grid } from "@nextui-org/react"

import { SmallPokemon } from "../../interfaces"
import { PokemonCard } from "../pokemon"


interface Props {
    pokemons: SmallPokemon[];
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
    return (
        <Grid.Container gap={2} justify='flex-start'>
            {
                pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </Grid.Container>
    )
}
