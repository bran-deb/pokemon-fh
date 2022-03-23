import { Link, Spacer, Text, useTheme } from "@nextui-org/react";
import { useRouter } from "next/router";
import Image from "next/image";
import NextLink from "next/link";
import favorites from "../../pages/favorites";

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

            <Image
                //NOTE: to consume the image of domain, configure next.config
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de la app"
                width={70}
                height={70}
            />

            <NextLink href="/" passHref>
                <Link >
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okemon</Text>
                </Link>
            </NextLink>

            <Spacer css={{ flex: 1 }} />

            <NextLink href='/favorites' passHref>
                <Link>
                    <Text h3 color='white'>Favoritos</Text>
                </Link>
            </NextLink>
        </div>
    )
};
