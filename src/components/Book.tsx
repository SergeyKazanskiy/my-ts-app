import React from "react";
import { Box, Center, VStack, Text, HStack } from "@chakra-ui/react";


interface IBook {
  title: string;
  sub: string;
}

export const Book = ({ title, sub }: IBook) => {
  return (
    <Box  boxShadow='xl' w="43px" h="57px" bg="red.300"
      borderWidth={2} borderColor='gray.500' borderStyle='ridge'>
      <VStack spacing={0.5}>
        <Text fontSize={10} bg="red.200" h="38px" px={1} color="gray.700" align={'center'}>
          {title}
        </Text>
        <Text as='b' fontSize={9} bg="blue.300" w='100%' color="white" align={'center'}>
          {sub}
        </Text>
      </VStack>
    </Box>
  );
};

