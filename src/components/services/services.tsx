const ServicesPage = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces with focus on user experience and modern design principles.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      color: "from-green-500 to-teal-500"
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs with Node.js, Express, and modern backend frameworks for scalable solutions.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Database Design",
      description: "Efficient database architecture with SQL and NoSQL databases, including MongoDB, PostgreSQL, and MySQL.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Cloud Solutions",
      description: "Cloud infrastructure setup and deployment on AWS, Azure, and Google Cloud Platform with CI/CD pipelines.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <div className="w-full min-h-screen p-8">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in-down">
        <h1 className="text-5xl font-bold text-white mb-4">Services</h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Comprehensive development solutions tailored to bring your ideas to life with cutting-edge technology
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-slide-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Gradient Background on Hover */}
            <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
            
            {/* Icon */}
            <div className={`relative mb-6 inline-flex p-4 rounded-2xl bg-linear-to-br ${service.color} text-white transform group-hover:scale-110 transition-transform duration-500`}>
              {service.icon}
            </div>

            {/* Content */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Hover Effect Line */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center animate-fade-in-down">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border border-white/20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's collaborate and turn your vision into reality with professional development services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Get in Touch
            </a>
            <a
              href="/projects"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
