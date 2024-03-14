import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store'

interface shelf {
    id: string;
    cabinetId: string;
    num: number;
    name: string;
    type?: string;
}

const itemsAdapter = createEntityAdapter<shelf>({
    sortComparer: (a, b) => a.num - b.num
  });

const shelvesSlice = createSlice({
    name: 'shelves',
    initialState: itemsAdapter.getInitialState(),
    reducers: {
        setItems: itemsAdapter.setAll,
        clearItems: itemsAdapter.removeAll,
        addItem: itemsAdapter.addOne,
        addItems: itemsAdapter.addMany,
        updateItem: itemsAdapter.updateOne,
        updateItems: itemsAdapter.updateMany,
        removeItem: itemsAdapter.removeOne,
        removeItems: itemsAdapter.removeMany,
    },
});

export const shelfReducer = shelvesSlice.reducer
export const shelfSelectors = itemsAdapter.getSelectors<RootState>((state) => state.shelves)
export const shelfActions = shelvesSlice.actions


