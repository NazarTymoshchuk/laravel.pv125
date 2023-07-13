import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { AuthReducer } from "../components/auth/AuthReducer";
import { IsLoadingReducer } from "./reducers/IsloadingReducer";
import notificationReducer from '../components/common/Notification/notificationSlice';

export const rootReducer = combineReducers({
    auth: AuthReducer,
    loading: IsLoadingReducer,
    notification: notificationReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>