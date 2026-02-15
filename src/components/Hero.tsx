import React from 'react'
import { Github, Linkedin, Mail, Download, Twitter } from 'lucide-react'
import data from '../../data.json'
import type { PortfolioData } from '../types'

const Hero: React.FC = () => {
  const { hero } = data as PortfolioData;

  // Don't render section if hero data is not present
  if (!hero) {
    return null;
  }

  const socialLinks = [
    { icon: Github, url: hero.social?.github, label: 'GitHub' },
    { icon: Linkedin, url: hero.social?.linkedin, label: 'LinkedIn' },
    { icon: Twitter, url: hero.social?.twitter, label: 'Twitter' },
    { icon: Mail, url: hero.social?.email ? `mailto:${hero.social.email}` : '#', label: 'Email' }
  ].filter(link => link.url);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fadeInUp">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate-slideInLeft">
              Hi, I'm{' '}
              <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {hero.name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-gray-600 mb-4 animate-slideInLeft animation-delay-200">
              {hero.title}
            </h2>

            <h3 className="text-lg sm:text-xl text-blue-600 font-semibold mb-6 animate-slideInLeft animation-delay-400">
              {hero.subtitle}
            </h3>

            <p className="text-gray-700 text-lg mb-8 max-w-2xl animate-slideInLeft animation-delay-600">
              {hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slideInLeft animation-delay-800">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                <Mail size={20} />
                Get In Touch
              </a>

              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start animate-slideInLeft animation-delay-1000">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 hover:scale-125 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slideInRight">
            <div className="relative hover:scale-105 transition-transform duration-300">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-300 animate-spin-slow" />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero