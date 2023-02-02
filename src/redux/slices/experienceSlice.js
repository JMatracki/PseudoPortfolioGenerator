import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    experience: [],
}

const slice = createSlice({
    name: 'experience',
    initialState,
    reducers: {
        updateExperienceInfo: (state, action) => {
            if(!state.experience.find(el => el.id === action.payload.id)){
                state.experience.push(action.payload)
            }
        },
        removeExperienceInfo: (state, action) => {
            state.experience = state.experience.filter((experience) => {
                return experience.id !== action.payload
            })
        },
        resetExperience: (state) => {
            state.experience = [];
        }
    }
})

export default slice.reducer;

export const experience = state => state.experience.experience;

export const {updateExperienceInfo, removeExperienceInfo, resetExperience} = slice.actions;