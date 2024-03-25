import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,

    children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: () => fetch('booksData.json'),
        },

        {
          path:'/book-details/:id',
          element: <BookDetails></BookDetails>,
          loader: ({params}) => fetch(`booksData.json/${params.id}`)

        }
    ]

  },
]);
