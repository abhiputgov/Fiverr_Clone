import { useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Add from './pages/add/Add';
import Gig from './pages/gig/Gig';
import Gigs from './pages/gigs/Gigs';
import Home from './pages/home/Home';
import Message from './pages/message/Message';
import Messages from './pages/messages/Messages';
import MyGigs from './pages/myGigs/MyGigs';
import Orders from './pages/orders/Orders';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './App.scss';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/gigs', element: <Gigs /> },
        { path: '/gig/:id', element: <Gig /> },
        { path: '/orders', element: <Orders /> },
        { path: '/mygigs', element: <MyGigs /> },
        { path: '/addGig', element: <Add /> },
        { path: '/messages', element: <Messages /> },
        { path: '/message/:id', element: <Message /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
