'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail, Phone, MapPin, Clock, Send, Menu, X,
  MessageSquare, Calendar, Briefcase, Globe
} from 'lucide-react';
import AnandaJatraLogo from '../components/Logo';
import { FacebookIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from '../components/SocialIcons';

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const projectTypes = [
    'Commercial Film',
    'Music Video',
    'Documentary',
    'Corporate Video',
    'Event Coverage',
    'Photography',
    'Brand Design',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $15,000',
    '$15,000 - $30,000',
    '$30,000 - $50,000',
    'Above $50,000'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const offices = [
    {
      city: "Dhaka",
      address: "104, Park Road, Second Floor",
      area: "Mohakhali DOHS",
      country: "Bangladesh - 1206",
      phone: "+88 01715-732-424",
      email: "dhaka@anandajatra.com",
      image: "https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?w=800"
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
              <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
              <Link href="/contact" className="bg-cyan-500 text-white px-6 py-2 rounded-full">
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

      {/* Hero Section with Map Background */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
            alt="Contact background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how we can bring your creative vision to life
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-8 rounded-2xl border border-gray-800">
                <h2 className="text-3xl font-bold mb-8">Start Your Project</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                        placeholder="+880 1XXX-XXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                        placeholder="Company Name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type *</label>
                      <select
                        required
                        value={formData.projectType}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select a project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Timeline</label>
                    <input
                      type="text"
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="e.g., 2-3 months, ASAP, Q1 2025"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details *</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-lg"
                    >
                      Thank you! We'll get back to you within 24 hours.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info - 1 column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 rounded-2xl border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Quick Contact</h3>

                <div className="space-y-4">
                  <a href="tel:+8801715732424" className="flex items-start group">
                    <Phone className="w-5 h-5 text-cyan-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Call us</p>
                      <p className="group-hover:text-cyan-400 transition-colors">+88 01715-732-424</p>
                    </div>
                  </a>

                  <a href="mailto:info@anandajatra.com" className="flex items-start group">
                    <Mail className="w-5 h-5 text-cyan-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Email us</p>
                      <p className="group-hover:text-cyan-400 transition-colors">info@anandajatra.com</p>
                    </div>
                  </a>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Visit us</p>
                      <p>104, Park Road, 2nd Floor<br />
                      Mohakhali DOHS, Dhaka<br />
                      Bangladesh - 1206</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-cyan-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400 mb-1">Office hours</p>
                      <p>Mon - Fri: 10:00 AM - 7:00 PM<br />
                      Sat: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 rounded-2xl border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-cyan-500/20 transition-colors">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-cyan-500/20 transition-colors">
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-cyan-500/20 transition-colors">
                    <YoutubeIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gray-800 rounded-lg hover:bg-cyan-500/20 transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 p-6 rounded-2xl border border-gray-800">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link href="/portfolio" className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group">
                    <span>View Portfolio</span>
                    <Briefcase className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                  </Link>
                  <Link href="/services" className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group">
                    <span>Our Services</span>
                    <Globe className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                  </Link>
                  <a href="#" className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors group">
                    <span>Schedule a Call</span>
                    <Calendar className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Office</h2>
            <p className="text-xl text-gray-400">Visit us at our creative studio</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-2xl overflow-hidden border border-gray-800"
              >
                <div className="relative h-64">
                  <Image
                    src={office.image}
                    alt={office.city}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-bold">{office.city}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    <p className="text-gray-300">
                      {office.address}<br />
                      {office.area}<br />
                      {office.country}
                    </p>
                    <div className="pt-3 space-y-2">
                      <a href={`tel:${office.phone}`} className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                        <Phone className="w-4 h-4 mr-2" />
                        {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`} className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors">
                        <Mail className="w-4 h-4 mr-2" />
                        {office.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 rounded-2xl overflow-hidden border border-gray-800 flex items-center justify-center"
            >
              <div className="text-center p-12">
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <p className="text-gray-400">Interactive map coming soon</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on scope and complexity. A typical commercial film takes 4-6 weeks, while larger productions may take 2-3 months."
              },
              {
                q: "Do you work with international clients?",
                a: "Yes, we work with clients globally. We have experience managing remote productions and international collaborations."
              },
              {
                q: "What's included in your production services?",
                a: "Our services include pre-production planning, filming, post-production, and final delivery in your required formats."
              },
              {
                q: "Can you handle urgent projects?",
                a: "We can accommodate rush projects depending on our current schedule. Additional fees may apply for expedited timelines."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}