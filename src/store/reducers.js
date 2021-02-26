import { createReducer } from "@reduxjs/toolkit";
import ActionType from "./actionType";
import initState from "./init_state";

const ReducerApp = createReducer (initState , {
    [ActionType.TOGGLE_POPULAR_TYPE] : (state , action) => ( {
        ...state,
        popularState :action.payLoad
    })
})


export default ReducerApp;