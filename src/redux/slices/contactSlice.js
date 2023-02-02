import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    address: "",
    phone: "",
    email: "",
}

const slice = createSlice({
    name: "contact",
    initialState,
    reducers: {
        updateContactInfo: (state, action) => {
            state.address = action.payload.address;
            state.phone = action.payload.phone;
            state.email = action.payload.email;
        },
        resetContact: (state) => {
            state.address = "";
            state.phone = "";
            state.email = "";
        }
    }
})

export default slice.reducer;

export const address = state => state.contact.address
export const phone = state => state.contact.phone
export const email = state => state.contact.email

export const {updateContactInfo, resetContact} = slice.actions