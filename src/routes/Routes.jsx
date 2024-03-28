import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import BookDetails from "../pages/BookDetails";
import ListedBooks from "../pages/ListedBooks";
import ReadList from "../components/ReadList";
import Wishlist from "../components/Wishlist";
import PagesToRead from "../pages/PagesToRead";
import ErrorPage from "../pages/ErrorPage";
import Feedback from "../pages/Feedback";
import Subscribe from "../pages/Subscribe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement:<ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "book-details/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("booksData.json"),
      },

      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("booksData.json"),
        children: [
          {
            index: true,
            element: <ReadList></ReadList>,
          },

          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },

      {
        path: "/barChart",
        element: <PagesToRead></PagesToRead>,
      },

      {
        path: "/feedback",
        element: <Feedback></Feedback>,
      },

      {
        path: "/subscribe",
        element: <Subscribe></Subscribe>,
      },
    ],
  },
]);
