import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Creating an API slice using RTK Query
export const articleApi = createApi({
    reducerPath: 'articleApi', 
    // Defines the key to store API-related state in the Redux store
});
