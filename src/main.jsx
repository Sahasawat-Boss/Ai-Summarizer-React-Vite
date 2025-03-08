import React from "react"; // Importing React to use JSX and component features
import ReactDOM from "react-dom/client"; // React 18+ method for rendering the app
import { Provider } from "react-redux"; // Provides the Redux store to the entire React app

import App from "./App"; // Main application component
import { store } from "./services/store"; // Importing the Redux store

// Creating a root and rendering the React application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Enables strict mode to help identify potential issues in development */}
    <Provider store={store}>
      {/* Makes the Redux store available to all components in the app */}
      <App />
    </Provider>
  </React.StrictMode>
);
