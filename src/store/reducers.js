import { createReducer } from "@reduxjs/toolkit";
import initState from "./init_state";
import {GetPopularMovieDataAction, SetPopLoading, TogglePopularTypeAction ,GetSearchResult, CheckSearchSubject,
         GetActorRes,GetMovieResAction,GetOnTvRes, ToggleSearchResStateAction,ShowUiSearchActin }from "./action";

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
    }),
    [CheckSearchSubject.type] : (state , action) =>({
        ...state,
        searchSubject :action.payload
    }),
    [GetSearchResult.type]: (state , action) => {      
        if (action.payload == null) {
            return ({
                ...state,
                searchResult : []
            })
        }return(
          {  
            ...state,
            searchResult :state.searchResult.concat(action.payload)}
        )},
          [GetActorRes.type]: (state , action) => ({
            ...state,
            searchActorRes: action.payload,
        }),
        [GetOnTvRes.type]: (state , action) => ({
            ...state,
            searchOnTvRes: action.payload,
        }),
        [GetMovieResAction.type]: (state , action) => ({
            ...state,
            searchMovieRes: action.payload,
        }),
        
        [ToggleSearchResStateAction.type ] : (state , action) => ({
            ...state,
            searchResState  :action.payload
        }),
        [ShowUiSearchActin.type ] : (state , action) => ({
            ...state,
           showUiRes :[action.payload]
        }),

    
})
export default  ReducerApp;
