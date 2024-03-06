import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface IShelf {
    id: string;
    sectionId: string;
    title: string;
}

interface IState {
    items: IShelf[];
    currentId: string;
}

const initialState: IState = {
    items: [],
    currentId: "",
}

export const shelfSlice = createSlice({
    name: 'shelf',
    initialState,
    reducers: {
        setCurrent: (state, action: PayloadAction<string>) => {
            state.currentId = action.payload
        },
        addItem: (state, action: PayloadAction<IShelf>) => {
            state.items.concat(action.payload)
        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items.filter((item) => item.id !== action.payload)
        },
        updateTitle: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === state.currentId)
            if (item) {item.title = action.payload}
        },
    },
})

export const categoryActions = shelfSlice.actions
export const shelfs = (state: RootState) => state.shelf
export default shelfSlice.reducer