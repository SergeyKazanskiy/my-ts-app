
import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { navsActions } from "./ManualNavsReducer";

type Item = { id: string; parentId: string; num: number; title: string };

const itemsAdapter = createEntityAdapter({
  selectId: (item: Item) => item.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = itemsAdapter.getInitialState();

const itemsSlice = createSlice({
  name: "manualTabs",
  initialState,
  reducers: {
    addItem: itemsAdapter.addOne,
    removeItem: itemsAdapter.removeOne,
    updateItem: itemsAdapter.updateOne,
  },
  extraReducers: (builder) => {
    builder.addCase(navsActions.removeItem, (state, action) => {
      const parentId = action.payload;
      const restEntities = Object.values(state.entities).filter(
        (item) => item.parentId !== parentId
      );
      itemsAdapter.setAll(state, restEntities);
    });
  },
});

const itemsSelectors = itemsAdapter.getSelectors<RootState>(
  (state) => state.manualTabs
);
export const selectTabs = itemsSelectors.selectAll;
export const selectTabById = itemsSelectors.selectById;

export const tabsActions = itemsSlice.actions;
export default itemsSlice.reducer;

