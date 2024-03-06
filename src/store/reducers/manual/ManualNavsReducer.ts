import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type Item = { id: string; num: number; title: string };

const itemsAdapter = createEntityAdapter({
  selectId: (item: Item) => item.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = itemsAdapter.getInitialState();

const itemsSlice = createSlice({
  name: "manualNavs",
  initialState,
  reducers: {
    addItem: itemsAdapter.addOne,
    removeItem: itemsAdapter.removeOne,
    updateItem: itemsAdapter.updateOne,
  },
});

const itemsSelectors = itemsAdapter.getSelectors<RootState>(
  (state) => state.manualNavs
);
export const selectItems = itemsSelectors.selectAll;
export const selectItemById = itemsSelectors.selectById;

export const navsActions = itemsSlice.actions;
export default itemsSlice.reducer;
