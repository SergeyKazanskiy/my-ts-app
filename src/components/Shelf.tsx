import { Box, HStack, VStack } from "@chakra-ui/react";

interface IProps {
    currentId?: number;
    children: JSX.Element[] | JSX.Element;
}

export function Shelf({ currentId, children }: IProps) {
    return (
        <Box mx={3}>
            <Box h='22px' bgImage="url(/Tree.png)" bgSize='100%'>

            </Box>
            <Box h='72px' p={2} bgImage="url(/BookShelf.png)" bgSize='100% 100%'>
                <HStack spacing={1} px={1}>
                    {children}
                </HStack>
            </Box>
        </Box>
    );
}