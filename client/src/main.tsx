import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login.tsx"
import Header from "./components/Header.tsx"
import Register from "./pages/Register.tsx"

const Layout = () => (
  <>
    <Header />
    <div className="flex items-center justify-center w-full h-full">
      <Outlet />
    </div>
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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
