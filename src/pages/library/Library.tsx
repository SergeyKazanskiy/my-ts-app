
import * as React from 'react';
import { Collapse, Box, Button, useDisclosure } from "@chakra-ui/react"

interface ILibraryProps {
}

export const Library: React.FunctionComponent<ILibraryProps> = (props) => {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            <Button onClick={onToggle}>Test</Button>
            <Box bg="tomato" w="100%" pos="relative" h="160px">
                <Box w="99%" pos="absolute" top="-16px" bg="blue">
                    <Collapse in={isOpen} animateOpacity>
                        <Box
                            bg='teal.500'
                            rounded='md'
                            shadow='md'
                            h='600px'
                            w='1000px'
                        >
                            rrr
                        </Box>
                    </Collapse>
                </Box>
            </Box>
        </>
    );
};

