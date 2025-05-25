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
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Feed /> // Optional: if you want Feed to be a separate route too
      },
      {
        path: 'story/:id/:tot',
        element: <ViewStory />
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
