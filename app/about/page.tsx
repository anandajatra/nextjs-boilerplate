'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award, Users, Target, Lightbulb, Menu, X,
  ChevronRight, Quote, Calendar, MapPin, Briefcase
} from 'lucide-react';
import AnandaJatraLogo from '../components/Logo';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from '../components/SocialIcons';

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing creative boundaries with cutting-edge techniques and fresh perspectives"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working closely with clients to bring their vision to life"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description: "Delivering exceptional quality in every project we undertake"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Integrity",
      description: "Building lasting relationships through trust and transparency"
    }
  ];

  const timeline = [
    {
      year: "2012",
      title: "The Beginning",
      description: "Ananda Jatra was founded with a vision to revolutionize creative production in Bangladesh",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800"
    },
    {
      year: "2015",
      title: "Expanding Horizons",
      description: "Launched our music production division and started Dhaka Sessions",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800"
    },
    {
      year: "2018",
      title: "International Recognition",
      description: "Partnered with international brands and agencies for global campaigns",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800"
    },
    {
      year: "2020",
      title: "Digital Evolution",
      description: "Adapted to the new normal with virtual production and hybrid events",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
    },
    {
      year: "2023",
      title: "Studio Expansion",
      description: "Opened our state-of-the-art production studio in Dhaka",
      image: "https://images.unsplash.com/photo-1579566346927-c68383817a25?w=800"
    },
    {
      year: "2024",
      title: "Future Forward",
      description: "Embracing AI and new technologies in creative production",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800"
    }
  ];

  const team = [
    {
      name: "Tanzim Ahmed Bijoy",
      role: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "12+ years of experience in visual storytelling and creative direction",
      social: {
        linkedin: "#",
        instagram: "#",
        facebook: "#"
      }
    },
    {
      name: "Sarah Rahman",
      role: "Head of Production",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      bio: "Expert in managing complex productions and coordinating creative teams",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Arif Khan",
      role: "Director of Photography",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      bio: "Cinematographer with a passion for visual aesthetics and storytelling",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      name: "Meera Das",
      role: "Creative Producer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      bio: "Bringing creative concepts to life through strategic production planning",
      social: {
        linkedin: "#",
        instagram: "#"
      }
    }
  ];

  const testimonials = [
    {
      quote: "Ananda Jatra transformed our brand story into a visual masterpiece. Their creativity and professionalism are unmatched.",
      author: "Michael Chen",
      position: "Marketing Director, BMW Bangladesh"
    },
    {
      quote: "Working with Ananda Jatra was an incredible experience. They understood our vision and delivered beyond expectations.",
      author: "Fatima Ali",
      position: "CEO, Fashion House BD"
    },
    {
      quote: "The team's dedication to quality and attention to detail made our documentary a success on international platforms.",
      author: "James Wilson",
      position: "Producer, Discovery Channel"
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
              <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
              <Link href="/about" className="text-cyan-400">About</Link>
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
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920"
            alt="Team collaboration"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Where imagination fuels every journey - crafting visual narratives since 2012
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To transform ideas into compelling visual stories that resonate with audiences and elevate brands to new heights. We believe in the power of creativity to inspire, engage, and drive meaningful connections.
              </p>
              <p className="text-gray-400">
                Founded by Tanzim Ahmed Bijoy, a visionary with over 12 years of experience in the Bangladeshi art & media industry, Ananda Jatra has grown from a small creative studio to a leading production house serving clients globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
                alt="Creative team at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-cyan-400 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-400">Milestones that shaped our story</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-600 hidden lg:block"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 lg:pr-12">
                  <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <span className="text-cyan-400 font-bold text-2xl">{item.year}</span>
                    <h3 className="text-2xl font-bold mt-2 mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex w-4 h-4 bg-cyan-500 rounded-full border-4 border-black z-10"></div>

                <div className="flex-1 lg:pl-12">
                  <div className="relative aspect-video rounded-xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-400">The creative minds behind Ananda Jatra</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-cyan-400">
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} className="text-gray-400 hover:text-cyan-400">
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a href={member.social.facebook} className="text-gray-400 hover:text-cyan-400">
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-400">Testimonials from our valued partners</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
              >
                <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Create Together</h2>
          <p className="text-xl text-gray-400 mb-8">
            Join us in crafting extraordinary visual experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio" className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
              View Our Work
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