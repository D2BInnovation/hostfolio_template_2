import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import data from '../../data.json'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { personal, about, projects, contact, hero, resume } = (data as any)

  const navItems = []
  if (hero) navItems.push({ name: 'Home', href: '#hero' })
  if (about && (about.description || about.skills?.length > 0)) {
    navItems.push({ name: 'About', href: '#about' })
  }
  if (projects && projects.length > 0) {
    navItems.push({ name: 'Projects', href: '#projects' })
  }
  if (contact) navItems.push({ name: 'Contact', href: '#contact' })

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slideDown ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-600 hover:scale-105 transition-transform duration-200">
            {personal?.name || 'Portfolio'}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            {resume && (
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 hover:scale-105 transition-all duration-200"
              >
                Resume
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg shadow-lg p-4 mb-4 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            {resume && (
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar