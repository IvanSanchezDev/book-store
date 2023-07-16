import { createSlice } from "@reduxjs/toolkit";

export const listReadingSlice=createSlice({
    name:"readingList",
    initialState:{
        totalCount:0,
        books:[]
    },

    reducers:{
        addBookToReading:(state, action)=>{
            state.totalCount+=1,
            state.books=[...state.books, action.payload]
        }
    }
})

export const { addBookToReading }=listReadingSlice.actions;

export default listReadingSlice.reducer;