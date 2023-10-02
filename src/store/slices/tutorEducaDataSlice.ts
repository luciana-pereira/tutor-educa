import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface tutorEducaDataState {
    selectedEvent: string;
    userType: string;
}

const initialState: tutorEducaDataState = {
    selectedEvent: '',
    userType: '',
};

export const tutorEducaDataSlice = createSlice({
    name: "tutorEducaData",
    initialState,
    reducers: {
        setSelectedEvent: (state, action: PayloadAction<string>) => {
            state.selectedEvent = action.payload;
        },
        setUserType: (state, action: PayloadAction<string>) => {
            state.userType = action.payload;
        },    
    },
});

export const {
    setSelectedEvent,
    setUserType,
} = tutorEducaDataSlice.actions;

export default tutorEducaDataSlice.reducer;