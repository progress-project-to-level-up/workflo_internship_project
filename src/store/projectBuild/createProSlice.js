import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    project: [],
}

const projectSlice = createSlice({
    name: 'Project',
    initialState: initialState,
    reducers: {
        // creating project
        createProject: (state, action) => {
            const { projectName, projectCategory, rolesNeeded, projectStage, projectSummary, projectDesc } = action.payload;
            const newProject = {
                projectName: projectName,
                projectCategory: projectCategory,
                rolesNeeded: rolesNeeded,
                projectStage: projectStage,
                projectSummary: projectSummary,
                projectDesc: projectDesc
            }
            state.project.push(newProject);
        },

        // adding collaborators
        addTeam: (state, action) => {
            const { projectId, collaborators } = action.payload;
            const projectIndex = state.project.findIndex(pro => pro.projectName === projectId);
            if (projectIndex !== -1) {
                // If project is found, add collaborators to the project
                state.project[projectIndex] = {
                    ...state.project[projectIndex],
                    collaborators: collaborators
                };
            }
        }
    }
})

export default projectSlice.reducer;
export const { createProject, addTeam } = projectSlice.actions;