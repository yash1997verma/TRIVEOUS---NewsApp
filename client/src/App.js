import './App.css';
//react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
//hot toast
import toast, { Toaster } from 'react-hot-toast';
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children:[
        {
          index: true,
          element: <LandingPage />
        },
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/signIn',
          element: <SignIn />,
        },
        {
          path: '/signUp',
          element: <SignUp />,
        },
        {
          path: '/forgotPassword',
          element: <ForgotPassword />,
        },
      ]
    }
  ]);

  return (
    <>

      <RouterProvider router={router} />
      <Toaster />
    </>
    
  );
}

export default App;
