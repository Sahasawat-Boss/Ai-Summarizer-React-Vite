import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
//const axios = require('axios'); // Importing Axios 
// (not used in this code but might be needed elsewhere)

// Key to the environment variable file
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// Creating an API slice using RTK Query
export const articleApi = createApi({
    reducerPath: 'articleApi', // Defines the key to store API-related state in the Redux store

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/', // API base URL
        prepareHeaders: (headers) => {
            // Setting required headers for the RapidAPI request
            headers.set('X-RapidAPI-Key', rapidApiKey); // Adds the API key from the .env file
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers; // Returns the modified headers
        },
    }),

    endpoints: (builder) => ({
        // Defining API endpoints
        getSummary: builder.query({
            // Creating a query endpoint named 'getSummary'
            query: (params) =>
                `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
            // Constructs the query string with the article URL and summary length
        }),
    }),
});

// Exporting the lazy query hook for fetching data on demand only not at the start
export const { useLazyGetSummaryQuery } = articleApi;
