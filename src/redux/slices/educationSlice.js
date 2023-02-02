import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    schools: [],
}

const slice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        updateEducationInfo: (state, action) => {
            if(!state.schools.find(el => el.id === action.payload.id)){
                state.schools.push(action.payload)
            }
        },
        removeEducationInfo: (state, action) => {
            state.schools = state.schools.filter((item) => {
                return item.id !== action.payload
            })
        },
        resetEducation: (state) => {
            state.schools = [];
        }
    }
})

export default slice.reducer;

export const schools = state => state.education.schools;

export const {updateEducationInfo, removeEducationInfo, resetEducation} = slice.actions;