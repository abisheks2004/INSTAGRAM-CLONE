import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HashRouter, Routes, Route } from 'react-router-dom'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'

createRoot(document.getElementById('root')).render(
  <HashRouter basename="/INSTAGRAM-CLONE/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/story/:id/:tot" element={<ViewStory />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </HashRouter>
);
