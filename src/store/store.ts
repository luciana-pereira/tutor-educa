import { configureStore } from "@reduxjs/toolkit";
import  tutorEducaDataReducer  from "./slices/tutorEducaDataSlice"
import { authSlice } from "./slices/AuthSlice";
import { meetingsSlice } from "./slices/MeetingSlice";

export const store = configureStore({
    reducer: {
        tutorEducaDataSlice: tutorEducaDataReducer,
        auth: authSlice.reducer,
        meetings: meetingsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
