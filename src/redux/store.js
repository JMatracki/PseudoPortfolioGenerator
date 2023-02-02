import {configureStore} from "@reduxjs/toolkit"
import contactSlice from "./slices/contactSlice"
import educationSlice from "./slices/educationSlice"
import experienceSlice from "./slices/experienceSlice"
import mainInfoSlice from "./slices/mainInfoSlice"
import hobbiesSlice from "./slices/hobbiesSlice"
import skillsSlice from "./slices/skillsSlice"

export default configureStore({
    reducer: {
        mainInfo: mainInfoSlice,
        contact: contactSlice,
        education: educationSlice,
        experience: experienceSlice,
        skills: skillsSlice,
        hobby: hobbiesSlice,
    }
})