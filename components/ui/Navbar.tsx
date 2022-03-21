import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";

export const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexFlow: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0px 20px',
            backgroundColor: theme?.colors.gray900.value
        }}>

            <Image  //to consume the image of domain, configure next.config
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            />

            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemon</Text>

            <Spacer css={{ flex: 1 }} />
            <Text color='white' h3>Favoritos</Text>
        </div>
    )
};
