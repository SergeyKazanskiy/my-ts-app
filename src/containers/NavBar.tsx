import { Button, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from 'framer-motion';


export type Item = {
  id: string;
  parentId?: string;
  title: string;
};

export type Items = {
  items: Item[];
  currentId?: string;
  clickItem: (id: number) => void;
};

export function NavBar({ items, currentId, clickItem }: Items) {
  return (
    <VStack w="60px">
      <AnimatePresence>
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <Button
              key={item.id}
              size="sm"
              w="50px"
              h="50px"
              variant={item.id === currentId ? "solid" : "outline"}
              onClick={() => clickItem(i)}
            >
              {item.title}
            </Button>
          </motion.div>
        ))}
      </AnimatePresence>
    </VStack>
  );
};

