import React from 'react'
import { GraduationCap, Award, Code, User } from 'lucide-react'
import data from '../../data.json'

const About: React.FC = () => {
  const { about } = data

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeInUp">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <div className="flex justify-center animate-slideInLeft">
              <div className="relative">
                <img
                  src={about.image}
                  alt="About me"
                  className="w-80 h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl -z-10 opacity-20"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 animate-slideInRight">
              <div className="flex items-center gap-3 mb-4">
                <User className="text-blue-600" size={28} />
                <h3 className="text-2xl font-semibold text-gray-900">Get to know me</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {about.description}
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl font-bold text-blue-600">20+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg hover:scale-105 transition-transform duration-200">
                  <div className="text-2xl font-bold text-purple-600">3.8</div>
                  <div className="text-gray-600">GPA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16 animate-fadeInUp animation-delay-400">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Code className="text-blue-600" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {about.skills.map((skillCategory, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border hover:scale-105 transition-transform duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="bg-blue-50 p-8 rounded-xl animate-slideInLeft animation-delay-600">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-blue-600" size={28} />
                <h3 className="text-2xl font-semibold text-gray-900">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{about.education.degree}</h4>
                  <p className="text-blue-600 font-medium">{about.education.university}</p>
                  <p className="text-gray-600">{about.education.year}</p>
                  <p className="text-gray-700 mt-2">GPA: {about.education.gpa}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Relevant Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    {about.education.relevantCourses.map((course, index) => (
                      <span
                        key={index}
                        className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-purple-50 p-8 rounded-xl animate-slideInRight animation-delay-600">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-purple-600" size={28} />
                <h3 className="text-2xl font-semibold text-gray-900">Achievements</h3>
              </div>
              <div className="space-y-4">
                {about.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About