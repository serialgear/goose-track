import { createSlice } from "@reduxjs/toolkit";


const calendarInitState = {
    currentMonth: new Date(),
}

const calendarSlice = createSlice({
    name: "calendar",
    initialState: calendarInitState,
    reducers: {
        addCurrentMonth(state, {payload}) {
            state.currentMonth = payload;
        }
    }
})

export const { addCurrentMonth} = calendarSlice.actions;



export const calendarReducer = calendarSlice.reducer