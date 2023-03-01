import {Navigate, RouteObject, useRoutes} from 'react-router-dom';
import {lazy} from 'react'
import WrapperRouteComponent from './WrapperRouteComponent';

const Home = lazy(() => import('pages/home/Home'))
const Login = lazy(() => import('pages/signIn/SignIn'))

const routeList: RouteObject[] = [
    {
        path: '/signin',
        element: <WrapperRouteComponent element={<Login/>} titleId="SignIn" />
    },
    {
        path: '/',
        element: <Navigate to='/home' />,
    },
    {
        path: '/home',
        element: <WrapperRouteComponent element={<Home />} titleId="Home" />,
    },

]

const AppRouting: React.FC = () => {
    const element = useRoutes(routeList);

    return element;
}

export default AppRouting;