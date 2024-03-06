import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface ICabinet {
    id: string;
    sectionId: string;
    title: string;
}

interface IState {
    items: ICabinet[];
    currentId: string;
}

const initialState: IState = {
    items: [],
    currentId: "",
}

export const cabinetSlice = createSlice({
    name: 'cabinet',
    initialState,
    reducers: {
        setCurrent: (state, action: PayloadAction<string>) => {
            state.currentId = action.payload
        },
        addItem: (state, action: PayloadAction<ICabinet>) => {
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

export const categoryActions = cabinetSlice.actions
export const cabinets = (state: RootState) => state.cabinet
export default cabinetSlice.reducer