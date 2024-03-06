import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { nanoid } from 'nanoid';
import { moveUp, moveDown } from '../../../hooks/helpers';

interface IBook {
    id: string;
    categoryId: string;
    title: string;
    path: string;
}

interface Inserting {
    item: IBook;
    index: number;
}

interface IState {
    items: IBook[];
    currentId: string;
    group: string[];
}

const initialState: IState = {
    items: [],
    currentId: "Products",
    group: []
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setCurrent: (state, action: PayloadAction<string>) => {
            state.currentId = action.payload
        },
        addItem: (state, action: PayloadAction<IBook>) => {
            state.items.concat(action.payload)
        },
        insertItem: (state, action: PayloadAction<Inserting>) => {
            state.items.splice(action.payload.index, 0, action.payload.item)
        },
        addToGroup: (state, action: PayloadAction<string>) => {
            state.group.concat(action.payload)
        },
        removeFromGroup: (state, action: PayloadAction<string>) => {
            state.group.filter((id) => id !== action.payload)
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.items.filter((item) => item.id !== action.payload)
        },
        clearGroup: (state) => {
            state.group=[]
        },
        removeItem: (state) => {
            const item = state.items.find((item) => item.id === state.currentId)
            if (item) {item.path=""}
        },
        updateTitle: (state, action: PayloadAction<string>) => {
            const item = state.items.find((item) => item.id === state.currentId)
            if (item) {item.title = action.payload}
        },
        doubleItem: (state) => {
            const item = state.items.find((item) => item.id === state.currentId)
            const index = state.items.findIndex((item) => item.id === state.currentId)
            if (item) {
                const _ = require('lodash')
                const copiedItem: IBook = _.cloneDeep(item)
                copiedItem.title = item.title + "2"
                copiedItem.id = nanoid()
            }
        },
        moveItemUp: (state) => {
            state.items = moveUp(state.items, state.currentId)
        },
        moveItemDown: (state) => {
            state.items = moveDown(state.items, state.currentId)
        },
    },
})

export const bookActions = bookSlice.actions
export const books = (state: RootState) => state.section
export default bookSlice.reducer