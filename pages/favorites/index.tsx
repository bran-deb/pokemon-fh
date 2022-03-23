import { Card, Grid, Text } from "@nextui-org/react";
import React from "react";
import { Layout } from "../../components/layouts";

const favorites = () => {
    return (
        <Layout title="Pokemons - Favoritos">
            <Grid.Container css={{ marginTop: '5px' }} >
                <Grid xs={12} sm={8}>
                    <Card hoverable >
                        <Card.Body css={{ display: 'flex', alignItems: "center" }}>
                            <Text >Aun no hay Favoritos</Text>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export default favorites
