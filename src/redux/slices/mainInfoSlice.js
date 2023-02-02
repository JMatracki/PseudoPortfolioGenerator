import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: "",
    role: "",
    aboutMe: "",
    location: "",
}

const slice = createSlice({
    name: 'mainInfo',
    initialState,
    reducers: {
        updateMainInfo: (state, action) => {
            state.name = action.payload.name;
            state.role = action.payload.role;
            state.aboutMe = action.payload.aboutMe;
            state.location = action.payload.location;
        },
        resetMainInfo: (state) => {
            state.name = "";
            state.role = "";
            state.aboutMe = "";
            state.location = "";
        }
    }
})

export default slice.reducer;

export const name = state => state.mainInfo.name
export const role = state => state.mainInfo.role
export const aboutMe = state => state.mainInfo.aboutMe
export const location = state => state.mainInfo.location

export const {updateMainInfo, resetMainInfo} = slice.actions;