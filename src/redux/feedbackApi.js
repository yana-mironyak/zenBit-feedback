import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = 'http://localhost:8088';

export const feedbackApi = createApi({
    reducerPath: 'feedbackApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes: ['Feedback'],

    endpoints: builder => ({
        createFeedback: builder.mutation({
            query: data => ({
                url: '/feedback',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Feedback']
        })
    })
});

export const { useCreateFeedbackMutation } = feedbackApi;