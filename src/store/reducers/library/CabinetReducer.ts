import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store'

interface cabinet {
    id: string;
    sectionId: string;
    num: number;
    name: string;
    type?: string;
}

const itemsAdapter = createEntityAdapter<cabinet>({
    sortComparer: (a, b) => a.num - b.num
  });

const cabinetsSlice = createSlice({
    name: 'cabinets',
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

export const cabinetReducer = cabinetsSlice.reducer
export const cabinetSelectors = itemsAdapter.getSelectors<RootState>((state) => state.cabinets)
export const cabinetActions = cabinetsSlice.actions


