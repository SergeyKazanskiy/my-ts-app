import { Button, VStack } from "@chakra-ui/react";

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
      {items.map((item, i) => (
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
      ))}
    </VStack>
  );
};

