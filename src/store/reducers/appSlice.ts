import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TInsets = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export interface IAppSlice {
  drawer: boolean;
  modal: boolean;
  blurOn: boolean;
  insets: TInsets;
}

const initialState: IAppSlice = {
  drawer: false,
  modal: false,
  blurOn: true,
  insets: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setDrawer: (state, { payload }: PayloadAction<boolean>) => {
      state.drawer = payload;
    },
    setModal: (state, { payload }: PayloadAction<boolean>) => {
      state.modal = payload;
    },
    setInsets: (state, { payload }: PayloadAction<TInsets>) => {
      state.insets = payload;
    },
  },
});

export const { setDrawer, setModal, setInsets } = appSlice.actions;
export default appSlice.reducer;
