import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Reorder } from 'framer-motion';


interface TabItem {
    id: string;
    title: string;
  }

interface IProps {
    items: TabItem[];
    onReorderTabs: (newOrder: TabItem[]) => void;
  }

export const TabBar: React.FC<IProps> = ({ items, onReorderTabs }) => {

    return (
        <Reorder.Group axis="y" values={items} onReorder={onReorderTabs}>
        {items.map((item) => (
          <Reorder.Item key={item.id} value={item}>
            {item.title}
          </Reorder.Item>
        ))}
      </Reorder.Group>
        
    );
};

/**
 * <Tabs isLazy orientation="horizontal" variant='enclosed'>
            <TabList as={motion.div} drag="x" onDragEnd={handleDragEnd}>
                {items.map((item) => (
                    <Tab key={item.id}>{item.title}</Tab>
                ))}
            </TabList>
            <TabPanels>
                {items.map((item) => (
                    <TabPanel key={item.id}>Content for {item.title}</TabPanel>
                ))}
            </TabPanels>
        </Tabs>
 */