import { createReducer } from "@reduxjs/toolkit";
import initState from "./init_state";
import {GetPopularMovieDataAction, SetPopLoading, TogglePopularTypeAction }from "./action";

const ReducerApp = createReducer (initState , {
    [TogglePopularTypeAction.type ] : (state , action) => ({
        ...state,
        popularState :action.payload
    }),
    [GetPopularMovieDataAction.type] : (state , action) => ({
        ...state,
        popularMovie:action.payload

    }),
    [SetPopLoading.type] : (state , action) => ({
        ...state,
        popularLoading : action.payload,
    })
})
export default  ReducerApp;
