import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store'


interface TabItem {
    id: string;
    title: string;
  }
  
  interface TabsState {
    items: TabItem[];
  }
  
  const initialState: TabsState = {
    items: [{ id: '1', title: 'Tab1' }, { id: '2', title: 'Tab2' }, { id: '3', title: 'Tab3' }],
  };
  
  const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
      reorderTabs(state, action: PayloadAction<TabItem[]>) {
        state.items = action.payload;
      },
    },
  });

export const propertyActions = propertiesSlice.actions
export const properties = (state: RootState) => state.property
export default propertiesSlice.reducer