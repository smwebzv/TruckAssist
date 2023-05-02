import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '../auth/authSlice';
import repairReducer from '../repair/repairSlice';
import blurViewReducer from '../blurView/blurViewSlice';
import filterModalReducer from '../filterModal/filterModalSlice';
import menuReducer from '../menu/menuSlice';
import gpsReducer from '../gps/gpsSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    blur: blurViewReducer,
    filterModal: filterModalReducer,
    auth: persistedAuthReducer,
    menu: menuReducer,
    gpsData: gpsReducer,
    repairData: repairReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
 
});

export type RootState = ReturnType<typeof store.getState>;

const persistor = persistStore(store);

export { store, persistor };