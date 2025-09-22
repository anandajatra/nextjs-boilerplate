'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Filter, Grid, List, X, Menu, ArrowUpRight } from 'lucide-react';
import AnandaJatraLogo from '../components/Logo';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from '../components/SocialIcons';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    'all',
    'Commercial Films',
    'Music Videos',
    'Documentaries',
    'Corporate',
    'Events',
    'Photography'
  ];

  const projects = [
    {
      id: 1,
      title: "BMW Launch Campaign",
      category: "Commercial Films",
      client: "BMW Bangladesh",
      year: "2024",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200",
      videoUrl: "https://player.vimeo.com/video/824804225",
      description: "A cinematic showcase of luxury and performance",
      services: ["Direction", "Cinematography", "Post-Production"]
    },
    {
      id: 2,
      title: "Dhaka Sessions Live",
      category: "Music Videos",
      client: "Independent Artists",
      year: "2024",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200",
      videoUrl: "https://player.vimeo.com/video/824804225",
      description: "Live music sessions featuring renowned Bangladeshi artists",
      services: ["Live Recording", "Multi-Camera Setup", "Audio Production"]
    },
    {
      id: 3,
      title: "Climate Change Documentary",
      category: "Documentaries",
      client: "USAID",
      year: "2023",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200",
      videoUrl: "https://player.vimeo.com/video/824804225",
      description: "A powerful narrative on environmental challenges in Bangladesh",
      services: ["Research", "Direction", "Field Production"]
    },
    {
      id: 4,
      title: "Renaissance Decor",
      category: "Corporate",
      client: "Renaissance Group",
      year: "2024",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200",
      videoUrl: "https://player.vimeo.com/video/824804225",
      description: "Corporate brand film showcasing luxury interiors",
      services: ["Brand Strategy", "Production", "Marketing"]
    },
    {
      id: 5,
      title: "Fashion Week 2024",
      category: "Events",
      client: "Fashion Design Council",
      year: "2024",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200",
      description: "Complete event coverage and highlight reels",
      services: ["Event Coverage", "Live Streaming", "Photography"]
    },
    {
      id: 6,
      title: "Architectural Excellence",
      category: "Photography",
      client: "Edison Real Estate",
      year: "2023",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
      description: "Premium property photography and virtual tours",
      services: ["Architectural Photography", "Drone Shots", "360° Tours"]
    },
    {
      id: 7,
      title: "Tech Summit 2024",
      category: "Corporate",
      client: "Bangladesh Tech Council",
      year: "2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      videoUrl: "https://player.vimeo.com/video/824804225",
      description: "Conference highlights and keynote coverage",
      services: ["Conference Coverage", "Interview Production", "Social Media Content"]
    },
    {
      id: 8,
      title: "Street Food Culture",
      category: "Documentaries",
      client: "Discovery Channel",
      year: "2023",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200",
      videoUrl: "https://player.vimeo.com/video/824804225",
      description: "Exploring Bangladesh's vibrant street food scene",
      services: ["Documentary Production", "Cultural Research", "Color Grading"]
    },
    {
      id: 9,
      title: "Jewelry Campaign",
      category: "Commercial Films",
      client: "Amin Jewelers",
      year: "2024",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200",
      description: "Luxury jewelry campaign with celebrity endorsement",
      services: ["Creative Direction", "Celebrity Management", "Photography"]
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-4">
              <AnandaJatraLogo className="w-14 h-14" variant="icon" />
              <div>
                <h1 className="text-xl font-bold">ANANDA JATRA</h1>
                <p className="text-xs text-gray-400">Creative Solutions</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <Link href="/portfolio" className="text-cyan-400">Portfolio</Link>
              <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
              <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
              <Link href="/contact" className="bg-cyan-500 hover:bg-cyan-600 px-6 py-2 rounded-full transition-colors">
                Get in Touch
              </Link>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1579566346927-c68383817a25?w=1920"
            alt="Portfolio Background"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of our finest work across film, photography, and creative production
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 bg-black/90 backdrop-blur-lg border-y border-white/10 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
              <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-2 ml-4">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-800' : ''}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-800' : ''}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer ${
                  viewMode === 'list' ? 'flex gap-8 items-center' : ''
                }`}
              >
                <div className={`relative overflow-hidden rounded-xl ${
                  viewMode === 'list' ? 'w-1/3' : 'aspect-video mb-4'
                }`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {project.videoUrl && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className={viewMode === 'list' ? 'flex-1' : ''}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                      <p className="text-gray-400 text-sm">{project.client} • {project.year}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span key={service} className="text-xs bg-gray-800 px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              {selectedProject.videoUrl ? (
                <div className="aspect-video">
                  <iframe
                    src={selectedProject.videoUrl}
                    className="w-full h-full rounded-t-2xl"
                    allow="autoplay; fullscreen"
                  />
                </div>
              ) : (
                <div className="relative aspect-video">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover rounded-t-2xl"
                  />
                </div>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <span className="text-cyan-400 text-sm">{selectedProject.category}</span>
                <h2 className="text-3xl font-bold mt-2 mb-4">{selectedProject.title}</h2>
                <p className="text-gray-400">{selectedProject.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">CLIENT</h3>
                  <p>{selectedProject.client}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">YEAR</h3>
                  <p>{selectedProject.year}</p>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">SERVICES</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service: string) => (
                      <span key={service} className="bg-gray-800 px-3 py-1 rounded-full text-sm">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's collaborate and create something extraordinary together
          </p>
          <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all inline-block">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}