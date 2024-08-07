import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Top10 from './pages/Top10';
import Trending from './pages/Trending';
import Watchlist from './pages/Watchlist';
import { Outlet, Route, RouterProvider, createBrowserRouter,} from 'react-router-dom';

const Applayout =() =>{
  return (
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/top10', element: <Top10 />},
      {path: '/trending', element: <Trending />},
      {path: '/watchlist', element: <Watchlist />},
      
    ],
},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

