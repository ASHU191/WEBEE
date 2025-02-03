import React from 'react'
import { Code, Database, Globe, Laptop, Smartphone, Zap } from 'lucide-react'

const projects = [
  { id: 1, title: 'Web Development', icon: Globe, description: 'Custom web applications tailored to your needs' },
  { id: 2, title: 'Mobile Apps', icon: Smartphone, description: 'iOS and Android apps with cutting-edge features' },
  { id: 3, title: 'Cloud Solutions', icon: Database, description: 'Scalable and secure cloud infrastructure' },
  { id: 4, title: 'AI Integration', icon: Zap, description: 'Intelligent solutions powered by machine learning' },
  { id: 5, title: 'UI/UX Design', icon: Laptop, description: 'Intuitive and beautiful user interfaces' },
  { id: 6, title: 'API Development', icon: Code, description: 'Robust and scalable API solutions' },
]

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 mb-8">
              We offer a wide range of software development services to help your business thrive in the digital world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                        <project.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-lg font-medium text-gray-900 truncate">{project.title}</dt>
                          <dd className="mt-1 text-sm text-gray-500">{project.description}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-4 sm:px-6">
                    <div className="text-sm">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Learn more<span className="sr-only"> about {project.title}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}