import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    skills: [],
}

const slice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        updateSkillsInfo: (state, action) => {
            if(!state.skills.find(el => el.id === action.payload.id)){
                state.skills.push(action.payload)
            }
        },
        removeSkill: (state, action) => {
            state.skills = state.skills.filter((item) => {
                return item.id !== action.payload
            })
        },
        resetSkills: (state) => {
            state.skills = [];
        },
    }
})

export default slice.reducer;

export const skills = state => state.skills.skills;

export const {updateSkillsInfo, resetSkills, removeSkill} = slice.actions;