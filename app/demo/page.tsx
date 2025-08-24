'use client'

import { useEffect, useState } from 'react'

export default function DemoPage() {
  const [view, setView] = useState<'inbox' | 'thread' | 'planner' | 'main' | 'cards'>('inbox')
  const [integrationsOpen, setIntegrationsOpen] = useState(false)

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
        cursor: pointer;
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

  const iconCls = (active: boolean) => `material-icons sidebar-icon ${active ? 'active-icon p-2 rounded-md' : 'icon-color'}`

  const renderContent = () => {
    switch (view) {
      case 'inbox':
        return (
          <div className="grid grid-cols-4 gap-6 h-full">
            <div className="col-span-1 bg-white rounded-lg border border-[var(--border-color)]">
              <div className="p-3 font-semibold border-b border-[var(--border-color)]">Channels</div>
              <div className="p-2 space-y-1 text-sm">
                {['General','Random','Query & Discussions','Huly Browser','Huly AI'].map((c)=> (
                  <div key={c} className="flex items-center justify-between px-2 py-2 rounded hover:bg-[var(--hover-bg)]">
                    <span>{c}</span>
                    <span className="material-icons text-xs icon-color">videocam</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3 bg-white rounded-lg border border-[var(--border-color)]">
              <div className="p-3 font-semibold border-b border-[var(--border-color)]">Inbox</div>
              <div className="p-4 space-y-3 overflow-auto h-[calc(100%-48px)]">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="p-3 rounded border border-[var(--border-color)] hover:bg-[var(--hover-bg)]">
                    <div className="text-sm"><strong>Charles Rollet</strong> • Hopefully things will work out well…</div>
                    <div className="text-xs text-gray-600 mt-1">{12 - i} hours ago</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      case 'thread':
        return (
          <div className="h-full w-full flex flex-col">
            <div className="text-sm font-semibold tracking-tight mb-4 text-neutral-800">clavio</div>
            <div className="flex-1 flex flex-col items-center justify-start pt-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 text-center">What should we build today?</h1>
              <p className="mt-3 text-neutral-700 text-center max-w-2xl">Create stunning apps & websites by chatting with AI.</p>
              <div className="mt-8 w-full max-w-2xl">
                <div className="bg-white rounded-xl shadow-sm border border-[var(--border-color)]">
                  <div className="p-4">
                    <div className="h-28 rounded-md border border-[var(--border-color)] bg-[var(--background)] flex items-center px-4 text-neutral-500">Type your idea and we'll build it together.</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 mt-4 text-sm text-neutral-700">
                  <span className="text-neutral-500">or import from</span>
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[var(--border-color)] rounded-md hover:bg-[var(--hover-bg)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-600">
                      <path d="M3 4a1 1 0 011-1h7a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm13 0a1 1 0 011-1h3a1 1 0 011 1v16a1 1 0 01-1 1h-3a1 1 0 01-1-1V4z" />
                    </svg>
                    Trello
                  </button>
                  <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[var(--border-color)] rounded-md hover:bg-[var(--hover-bg)]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <g fill="currentColor">
                        <path d="M7.5 6.5h7.2l2.6 1.8H10z" />
                        <rect x="6" y="8" width="12" height="11" rx="1.6" />
                      </g>
                      <path d="M9 17V10l6 7V10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Notion
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      case 'planner':
        return (
          <div className="grid grid-cols-4 gap-6 h-full">
            <div className="col-span-1 bg-white rounded-lg border border-[var(--border-color)] p-3">
              <div className="font-semibold mb-4">Planner</div>
              <div className="space-y-2">
                {['Unplanned','Planned','All'].map(s => (
                  <div key={s} className="px-2 py-2 rounded hover:bg-[var(--hover-bg)]">{s}</div>
                ))}
              </div>
              <div className="mt-6 text-sm text-gray-700">August 2025</div>
            </div>
            <div className="col-span-3 bg-white rounded-lg border border-[var(--border-color)]">
              <div className="p-3 font-semibold border-b border-[var(--border-color)]">Schedule: Today</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="border border-[var(--border-color)] rounded-lg h-80"></div>
                <div className="border border-[var(--border-color)] rounded-lg h-80"></div>
              </div>
            </div>
          </div>
        )
      case 'main':
        return (
          <div className="bg-white rounded-lg border border-[var(--border-color)] p-4 h-full overflow-auto">
            <div className="font-semibold mb-4">Main</div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({length:12}).map((_,i)=> (
                <div key={i} className="border border-[var(--border-color)] rounded-lg h-28 flex items-center justify-center">Card {i+1}</div>
              ))}
            </div>
          </div>
        )
      case 'cards':
        return (
          <div className="grid grid-cols-4 gap-6 h-full">
            <div className="col-span-1 bg-white rounded-lg border border-[var(--border-color)] p-3">
              <button className="w-full sidebar-item p-2 rounded-md mb-3 text-left">+ Create Card</button>
              <div className="text-xs font-semibold text-gray-600 mb-2">Spaces</div>
              <div className="space-y-1 text-sm">
                {['Community','Content & Media','Growth','Marketing','Partnerships','Product'].map(s => (
                  <div key={s} className="px-2 py-2 rounded hover:bg-[var(--hover-bg)]">{s}</div>
                ))}
              </div>
            </div>
            <div className="col-span-3 bg-white rounded-lg border border-[var(--border-color)] flex items-center justify-center text-gray-600">
              Select a space to view cards
            </div>
          </div>
        )
    }
  }

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
        <span className={iconCls(false)}>add_circle_outline</span>
        <span onClick={() => setView('inbox')} className={iconCls(view==='inbox')}>mail_outline</span>
        <span onClick={() => setView('thread')} className={iconCls(view==='thread')}>chat_bubble_outline</span>
        <span onClick={() => setView('cards')} className={iconCls(view==='cards')}>folder_open</span>
        <span onClick={() => setView('main')} className={iconCls(view==='main')}>bar_chart</span>
        <span onClick={() => setView('planner')} className={iconCls(view==='planner')}>check_box_outline_blank</span>
        {/** Removed last four icons per request */}
        <div className="mt-auto">
          <div className="w-8 h-8 bg-[var(--active-bg)] rounded-full flex items-center justify-center text-black font-bold">AG</div>
        </div>
      </aside>
      
      <aside className="sidebar w-64 flex-shrink-0 p-4">
        <h1 className="text-xl font-bold mb-6">Tracker</h1>
        <button className="sidebar-item w-full flex items-center justify-between p-2 rounded-md mb-4 bg-[var(--active-bg)] text-black hover:bg-black hover:text-white transition-colors">
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
              <span className="text-gray-600">Anonymous Guest Demo • {view.charAt(0).toUpperCase()+view.slice(1)}</span>
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
            <div className="relative">
              <button
                onClick={() => setIntegrationsOpen(v => !v)}
                className="px-3 py-1 rounded-md border border-[var(--border-color)] bg-white text-sm hover:bg-[var(--hover-bg)]"
              >
                Integrations
              </button>
              {integrationsOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-[var(--border-color)] rounded-md shadow-lg z-10 py-1">
                  <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-black">
                      <path fillRule="evenodd" d="M12 .5a11.5 11.5 0 00-3.64 22.42c.58.11.79-.25.79-.55v-2.1c-3.22.7-3.9-1.4-3.9-1.4-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.74 1.26 3.41.96.11-.76.41-1.26.74-1.55-2.57-.29-5.27-1.28-5.27-5.72 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.22 1.18a11.2 11.2 0 015.87 0c2.24-1.49 3.22-1.18 3.22-1.18.63 1.6.23 2.77.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.45-2.7 5.42-5.28 5.71.42.36.8 1.06.8 2.14v3.17c0 .3.2.67.8.55A11.5 11.5 0 0012 .5z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </button>
                  <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" aria-hidden="true">
                      <g fill="currentColor">
                        <path d="M7.5 6.5h7.2l2.6 1.8H10z" />
                        <rect x="6" y="8" width="12" height="11" rx="1.6" />
                      </g>
                      <path d="M9 17V10l6 7V10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Notion
                  </button>
                  <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[var(--hover-bg)] text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-600">
                      <path d="M3 4a1 1 0 011-1h7a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm13 0a1 1 0 011-1h3a1 1 0 011 1v16a1 1 0 01-1 1h-3a1 1 0 01-1-1V4z" />
                    </svg>
                    Trello
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        <div className="main-content flex-1 p-6">{renderContent()}</div>
      </main>
      
    </div>
  )
}
