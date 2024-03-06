import { Heading, IconButton, useColorMode, useDisclosure } from "@chakra-ui/react"
import { Flex, Spacer, ButtonGroup, Button } from "@chakra-ui/react"
import { FaSun, FaMoon } from "react-icons/fa"

interface IProps {
    onToggle: (e: React.MouseEvent) => void;
}

export function Header({ onToggle }: IProps) {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex w='100%' alignItems='center' p='1'
            borderBottomWidth={1} borderColor='blue.500' bg='teal.800'>
            <IconButton aria-label='ThemeMode' icon={<FaSun />}
                isRound={true} size='md' onClick={toggleColorMode} />
            <Spacer />
            <Heading as='h2' size='lg' bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'>
                Technical library
            </Heading>
            <Spacer />
            <ButtonGroup colorScheme='teal' size='sm' variant='outline'>
                <Button onClick={onToggle}>Products</Button>
                <Button onClick={onToggle}>Manuals</Button>
                <Button onClick={onToggle}>Rules</Button>
                <Button onClick={onToggle}>Cataloges</Button>
                <Button onClick={onToggle}>Templates</Button>
            </ButtonGroup>
        </Flex>
    );
}

