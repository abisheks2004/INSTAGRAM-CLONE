import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'
import NotFound from './NotFound.jsx' // ✅ Add this
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound /> // ✅ Add error handler
  },
  {
    path: '/story/:id/:tot',
    element: <ViewStory />,
    errorElement: <NotFound /> // Optional: can also add here
  },
  {
    path: '/profile',
    element: <Profile />,
    errorElement: <NotFound /> // Optional
  },
  {
    path: '*',
    element: <NotFound /> // ✅ Catch-all route (optional but good practice)
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
