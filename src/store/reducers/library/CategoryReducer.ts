import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface ICategory {
    id: string;
    title: string;
}

interface IState {
    items: ICategory[];
    currentId: string;
    blockedIds: string[];
}

const initialState: IState = {
    items: [
        {id: "Products", title: "Products"},
        {id: "Manuals", title: "Manuals"},
        {id: "Rules", title: "Rules"},
        {id: "Cataloges", title: "Cataloges"},
        {id: "Templates", title: "Templates"},
    ],
    currentId: "Products",
    blockedIds: []
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCurrent: (state, action: PayloadAction<string>) => {
            state.currentId = action.payload
        },
        setBlocked: (state, action: PayloadAction<string[]>) => {
            state.blockedIds = action.payload
        },
    },
})

export const categoryActions = categorySlice.actions
export const categories = (state: RootState) => state.category
export default categorySlice.reducer