import React, {FC, useState} from 'react'
import {Box, Text, Flex, Button} from '@chakra-ui/react'
import { mintAnimalTokenContract } from '../web3Config';

interface MainProps {
    account: string;
}

const Main: FC<MainProps> = ({account}) => {
    const [newAnimalCard, setNewAnimalCard] = useState<string>("");

    const onClickMint = async () => {
        try {
            if (!account) return;

            const response = await mintAnimalTokenContract.methods
                .mintAnimalToken()
                .send({from: account});
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Flex w="full" h="100vh" justifyContent={"center"} alignItems="center" direction={"column"}>
            <Box>
                {
                    newAnimalCard ? (
                        <div>AnimalCard</div>
                    ) : (
                        <Text>Let' mint Animal Card</Text>
                    )
                }
            </Box>
            <Box>
                <Button mt={4} size="sm" colorScheme={"blue"} onClick={onClickMint}>
                    Mint
                </Button>
            </Box>
        </Flex>
    )
}

export default Main;
