import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout/RootLayout";
import "./App.css";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import Loading from "./components/Loading/Loading";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <Loading></Loading>,
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/products",
        loader: ()=> fetch('https://fakestoreapi.com/products'),
        element: <Products></Products>,
      },
      {
        path: "/products/:pId",
        loader: ({params})=> fetch(`https://fakestoreapi.com/products/${params.pId}`),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
