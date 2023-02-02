import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hobbies: [],
}

const slice = createSlice({
    name: 'hobby',
    initialState,
    reducers: {
        updateHobbyInfo: (state, action) => {
            if(!state.hobbies.find(el => el.id === action.payload.id)){
                state.hobbies.push(action.payload)
            }
        },
        removeHobbyInfo: (state, action) => {
            state.hobbies = state.hobbies.filter((hobby) => {
                return hobby.id !== action.payload;
            })
        },
        resetHobby: (state) => {
            state.hobbies = [];
        }
    }
})

export default slice.reducer;

export const hobbies = state => state.hobby.hobbies;

export const {updateHobbyInfo, removeHobbyInfo, resetHobby} = slice.actions;