import { PROJECT_URL } from "../URLs";
import { apiSlice } from "./apiSlice";
import { Project } from "../../model/Project";

export const projectApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query<Project[], void>({
            query: () => ({
                url: PROJECT_URL,
                method: "GET",
            }),
            providesTags: ["Projects"],            
            keepUnusedDataFor: 5,
        }),
        getProject: builder.query<Project, string>({
            query: (id: string) => ({
                url: `${PROJECT_URL}/${id}`,
                method: "GET",
            }),
            providesTags: ["Projects"],
            keepUnusedDataFor: 5,
        }),
        createProject: builder.mutation<Project, Project>({
            query: (body: Project) => ({
                url: PROJECT_URL,
                method: "POST",
                body,
            }),
        }),
        updateProject: builder.mutation<Project, Project>({
            query: (body: Project) => ({
                url: `${PROJECT_URL}/${body.id}`,
                method: "PUT",
                body,
            }),
        }),
        deleteProject: builder.mutation<string, string>({
            query: (id: string) => ({
                url: `${PROJECT_URL}/${id}`,
                method: "DELETE",
            }),
        }),
    })
});


export const {
    useGetProjectsQuery,
    useGetProjectQuery,
    useCreateProjectMutation,
    useUpdateProjectMutation,
    useDeleteProjectMutation,
} = projectApiSlice;
