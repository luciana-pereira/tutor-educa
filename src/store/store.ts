import { configureStore } from "@reduxjs/toolkit";
import  tutorEducaDataReducer  from "./slices/tutorEducaDataSlice"

export const store = configureStore({
    reducer: {
        tutorEducaDataSlice: tutorEducaDataReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
