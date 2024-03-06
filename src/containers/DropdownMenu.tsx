import './styles.css';
import { useState } from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Text,
    Box,
    Switch,
    IconButton,
    HStack
} from '@chakra-ui/react';
import { CSSTransition } from 'react-transition-group';
import { MdChevronLeft, MdChevronRight, MdMenu } from 'react-icons/md';

interface IProps {
    [k: string]: { [k: string]: string }
};


export function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(200);

    function calcHeight(el: any) {
        const height = el.offsetHeight;
        setMenuHeight(height + 20);
    }

    return (
        <>
            <Menu closeOnSelect={false}>
                <MenuButton as={Button}>
                    :
                </MenuButton>
                <MenuList p={0} minW="0" w={'120px'} style={{ height: menuHeight }} className="dropdown">
                    <CSSTransition
                        in={activeMenu === 'main'}
                        timeout={500}
                        classNames="menu-primary"
                        unmountOnExit
                        onEnter={calcHeight}
                    >
                        <div className="main-menu">


                            <MenuItem onClick={() => setActiveMenu('settings')}>
                                <Text>Settings</Text>
                                <Box pos="absolute" ml="70%">
                                    <MdChevronRight />
                                </Box>
                            </MenuItem>

                            
                            <MenuItem onClick={() => setActiveMenu('animals')}>
                                Animals
                                <Box pos="absolute" ml="70%">
                                    <MdChevronRight />
                                </Box>
                            </MenuItem>
                            
                            <MenuItem>
                                Coding
                                <Box pos="absolute" ml="70%">
                                    <MdChevronRight />
                                </Box>
                            </MenuItem>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                        in={activeMenu === 'settings'}
                        timeout={500}
                        classNames="menu-secondary"
                        unmountOnExit
                        onEnter={calcHeight}
                    >
                        <div className="menu-container">
                            <HStack mb="8" spacing="40%">
                                <Box>
                                    <IconButton
                                        aria-label='Search'
                                        variant="outlined"
                                        icon={<MdChevronLeft />}
                                        onClick={() => setActiveMenu('main')}
                                    />
                                </Box>
                                <Switch />
                            </HStack>
                            <Box>
                                <Text>Generate your words here</Text>
                            </Box>
                        </div>
                    </CSSTransition>

                    <CSSTransition
                        in={activeMenu === 'animals'}
                        timeout={500}
                        classNames="menu-secondary"
                        unmountOnExit
                        onEnter={calcHeight}
                    >
                        <div className="menu-container">
                            <MenuItem onClick={() => setActiveMenu('main')}>Go back</MenuItem>
                            <MenuItem onClick={() => setActiveMenu('main')}>Dog</MenuItem>
                            <MenuItem>
                                <p>Cat</p>
                            </MenuItem>
                            <MenuItem>
                                <p>Bird</p>
                            </MenuItem>
                        </div>
                    </CSSTransition>
                </MenuList>
            </Menu>
        </>
    );
}
