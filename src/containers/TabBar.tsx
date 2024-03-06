import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";


interface IProps {
    titles: string[];
};

export function TabBar({ titles }: IProps) {
    return (
        <Tabs variant='enclosed'>
            <TabList>
            {titles.map((title, i) => (
                <Tab>title</Tab>
                ))}
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

