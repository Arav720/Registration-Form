import React from 'react'

const Header = () => {
  return (
    <header className="bg-white border-b border-neutral-200 py-4 px-4 shadow-sm">
      <div className="container mx-auto max-w-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-8 h-8 text-primary-500"
            >
              <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0-.75.75v16.5c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75H4.5ZM9 9.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z" clipRule="evenodd" />
              <path d="M9 6.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H9Z" />
            </svg>
            <h1 className="text-xl font-semibold text-neutral-800">Visitor Registration</h1>
          </div>
          <div className="text-sm text-neutral-500">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header