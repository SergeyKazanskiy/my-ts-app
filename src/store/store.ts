import { configureStore } from "@reduxjs/toolkit";
import manualNavsReducer from "./reducers/manual/ManualNavsReducer";
import manualTabsReducer from "./reducers/manual/ManualTabsReducer";
import categoryReducer from './reducers/library/CategoryReducer';
import sectionReducer from './reducers/library/SectionReducer';
import cabinetReducer from './reducers/library/CabinetReducer';
import shelfReducer from './reducers/library/ShelfReducer';
import menuReducer from './reducers/MenuReducer';
import toastReducer from './reducers/ToastReducer';

export const store = configureStore({
  reducer: {
    manualNavs: manualNavsReducer,
    manualTabs: manualTabsReducer,
    category: categoryReducer,
    section: sectionReducer,
    cabinet: cabinetReducer,
    shelf: shelfReducer,
    menu: menuReducer,
    toast: toastReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
