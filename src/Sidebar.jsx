import React from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function Sidebar() {
    const navigate = useNavigate()

    const menuItems = [
        { name: 'Home', icon: HomeIcon, path: '/' },
        { name: 'Search', icon: SearchIcon, path: '/search' },
        { name: 'Create', icon: CreateIcon, path: '/create' },
        { name: 'Suggestions', icon: SuggestionIcon, path: '/suggestions' },
        { name: 'Profile', icon: ProfileIcon, path: '/profile' },
        { name: 'Reels', icon: ReelsIcon, path: '/reels' },
        { name: 'Messages', icon: MessagesIcon, path: '/messages' },
        { name: 'Notifications', icon: NotificationIcon, path: '/notifications' },
        
        
    ]

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden md:flex flex-col gap-2 w-48 p-4">
                <img src='/instagram-clone/assets/instagramtext.png' alt="logo" className='w-28 mb-6' />
                {menuItems.map((item) => (
                    <div key={item.name}
                        className='flex items-center gap-2 p-2 cursor-pointer rounded-md hover:bg-gray-100 transition'
                        onClick={() => navigate(item.path)}
                    >
                        <item.icon className="w-6 h-6" />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Mobile Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 md:hidden flex justify-around bg-white border-t py-2 z-50">
                {menuItems.slice(0, 5).map((item) => (
                    <div key={item.name}
                        className="flex flex-col items-center text-xs cursor-pointer"
                        onClick={() => navigate(item.path)}
                    >
                        <item.icon className="w-5 h-5" />
                        {item.name}
                    </div>
                ))}
            </div>
        </>
    )
}

// SVG Icon Components
const HomeIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955a1.125 1.125 0 0 1 1.591 0L21.75 12" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75v10.125a1.125 1.125 0 0 0 1.125 1.125h3.375v-4.875a1.125 1.125 0 0 1 1.125-1.125h2.25a1.125 1.125 0 0 1 1.125 1.125V21h3.375a1.125 1.125 0 0 0 1.125-1.125V9.75" />
    </svg>
)

const SearchIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
)

const SuggestionIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25m-4.5-13.5h16.5m0 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
    </svg>
)

const ReelsIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
)

const MessagesIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
    </svg>
)

const NotificationIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
)

const CreateIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
)

const ProfileIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0A9 9 0 1 0 3 12c0 2.197.79 4.205 2.107 5.775" />
    </svg>
)

export default Sidebar
