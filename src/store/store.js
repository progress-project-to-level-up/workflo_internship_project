import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from './user/userSlice';
import projectReducer from './projectBuild/createProSlice';

const persistConfig = {
    key: 'store',
    storage,
}

const rootReducer = combineReducers({
    user: userReducer,
    project: projectReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);