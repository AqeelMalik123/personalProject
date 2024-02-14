import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './rootReducer';
// import { TypedUseSelectorHook } from 'react-redux';
// import { ThunkAction } from 'redux-thunk';
// import { Action } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const useSelector = useReduxSelector;
export const useDispatch = () => useReduxDispatch();
export const TStore = store.getState();

export const RootState = store.getState;
export const AppDispatch = store.dispatch;
// export const AppThunk = ThunkAction;
export const useTypedSelector = useReduxSelector;
