import { createReducer } from "@reduxjs/toolkit";
import initState from "./init_state";
import {TogglePopularTypeAction }from "./action";
import { createSlice } from '@reduxjs/toolkit'
// const ReducerApp = createReducer (initState , {
//     [TogglePopularTypeAction.type ] : (state , action) => ( {
//         ...state,
//         popularState :action.payLod
//     })
// })

 export const ReducerApp = createSlice({
    name : "togglePop",
    initialState :{
        popType : "streaming"
    },
    reducers :{
        togglePopularType : (state , action) =>{
            state.popType = action.payload
        }
    }

}) 

export const {togglePopularType} = ReducerApp.actions

export default ReducerApp.reducer;