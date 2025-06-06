import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ViewStory from './ViewStory.jsx';
import Profile from './Profile.jsx';
import SuggestionsPage from './SuggestionsPage.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/story/:id/:tot', element: <ViewStory /> },
  { path: '/profile', element: <Profile /> },
  { path: '/suggestions', element: <SuggestionsPage /> } // 👈 add this
],{ basename: '/instagram-clone' });

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
