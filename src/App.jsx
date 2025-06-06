import React, { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggestions'

function App() {
  const [showSuggestions, setShowSuggestions] = useState(false)

  const toggleSuggestions = () => setShowSuggestions(prev => !prev)

  return (
    <div className="flex flex-col sm:grid sm:grid-cols-12 h-screen bg-stone-50 overflow-hidden relative">

      {/* Sidebar */}
      <div className="sm:col-span-2 w-full h-auto sm:h-full overflow-auto border-b sm:border-b-0 sm:border-r border-gray-200">
        <Sidebar onSuggestionsClick={toggleSuggestions} />
      </div>

      {/* Feed */}
      <div className="sm:col-span-6 w-full h-full overflow-y-auto">
        <Feed />
      </div>

      {/* Desktop Suggestions  */}
      <div className="hidden sm:block sm:col-span-4 w-full h-full overflow-auto border-l border-gray-200">
        <Suggestions />
      </div>

      {/* Mobile Suggestions */}
      {showSuggestions && (
        <div className="fixed inset-0 bg-gray-300 z-50 sm:hidden shadow-lg">
          <div className="flex justify-end p-2 border-b border-gray-200">
            <button
              onClick={toggleSuggestions}
              className="text-gray-700 font-bold px-3 py-1 hover:bg-gray-200 rounded"
              aria-label="Close suggestions"
            >
              Close
            </button>
          </div>
          <Suggestions onClose={toggleSuggestions} />
        </div>
      )}
    </div>
  )
}

export default App
