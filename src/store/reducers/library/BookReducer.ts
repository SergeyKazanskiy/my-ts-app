import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store'

interface book {
    id: string;
    shelfId: string;
    num: number;
    name: string;
    type?: string;
}

const itemsAdapter = createEntityAdapter<book>({
    sortComparer: (a, b) => a.num - b.num
  });

const booksSlice = createSlice({
    name: 'books',
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

export const bookReducer = booksSlice.reducer
export const bookSelectors = itemsAdapter.getSelectors<RootState>((state) => state.books)
export const bookActions = booksSlice.actions


