import React from 'react'
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

      {/* Feed */}
      <div className="w-1/2 h-full overflow-y-auto">
        <Feed />
      </div>

      {/* Suggestions */}
      <div className="w-[30%] h-full overflow-hidden">
        <Suggestions />
      </div>
    </div>
  )
}

export default App


// rfce