import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        about: '',
    },
    professionalDetails: {
        skills: [],
        portfolio: {
            gitHub: '',
            behance: '',
            slack: '',
            drive: '',
            others: ''
        }
    }
}

const userSlice = createSlice({
    name: 'User',
    initialState: initialState,
    reducers: {
        // creating account
        createAccount: (state, action) =>  {
            const { firstName, lastName, email, password } = action.payload;
            state.user.firstName = firstName;
            state.user.lastName = lastName;
            state.user.email = email;
            state.user.password = password;
        },

        // updating account
        updateAccount: (state, action) => {
            const { firstName, lastName, address, about } = action.payload;
            state.user.firstName = firstName;
            state.user.lastName = lastName;
            state.user.address = address;
            state.user.about = about;
        },

        // Setting new password
        changePassword: (state, action) => {
            const { password } = action.payload;
            state.user.password = password;
        },

        // Delete Account
        deleteAccount: (state) => {
            state.user = initialState.user;
        },

        // adding portfolio links
        addPortfolio: (state, action) => {
            const { gitHub, behance, slack, drive, others } = action.payload;
            state.professionalDetails.skills = action.payload;
            state.professionalDetails.portfolio.gitHub = gitHub;
            state.professionalDetails.portfolio.behance = behance;
            state.professionalDetails.portfolio.slack = slack;
            state.professionalDetails.portfolio.drive = drive;
            state.professionalDetails.portfolio.others = others;
        },

        // adding skills to the professionalDetails.skills array
        addSkills: (state, action) => {
            state.professionalDetails.skills.push(...action.payload);
        }
    }
});

export default userSlice.reducer;
export const { createAccount, updateAccount, changePassword, deleteAccount, addPortfolio, addSkills } = userSlice.actions;