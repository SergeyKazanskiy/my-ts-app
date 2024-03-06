export type Item = {
  id: string;
  parentId?: string;
  title: string;
};

export type Items = {
  items: Item[];
  currentId?: string;
  clickItem: (id: string) => void;
};

export type Groups = {
  groups: string[];
  clickGroup?: (e: React.MouseEvent) => void;
};

export interface IGroupsItems {
  groups: Items;
  items: Items;
}
