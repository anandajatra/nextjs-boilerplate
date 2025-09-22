'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Film, Camera, Calendar, Palette, Music, Megaphone,
  Monitor, Radio, ChevronRight, Check, Menu, X, ArrowRight
} from 'lucide-react';
import AnandaJatraLogo from '../components/Logo';

export default function ServicesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Film className="w-12 h-12" />,
      title: "Film & Video Production",
      shortDesc: "End-to-end video production services",
      description: "From concept to final cut, we deliver cinematic excellence that captivates audiences and elevates brands.",
      image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=1200",
      features: [
        "TV Commercials & Ad Films",
        "Corporate Films & Brand Videos",
        "Documentaries & Short Films",
        "Music Videos & Live Concerts",
        "Web Series & Digital Content",
        "Post-Production & VFX"
      ],
      process: [
        { step: "Concept Development", desc: "Creative ideation and scriptwriting" },
        { step: "Pre-Production", desc: "Planning, casting, and location scouting" },
        { step: "Production", desc: "Professional filming with state-of-the-art equipment" },
        { step: "Post-Production", desc: "Editing, color grading, and sound design" }
      ]
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Professional Photography",
      shortDesc: "Capturing moments that matter",
      description: "Professional photography services that tell your story through stunning visuals and artistic composition.",
      image: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1200",
      features: [
        "Commercial & Product Photography",
        "Fashion & Portrait Sessions",
        "Event & Wedding Photography",
        "Architectural & Interior Shoots",
        "Food & Lifestyle Photography",
        "Photo Editing & Retouching"
      ],
      process: [
        { step: "Consultation", desc: "Understanding your vision and requirements" },
        { step: "Planning", desc: "Location scouting and mood board creation" },
        { step: "Shooting", desc: "Professional photography session" },
        { step: "Post-Processing", desc: "Expert editing and delivery" }
      ]
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Event Management",
      shortDesc: "Creating unforgettable experiences",
      description: "Complete event solutions from planning to execution, ensuring memorable experiences for all attendees.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200",
      features: [
        "Corporate Events & Conferences",
        "Product Launches & Exhibitions",
        "Brand Activations & Roadshows",
        "Concerts & Cultural Events",
        "Award Ceremonies & Galas",
        "Virtual & Hybrid Events"
      ],
      process: [
        { step: "Strategy", desc: "Event conceptualization and planning" },
        { step: "Design", desc: "Creative design and production planning" },
        { step: "Execution", desc: "On-ground management and coordination" },
        { step: "Evaluation", desc: "Post-event analysis and reporting" }
      ]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Brand Identity & Design",
      shortDesc: "Building distinctive brand identities",
      description: "Complete branding solutions that create lasting impressions and connect with your target audience.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200",
      features: [
        "Logo Design & Brand Guidelines",
        "Visual Identity Systems",
        "Marketing Collateral Design",
        "Packaging & Label Design",
        "Digital & Print Design",
        "Brand Strategy Consulting"
      ],
      process: [
        { step: "Discovery", desc: "Understanding your brand essence" },
        { step: "Strategy", desc: "Developing brand positioning" },
        { step: "Design", desc: "Creating visual identity elements" },
        { step: "Implementation", desc: "Brand rollout and guidelines" }
      ]
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: "Music & Audio Production",
      shortDesc: "Professional audio solutions",
      description: "High-quality music production and audio services for all your creative needs.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200",
      features: [
        "Original Music Composition",
        "Audio Recording & Mixing",
        "Podcast Production",
        "Voice-Over Recording",
        "Sound Design & Foley",
        "Audio Post-Production"
      ],
      process: [
        { step: "Briefing", desc: "Understanding audio requirements" },
        { step: "Composition", desc: "Creating original music and sounds" },
        { step: "Recording", desc: "Professional studio recording" },
        { step: "Mastering", desc: "Final mixing and delivery" }
      ]
    },
    {
      icon: <Megaphone className="w-12 h-12" />,
      title: "Digital Marketing",
      shortDesc: "Amplifying your digital presence",
      description: "Strategic digital marketing campaigns that drive engagement and deliver measurable results.",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200",
      features: [
        "Social Media Marketing",
        "Content Strategy & Creation",
        "Influencer Campaigns",
        "SEO & SEM Services",
        "Email Marketing",
        "Analytics & Reporting"
      ],
      process: [
        { step: "Analysis", desc: "Market research and competitor analysis" },
        { step: "Strategy", desc: "Campaign planning and targeting" },
        { step: "Execution", desc: "Content creation and distribution" },
        { step: "Optimization", desc: "Performance tracking and refinement" }
      ]
    }
  ];

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
              <Link href="/portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</Link>
              <Link href="/services" className="text-cyan-400">Services</Link>
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
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="https://videos.pexels.com/video-files/3130182/3130182-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive creative solutions tailored to elevate your brand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Overview */}
      <section className="py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
                className={`group p-8 rounded-2xl border cursor-pointer transition-all ${
                  activeService === index
                    ? 'bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border-cyan-500'
                    : 'bg-gray-900/50 border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="text-cyan-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.shortDesc}</p>
                <div className="mt-4 flex items-center text-cyan-400 group-hover:translate-x-2 transition-transform">
                  <span className="text-sm">Learn more</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            key={activeService}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="text-cyan-400 mb-4">
                {services[activeService].icon}
              </div>
              <h2 className="text-4xl font-bold mb-6">{services[activeService].title}</h2>
              <p className="text-xl text-gray-300 mb-8">{services[activeService].description}</p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/contact" className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            key={`process-${activeService}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Our Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {services[activeService].process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold mb-2">{step.step}</h4>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Flexible Pricing</h2>
            <p className="text-xl text-gray-400">
              Tailored solutions to match your budget and requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['Starter', 'Professional', 'Enterprise'].map((plan, index) => (
              <motion.div
                key={plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl border ${
                  index === 1
                    ? 'border-cyan-500 bg-gradient-to-br from-cyan-500/10 to-purple-600/10'
                    : 'border-gray-800 bg-gray-900/50'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan}</h3>
                <p className="text-gray-400 mb-6">
                  {index === 0 && 'Perfect for small projects'}
                  {index === 1 && 'Most popular for businesses'}
                  {index === 2 && 'Complete creative solutions'}
                </p>
                <div className="text-3xl font-bold mb-6">
                  Custom Quote
                </div>
                <Link href="/contact" className={`block text-center py-3 rounded-full font-semibold transition-all ${
                  index === 1
                    ? 'bg-cyan-500 hover:bg-cyan-600'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}>
                  Get Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how we can help bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio" className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View Portfolio
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}