import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'
import NotFound from './NotFound.jsx'
import Feed from './Feed.jsx'

import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Feed />} />
        <Route path="story/:id/:tot" element={<ViewStory />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
)
