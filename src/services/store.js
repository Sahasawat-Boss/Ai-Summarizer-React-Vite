//Store: Global State
//to save intire information of the application
//Most case, Reduce to only save a specifice slice
//In this case will only be article API
//Redux Docs: https://react-redux.js.org/introduction/getting-started

import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article"; 
// Importing the API slice for handling article-related state and requests

// Creating and configuring the Redux store
export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer, 
        // Adding the API slice reducer to manage API state
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(articleApi.middleware),
    // Adds RTK Query's middleware to enable caching, automatic refetching, and request lifecycle tracking
});
