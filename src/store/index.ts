import {configureStore} from "@reduxjs/toolkit";
import {coursesApi} from "./courses/courses.api";
import {setupListeners} from "@reduxjs/toolkit/query";
import {viewtimeReducer} from "./courses/viewtime.slice";

export const store = configureStore({
    reducer: {
        [coursesApi.reducerPath]: coursesApi.reducer,
        data: viewtimeReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(coursesApi.middleware)
})
setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>




