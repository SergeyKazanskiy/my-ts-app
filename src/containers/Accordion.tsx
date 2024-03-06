import { Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from "@chakra-ui/react";
import { Box, VStack, StackDivider } from "@chakra-ui/react";

interface IItem {
    id: string;
    parentId: string;
    title: string;
    group: string;
}

export type IProps = {
    items: IItem[];
    groups: string[];
    clickItem: (title: string) => void;
    clickGroup: (title: string) => void;
};

export function GroupedList({ items, groups, clickItem, clickGroup }: IProps) {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            {groups.map((title) => (
                <AccordionItem key={title} >
                    <h2>
                        <AccordionButton >
                            <Box as="span" flex='1' textAlign='left'
                                onClick={() => clickGroup(title)}>
                                {title}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <VStack
                            divider={<StackDivider borderColor='gray.200' />}
                            spacing={3}
                            align='stretch'
                        >
                            {items.filter((item) => item.group === title).map((item, i) => (
                                <Box key={item.id}  h='40px'
                                    onClick={() => clickItem(item.id)}>
                                    {item.title}
                                </Box>
                            ))}
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

