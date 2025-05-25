import React from 'react'
import { Outlet } from 'react-router-dom'  // Added import
import './App.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggestions'

function App() {
  return (
    <div className="flex mx-auto bg-stone-50 h-screen box-border overflow-hidden ">
      {/* Sidebar */}
      <div className="w-[20%] h-full overflow-hidden">
        <Sidebar />
      </div>

      {/* Feed + Outlet for nested routes */}
      <div className="w-1/2 h-full overflow-y-auto">
        <Feed />
        <Outlet />  {/* This renders your nested routes here */}
      </div>

      {/* Suggestions */}
      <div className="w-[30%] h-full overflow-hidden">
        <Suggestions />
      </div>
    </div>
  )
}

export default App
