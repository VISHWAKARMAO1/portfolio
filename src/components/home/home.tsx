import { Code, Database, Globe, Smartphone, Terminal, Zap, Award, Users, TrendingUp } from 'lucide-react'

const HomePage = () => {
  const skills = [
    { name: 'Frontend', icon: Globe, color: 'from-blue-500 to-cyan-500', percentage: 95 },
    { name: 'Backend', icon: Database, color: 'from-purple-500 to-pink-500', percentage: 90 },
    { name: 'Mobile', icon: Smartphone, color: 'from-green-500 to-teal-500', percentage: 85 },
    { name: 'DevOps', icon: Terminal, color: 'from-orange-500 to-red-500', percentage: 80 },
  ]

  const stats = [
    { label: 'Projects Completed', value: '50+', icon: Award },
    { label: 'Happy Clients', value: '35+', icon: Users },
    { label: 'Years Experience', value: '5+', icon: TrendingUp },
    { label: 'Technologies', value: '20+', icon: Code },
  ]

  const techStack = [
    { category: 'Frontend', techs: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', techs: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL'] },
    { category: 'Database', techs: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
    { category: 'Tools', techs: ['Git', 'Docker', 'AWS', 'CI/CD', 'Kubernetes'] },
  ]

  const recentWork = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'AI Dashboard',
      description: 'Analytics dashboard with AI-powered insights',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80',
      tags: ['Next.js', 'Python', 'TensorFlow']
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking with biometric authentication',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80',
      tags: ['React Native', 'Firebase', 'Stripe']
    },
  ]

  return (
    <div className="w-full min-h-screen p-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold animate-pulse">
                ✨ Available for Freelance
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Full Stack
              <span className="block bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Developer
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Crafting exceptional digital experiences with cutting-edge technologies. 
              Specialized in building scalable web applications, mobile apps, and cloud solutions.
            </p>

            <div className="flex gap-4 pt-4">
              <a 
                href="/projects"
                className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-2"
              >
                <Code size={20} />
                View Projects
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Zap size={20} />
                Hire Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80"
                alt="Developer Workspace"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-blue-600/30 to-purple-600/30"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-2">
                  <Zap className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Fast Delivery</p>
                  <p className="text-gray-300 text-sm">On-time projects</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 rounded-full p-2">
                  <Code className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Clean Code</p>
                  <p className="text-gray-300 text-sm">Best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 animate-fade-in-down"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="text-blue-400 mb-3" size={32} />
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center animate-fade-in-down">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`bg-linear-to-br ${skill.color} p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className={`absolute top-0 left-0 h-full bg-linear-to-r ${skill.color} animate-progress`}
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-300 text-sm mt-2 text-right">{skill.percentage}%</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center animate-fade-in-down">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((stack, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-4">{stack.category}</h3>
                <div className="space-y-2">
                  {stack.techs.map((tech, i) => (
                    <div 
                      key={i}
                      className="px-3 py-2 bg-white/10 rounded-lg text-gray-300 hover:bg-white/20 hover:text-white transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Work */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 animate-fade-in-down">
              Featured Projects
            </h2>
            <p className="text-gray-300 text-lg">
              Check out some of my recent work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentWork.map((project, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a 
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              View All Projects
              <Code size={20} />
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-12 border border-white/20 text-center animate-fade-in-down">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance work and exciting projects. 
            Let's discuss how I can help bring your ideas to life.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/contact"
              className="px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Get In Touch
            </a>
            <a 
              href="/services"
              className="px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
