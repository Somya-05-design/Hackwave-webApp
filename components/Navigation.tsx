'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrolledDown = prevScrollPos < currentScrollPos && currentScrollPos > 100
      
      setIsScrolled(currentScrollPos > 10)
      setVisible(!isScrolledDown)
      setPrevScrollPos(currentScrollPos)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos])

  const navItems = [
    { name: 'Features', href: '#features', hasDropdown: false },
    { name: 'Pricing', href: '#pricing', hasDropdown: false },
    { name: 'Guides', href: '#guides', hasDropdown: false },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
      isScrolled ? 'bg-neutral-50/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    } ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container-max">
                 <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
           {/* Left Navigation */}
           <div className="hidden lg:flex items-center space-x-8">
             {navItems.map((item) => (
               <Link
                 key={item.name}
                 href={item.href}
                 className="text-neutral-700 hover:text-primary-400 transition-colors duration-200"
               >
                 {item.name}
               </Link>
             ))}
           </div>

           {/* Centered Logo/Name */}
           <div className="absolute left-1/2 transform -translate-x-1/2">
             <Link href="/" className="flex items-center">
               <img 
                 src="/logos/img.png" 
                 alt="Clavio Logo" 
                 className="h-20 w-auto"
               />
             </Link>
           </div>



          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-primary-400 hover:bg-neutral-100 transition-colors duration-200"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

                 {/* Mobile Navigation */}
         {isOpen && (
           <div className="lg:hidden bg-neutral-50 border-t border-neutral-200">
             <div className="px-4 py-6 space-y-4">
               {/* Mobile Logo/Name */}
               <div className="text-center mb-6">
                 <Link href="/" className="flex items-center justify-center" onClick={() => setIsOpen(false)}>
                   <img 
                     src="/logos/img.png" 
                     alt="Clavio Logo" 
                     className="h-14 w-auto"
                   />
                 </Link>
               </div>
               
               {navItems.map((item) => (
                 <Link
                   key={item.name}
                   href={item.href}
                   className="block text-neutral-700 hover:text-primary-400 font-medium transition-colors duration-200"
                   onClick={() => setIsOpen(false)}
                 >
                   {item.name}
                 </Link>
               ))}
                                
             </div>
           </div>
         )}
      </div>
    </nav>
  )
}

export default Navigation
