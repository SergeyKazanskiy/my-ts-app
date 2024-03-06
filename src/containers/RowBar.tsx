import { Button, HStack } from "@chakra-ui/react";


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

export function RowBar({ items, currentId, clickItem }: Items) {
  return (
    <HStack h="24px">
      {items.map((item, i) => (
        <Button
          key={item.id}
          size="sm"
          variant={item.id === currentId ? "solid" : "outline"}
          onClick={() => clickItem(i)}
        >
          {item.title}
        </Button>
      ))}
    </HStack>
  );
};

