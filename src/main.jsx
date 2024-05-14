import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Index from "./routes/index";
// Create and render a browser router in main.jsx
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Root, { loader as rootloader, action as rootAction } from "./routes/root";
import ErrorPage from "./errror-page";
import Contact, {loader as contactLoader} from "./routes/contact";
import EditContact, {
  action as editAction
} from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";


// Create and render a browser router in main.jsx
const router = createBrowserRouter([
  {
    path: "/",
    // Set <Root> as the root route's element
    element: <Root />,
    // Set the <ErrorPage> as the errorElement on the root route
    errorElement: <ErrorPage />,
    loader: rootloader,
    action: rootAction,
    // Nested Routes
    children: [
      {
        index: true, element: <Index />,
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ],
  },
  // create a new route
  // {
  //   path: "contacts/:contactId",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Create and render a browser router in main.jsx */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
