import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/main-layout/MainLayout";
import Home from "../../pages/home/Home";
import ErrorPage from "../../pages/error-page/ErrorPage";
import PrivateRoute from "../private-route/PrivateRoute";
import AddProduct from "../../pages/add-product/AddProduct";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import LoginPage from "../../pages/login-page/LoginPage";
import BrandPage from "../../pages/home/brand-page/BrandPage";

const MainRoute = createBrowserRouter([
    {
        path: `/`,
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: `/`,
                element: <Home></Home>
            },
            {
                path:'/:name',
                element: <PrivateRoute><BrandPage></BrandPage></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/brands/${params.name}`)
            },
            {
                path: `/login`,
                element: <LoginPage></LoginPage>,
                children: [
                    {
                        path: `/login`,
                        element: <Login></Login>
                    },
                    {
                        path: `/login/register`,
                        element: <Register></Register>
                    }
                ]
            },
            {
                path: `/add-product`,
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            }
        ]
    }
])

export default MainRoute;