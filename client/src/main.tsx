import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "../index.css"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login.tsx"
import Header from "./components/Header.tsx"

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
