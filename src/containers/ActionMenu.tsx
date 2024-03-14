import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './styles.css';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Box } from "@chakra-ui/react";
import { FaEllipsisH, FaChevronRight } from 'react-icons/fa';


export interface IMenuItem {
    title: string,
    options?: string[]
}

export type IMenuProps = {
    items: IMenuItem[],
    clickItem: (title: string) => void
};

export function ActionMenu({ items, clickItem }: IMenuProps) {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(200);
    const [activeIndex, setActiveIndex] = useState(0);

    function calcHeight(el: any) {
        const height = el.offsetHeight;
        setMenuHeight(height + 3);
    }

    function onItemClick(item: IMenuItem, i: number) {
        if (item.hasOwnProperty('options')) {
            setActiveIndex(i);
            setActiveMenu(item.title);
        }
        else {
            setActiveIndex(0);
            clickItem(item.title);
        };
    }

    function onOptionClick(option: string) {
        clickItem(activeMenu + '_' + option);
        setActiveMenu('main');
        setActiveIndex(0);
    }

    return (
        <Menu closeOnSelect={false} onClose={() => setActiveMenu('main')}>
            <MenuButton as={IconButton} icon={<FaEllipsisH />} aria-label='Options' variant='outline' />
            <MenuList p={0} minW="0" w={'130px'} style={{ height: menuHeight }} className="dropdown">
                <CSSTransition
                    in={activeMenu === 'main'}
                    timeout={500}
                    classNames="menu-primary"
                    unmountOnExit
                    onEnter={calcHeight}
                >
                    <div className="main-menu">
                        {items.map((item, i) => (
                            <MenuItem key={item.title} fontSize='sm'
                                onClick={() => onItemClick(item, i)}>
                                <Box>{item.title}</Box>
                                {item.hasOwnProperty('options') &&
                                    <Box pos="absolute" ml="86px"><FaChevronRight /></Box>}
                            </MenuItem>
                        ))}
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={activeMenu !== 'main'}
                    timeout={500}
                    classNames="menu-secondary"
                    unmountOnExit
                    onEnter={calcHeight}
                >
                    <div className="menu-container">
                        {items[activeIndex].options?.map((option) => (
                            <MenuItem key={option} fontSize='sm'
                                onClick={() => onOptionClick(option)}>
                                {option}
                            </MenuItem>
                        ))}
                        <MenuItem fontSize='sm' borderWidth={0.5} py={1.5}
                            onClick={() => setActiveMenu('main')}>Cancel</MenuItem>
                    </div>
                </CSSTransition>
            </MenuList>
        </Menu>
    );
};
