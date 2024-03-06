import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store'

export interface Item {
  title: string,
  event: string,
  question?: string
  options?: string[]
}

interface IMenuState {
  isOpen: boolean;
  items: Item[];
}

const initialState: IMenuState = {
  items: [],
  isOpen: false
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu(state) {
      state.isOpen = true;
    },
    closeMenu(state) {
      state.isOpen = false;
    },
    setSectionCommands(state) {
      state.items = [
        { title: "Add section", event: "Add_Section", options: ['Before', 'After', 'In the end'] },
        { title: "Delete section", event: "Delete_Section" , question: 'Are You sure?'},
        { title: "Move section", event: "Move_Section", options: ['Up', 'Down'] },
      ];
    },
    setBookCommands(state, action: PayloadAction<string>) {
      if (action.payload === "Initial") {
        state.items = [
          { title: "Add book", event: "Add_Book", options: ['Before', 'After', 'In the end'] },
          { title: "Duplicate book", event: "Duplicate_Book"},
          { title: "Move book", event: "Move_Book", options: ['Move up', 'Move down'] },
          { title: "Copy book", event: "Copy_Book"},
          { title: "Cut book", event: "Cut_Book"},
          { title: "Remove book", event: "Remove_Book" , question: 'Are You sure?'},
          { title: "Delete book", event: "Delete_Book" , question: 'Are You sure?'},
        ];
      } else if (action.payload === "Paste") {
        state.items = [
          { title: "Paste book", event: "Paste_Book", options: ['Before', 'After', 'In the end'] },
          { title: "Cancel", event: "Cancel_Book"},
        ];
      } else if (action.payload === "Cancel") {
        state.items = [
          { title: "Cancel", event: "Cancel_Book"},
        ];
      }     
    },
  },
});

export const menuActions = menuSlice.actions;
export const items = (state: RootState) => state.menu
export default menuSlice.reducer;
