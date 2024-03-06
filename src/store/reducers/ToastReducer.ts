import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ToastState {
  isOpen: boolean;
  message: string;
}

const initialState: ToastState = {
  isOpen: false,
  message: '',
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    openToast(state, action: PayloadAction<string>) {
      state.isOpen = true;
      state.message = action.payload;
    },
    closeToast(state) {
      state.isOpen = false;
      state.message = '';
    },
  },
});

export const toastActions = toastSlice.actions;
export default toastSlice.reducer;
