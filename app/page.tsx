'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Play,
  Camera,
  Film,
  Palette,
  Music,
  Calendar,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import AnandaJatraLogo from './components/Logo';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from './components/SocialIcons';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Hero video backgrounds
  const heroVideos = [
    "https://videos.pexels.com/video-files/3015488/3015488-hd_1920_1080_24fps.mp4",
    "https://videos.pexels.com/video-files/3130182/3130182-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/5752723/5752723-hd_1920_1080_24fps.mp4"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % heroVideos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = [
    {
      title: "Renaissance Decor Campaign",
      category: "Commercial Film",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200",
      videoUrl: "https://player.vimeo.com/video/824804225",
      description: "A luxury brand film showcasing elegance"
    },
    {
      title: "Dhaka Sessions Live",
      category: "Music Production",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200",
      videoUrl: "https://player.vimeo.com/video/824804225",
      description: "Live music sessions with renowned artists"
    },
    {
      title: "Edison Real Estate",
      category: "Architecture Film",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200",
      videoUrl: "https://player.vimeo.com/video/824804225",
      description: "Premium property showcase films"
    }
  ];

  const services = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "Film Production",
      description: "End-to-end video production services",
      image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=800"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      description: "Professional photography services",
      image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Event Management",
      description: "Complete event planning and execution",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Design",
      description: "Visual identity and branding solutions",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800"
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Music Production",
      description: "Professional music and audio production",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Digital Content",
      description: "Social media and digital campaigns",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
              <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link>
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden py-6 border-t border-white/10"
            >
              <div className="flex flex-col space-y-4">
                <Link href="/" className="hover:text-cyan-400">Home</Link>
                <Link href="/portfolio" className="hover:text-cyan-400">Portfolio</Link>
                <Link href="/services" className="hover:text-cyan-400">Services</Link>
                <Link href="/about" className="hover:text-cyan-400">About</Link>
                <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          key={currentVideoIndex}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideos[currentVideoIndex]} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black"></div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Where Stories
              </span>
              <br />
              <span className="text-white">Come Alive</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We craft visual narratives that captivate, inspire, and transform brands through creative excellence
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/portfolio" className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center group">
                Watch Our Showreel
                <Play className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
                Start Your Project
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-gray-400 text-lg">Our latest creative productions</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-cyan-400 text-sm mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group">
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-24 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Complete creative solutions from concept to execution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="text-cyan-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1579566346927-c68383817a25?w=1920"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "12+", label: "Years Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "100+", label: "Happy Clients" },
              { number: "25+", label: "Team Members" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-400 mb-8">TRUSTED BY LEADING BRANDS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-50">
            {["BBC", "USAID", "OXFAM", "IFC", "British Council", "Swisscontact"].map((client, index) => (
              <div key={index} className="text-center text-xl font-semibold text-gray-500">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's transform your vision into stunning visual stories
            </p>
            <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all inline-flex items-center group">
              Start Your Project
              <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <AnandaJatraLogo className="w-12 h-12" variant="icon" />
                <div>
                  <h3 className="font-bold">ANANDA JATRA</h3>
                  <p className="text-xs text-gray-400">Creative Solutions</p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm">
                Where imagination fuels every journey. Crafting visual stories since 2012.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/portfolio" className="block text-gray-400 hover:text-cyan-400 transition-colors">Portfolio</Link>
                <Link href="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">Services</Link>
                <Link href="/about" className="block text-gray-400 hover:text-cyan-400 transition-colors">About</Link>
                <Link href="/contact" className="block text-gray-400 hover:text-cyan-400 transition-colors">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Film Production</p>
                <p className="text-gray-400 text-sm">Photography</p>
                <p className="text-gray-400 text-sm">Event Management</p>
                <p className="text-gray-400 text-sm">Brand Design</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-3 mb-6">
                <a href="tel:+8801715732424" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+88 01715-732-424</span>
                </a>
                <a href="mailto:info@anandajatra.com" className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">info@anandajatra.com</span>
                </a>
                <div className="flex items-start text-gray-400">
                  <MapPin className="w-4 h-4 mr-2 mt-1" />
                  <span className="text-sm">Mohakhali DOHS, Dhaka</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <YoutubeIcon className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm">
              © 2025 Ananda Jatra Digital. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}