import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    viewtime: {}
}

export const viewtimeSlice = createSlice({
    name: "viewtimeName",
    initialState,
    reducers: {
        setViewtime(state, action: PayloadAction<any>) {
            state.viewtime = action.payload
        },
    }
})

export const viewtimeActions = viewtimeSlice.actions
export const viewtimeReducer = viewtimeSlice.reducer