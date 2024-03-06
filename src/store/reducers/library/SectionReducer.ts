import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

export interface ISection {
    id: string;
    categoryId: string;
    title: string;
}

export interface ISectionState {
    items: ISection[];
    currentId: string;
}

const initialState: ISectionState = {
    items: [
        { id: "New", categoryId: "", title: "New" },
    ],
    currentId: "Products",
}

export const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        setCurrent: (state, action: PayloadAction<string>) => {
            state.currentId = action.payload
        },
        addItem: (state, action: PayloadAction<ISection>) => {
            state.items.concat(action.payload)
        },
        removeItem: (state) => {
            state.items.filter((item) => item.id !== state.currentId)
        },
        updateTitle: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === state.currentId)
            if (item) {item.title = action.payload}
        },
    },
})

export const sectionActions = sectionSlice.actions
export const sections = (state: RootState) => state.section
export default sectionSlice.reducer