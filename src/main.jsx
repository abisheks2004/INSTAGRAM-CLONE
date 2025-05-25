import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'

function ErrorPage() {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>The page you are looking for doesn't exist or an error occurred.</p>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,  // ← Add this line here
  },
  {
    path: '/story/:id/:tot',
    element: <ViewStory />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
