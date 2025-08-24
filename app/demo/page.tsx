'use client'

import { useEffect } from 'react'

export default function DemoPage() {
  useEffect(() => {
    // Add the custom CSS variables and styles
    const style = document.createElement('style')
    style.textContent = `
      :root {
        --black: #000000;
        --background: #F7F4EE;
        --sidebar-bg: #F5F1E9;
        --border-color: #E7DFD2;
        --active-bg: #E5DAC9;
        --hover-bg: #F3EFE6;
      }
      body {
        font-family: 'Inter', sans-serif;
        background-color: var(--background);
        color: var(--black);
      }
      .sidebar {
        background-color: var(--sidebar-bg);
        border-right: 1px solid var(--border-color);
      }
      .main-content {
        background-color: var(--background);
      }
      .header {
        background-color: var(--sidebar-bg);
        border-bottom: 1px solid var(--border-color);
      }
      .sidebar-item {
        color: var(--black);
      }
      .sidebar-item:hover, .sidebar-item.active {
        background-color: var(--active-bg);
        color: var(--black);
      }
      .sidebar-icon {
        font-size: 20px;
      }
      .project-item.active, .project-item:hover {
        background-color: var(--hover-bg);
      }
      .project-item.active {
         background-color: var(--active-bg);
      }
      .icon-color {
        color: #5C5C5C;
      }
      .active-icon {
        background-color: var(--active-bg);
        color: var(--black);
      }
    `
    document.head.appendChild(style)

    // Add Material Icons font
    const materialIconsLink = document.createElement('link')
    materialIconsLink.href = 'https://fonts.googleapis.com/icon?family=Material+Icons'
    materialIconsLink.rel = 'stylesheet'
    document.head.appendChild(materialIconsLink)

    // Add Inter font
    const interLink = document.createElement('link')
    interLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
    interLink.rel = 'stylesheet'
    document.head.appendChild(interLink)

    return () => {
      document.head.removeChild(style)
      document.head.removeChild(materialIconsLink)
      document.head.removeChild(interLink)
    }
  }, [])

  return (
    <div className="flex h-screen">
      <aside className="sidebar w-16 flex flex-col items-center py-4 space-y-6">
        <div className="p-2 bg-[var(--active-bg)] rounded-md">
          <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M2 7L12 12" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M22 7L12 12" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            <path d="M12 22V12" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </div>
        <span className="material-icons sidebar-icon icon-color">add_circle_outline</span>
        <span className="material-icons sidebar-icon icon-color">mail_outline</span>
        <span className="material-icons sidebar-icon icon-color">chat_bubble_outline</span>
        <span className="material-icons sidebar-icon icon-color">folder_open</span>
        <span className="material-icons sidebar-icon icon-color">bar_chart</span>
        <span className="material-icons sidebar-icon active-icon p-2 rounded-md">check_box_outline_blank</span>
        <span className="material-icons sidebar-icon icon-color">cloud_upload</span>
        <span className="material-icons sidebar-icon icon-color">arrow_downward</span>
        <span className="material-icons sidebar-icon icon-color">trending_up</span>
        <span className="material-icons sidebar-icon icon-color">help_outline</span>
        <div className="mt-auto">
          <div className="w-8 h-8 bg-[var(--active-bg)] rounded-full flex items-center justify-center text-black font-bold">AG</div>
        </div>
      </aside>
      
      <aside className="sidebar w-64 flex-shrink-0 p-4">
        <h1 className="text-xl font-bold mb-6">Tracker</h1>
        <button className="sidebar-item w-full flex items-center justify-between p-2 rounded-md mb-4 bg-black text-white">
          <div className="flex items-center">
            <span className="material-icons sidebar-icon mr-3">add</span>
            New issue
          </div>
          <span className="material-icons sidebar-icon">expand_more</span>
        </button>
        <nav className="space-y-2">
          <a className="flex items-center p-2 rounded-md hover:bg-[var(--hover-bg)]" href="#">
            <span className="material-icons sidebar-icon mr-3">person_outline</span>
            My issues
          </a>
          <a className="flex items-center p-2 rounded-md hover:bg-[var(--hover-bg)]" href="#">
            <span className="material-icons sidebar-icon mr-3">check_box_outline_blank</span>
            All issues
          </a>
        </nav>
        <div className="mt-8">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Filtered Views</h2>
        </div>
        <div className="mt-8">
          <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center">
            <span className="material-icons text-sm mr-1">arrow_drop_down</span>
            Your Projects
          </h2>
          <div className="space-y-1 mt-2">
            <div className="project-item active rounded-md">
              <div className="flex items-center p-2">
                <span className="material-icons text-green-700 mr-3">home</span>
                <span className="font-semibold">HULY</span>
              </div>
              <div className="pl-8 space-y-1">
                <a className="flex items-center p-2 rounded-md hover:bg-[var(--hover-bg)]" href="#">
                  <span className="material-icons sidebar-icon mr-3">check_box</span>
                  Issues
                </a>
                <a className="flex items-center p-2 rounded-md hover:bg-[var(--hover-bg)]" href="#">
                  <span className="material-icons sidebar-icon mr-3">category</span>
                  Components
                </a>
                <a className="flex items-center p-2 rounded-md hover:bg-[var(--hover-bg)]" href="#">
                  <span className="material-icons sidebar-icon mr-3">flag</span>
                  Milestones
                </a>
                <a className="flex items-center p-2 rounded-md hover:bg-[var(--hover-bg)]" href="#">
                  <span className="material-icons sidebar-icon mr-3">list_alt</span>
                  Templates
                </a>
                <a className="flex items-center p-2 rounded-md hover:bg-[var(--hover-bg)]" href="#">
                  <span className="material-icons sidebar-icon mr-3">merge_type</span>
                  Pull requests
                </a>
              </div>
            </div>
            <div className="project-item rounded-md hover:bg-[var(--hover-bg)]">
              <div className="flex items-center p-2">
                <div className="w-6 h-6 bg-purple-200 rounded-md flex items-center justify-center text-purple-800 font-bold text-sm mr-3">
                  H
                </div>
                <span className="font-semibold">HULY 3D</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto pt-4">
          <a className="flex items-center p-2 rounded-md hover:bg-[var(--hover-bg)]" href="#">
            <span className="material-icons sidebar-icon mr-3">help_outline</span>
            Help & Support
          </a>
        </div>
      </aside>
      
      <main className="flex-1 flex flex-col">
        <header className="header h-14 flex-shrink-0 flex items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center bg-[var(--hover-bg)] rounded-md">
              <div className="px-3 py-1 border-r border-[var(--border-color)] text-sm font-semibold">Reception</div>
              <div className="px-3 py-1 flex items-center text-sm">
                <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-2">NK</span>
                <span className="material-icons text-sm">add</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex items-center space-x-2 text-sm">
              <span className="material-icons icon-color">info_outline</span>
              <span className="text-gray-600">Anonymous Guest Demo</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="material-icons icon-color">search</span>
            <span className="material-icons icon-color">help_outline</span>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-gray-600">Calcutta</span>
              <span className="text-gray-600">07:59</span>
            </div>
            <span className="material-icons icon-color">settings</span>
          </div>
        </header>
        <div className="main-content flex-1 p-6">
          <div className="w-full h-full border-2 border-dashed border-[var(--border-color)] rounded-lg"></div>
        </div>
      </main>
      
      <div className="w-14 flex-shrink-0 bg-[var(--sidebar-bg)] border-l border-[var(--border-color)] flex flex-col items-center py-4">
        <span className="material-icons icon-color">widgets</span>
      </div>
    </div>
  )
}
