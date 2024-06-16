import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client"
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestrauntDetails from "./components/RestruantDetails";
import UserContext from "./utilities/UserContext";


// Dynamic import for lazy loading
// though we don't need in our small application.
const About = lazy(()=>import('./components/About'))

const AppLayout = () => 
{
    const [userContextData, setUserContextData] = useState("")
    return (
    <div className="app_layout mx-2" >
        <UserContext.Provider value={{showAnywhere:userContextData, setUserContextData}} >
        <AppHeader/>
        <Outlet />
        </UserContext.Provider>
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"))

const appRoutes = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout/>,
        children:[
            {
                path:'/',
                element: <AppBody />,
            },
            {
                path:'/about',
                element: <Suspense fallback={<h1>Loading...</h1>} > <About /> </Suspense>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/restraunt/:restoId',
                element: <RestrauntDetails />
            },
        ],
        errorElement: <ErrorPage />
    },
])

// root.render(<AppLayout />)
root.render(<RouterProvider router={appRoutes} />)