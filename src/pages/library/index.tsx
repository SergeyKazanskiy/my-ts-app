import { useState } from 'react';
import { Collapse, Box, Heading, VStack, HStack, Spacer, useToast, Button } from "@chakra-ui/react"
import { NavBar } from '../../containers/NavBar';
import { ConnectedProperty } from './Property';
import { Sections } from '../../containers/Sections';
import { Cabinet } from '../../components/Cabinet';
import { Book } from '../../components/Book';
import { Items, Item } from "../../Types";
import { ActionMenu, IMenuItem } from '../../containers/ActionMenu';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
    isOpen: boolean
}

export default function ({ isOpen }: IProps) {

    const [num, setNum] = useState(0);

    const i1: Item = { id: "test1", title: "test1" };
    const i2: Item = { id: "test2", title: "test2" };

    function onClick(id: number) {
        setNum(id);

    }

    const testMenu: IMenuItem[] = [
        { title: "Menu 1", options: ['Option 11', 'Option 12'] },
        { title: "Menu 222", options: ['Option 21', 'Option 22', 'Option 23'] },
        { title: "Menu 3" }
    ]

    function showMenuTitle(title: string) {
        alert(title);
    }

    return (
        <Box w="100%" pos="absolute" top="50px">
            <Collapse in={isOpen} animateOpacity>
                <VStack bg='teal' rounded='md' m={1} p={1}>
                    <Heading size='md' justifySelf={'center'}>Hello World</Heading>
                    <HStack w='100%' alignItems='start'>
                        <VStack h='100%'>
                            <NavBar items={[i1, i2, i1]} currentId="test2" clickItem={onClick} />
                            <Spacer />
                            <ActionMenu items={testMenu} clickItem={showMenuTitle} />
                        </VStack>
                        <Sections items={['title1', 'title2']} currentId={num}>
                            <HStack spacing={0} px={4}>
                                <Cabinet title='Cab1' counter={3}>
                                    <Book title='book1' sub='XLS' />
                                    <Book title='book2' sub='XLS' />
                                    <Book title='book3' sub='XLS' />
                                </Cabinet>
                                <Cabinet title='Cab2' counter={3}>
                                    <Book title='book1' sub='XLS' />
                                    <Book title='book2' sub='XLS' />
                                    <Book title='book3' sub='XLS' />
                                </Cabinet>
                                <Cabinet title='Cab3' counter={3}>
                                    <Book title='book1' sub='XLS' />
                                    <Book title='book2' sub='XLS' />
                                    <Book title='book3' sub='XLS' />
                                </Cabinet>
                            </HStack>
                        </Sections>
                        <ConnectedProperty/>
                    </HStack>
                </VStack>
            </Collapse>
        </Box>
    );
};

