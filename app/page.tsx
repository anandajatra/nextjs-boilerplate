'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AnandajatraHome() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      console.log('Email submitted:', email);
    }
  };

  if (!mounted) return null;

  const services = [
    {
      icon: "🎨",
      title: "Brand Identity",
      description: "Create compelling brand identities that resonate with your target audience and stand out in the market."
    },
    {
      icon: "📱",
      title: "Digital Marketing",
      description: "Strategic digital campaigns that drive engagement and convert prospects into loyal customers."
    },
    {
      icon: "🎬",
      title: "Creative Content",
      description: "Engaging visual content that tells your story and captures your brand's essence beautifully."
    },
    {
      icon: "📈",
      title: "Media Strategy",
      description: "Data-driven media planning that maximizes your reach and optimizes your advertising budget."
    },
    {
      icon: "✨",
      title: "Campaign Design",
      description: "End-to-end campaign creation from concept to execution that delivers measurable results."
    },
    {
      icon: "🎯",
      title: "Market Research",
      description: "Deep insights into your market and competitors to inform strategic decision-making."
    }
  ];

  const testimonials = [
    {
      quote: "ANANDAJATRA transformed our brand presence completely. Their creative approach and strategic thinking delivered results beyond our expectations.",
      author: "Sarah Johnson",
      company: "TechStart Inc."
    },
    {
      quote: "Working with ANANDAJATRA was a game-changer. They understood our vision and brought it to life with incredible creativity.",
      author: "Michael Chen",
      company: "GreenLeaf Ventures"
    },
    {
      quote: "The team's attention to detail and innovative solutions helped us achieve a 300% increase in brand engagement.",
      author: "Emma Rodriguez",
      company: "Urban Dynamics"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Image 
              src="/Logo-02.png" 
              alt="ANANDAJATRA Logo" 
              width={40} 
              height={40}
              className="object-contain"
            />
            <span className="brand-text text-2xl font-bold">ANANDAJATRA</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
          
          <button className="btn-primary">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-gradient min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="heading-hero">
                  You Focus on Your Product,
                  <span className="text-primary"> We Make Sure the World Sees It Right</span>
                </h1>
                <p className="heading-h3">
                  Bold, modern, and creative advertising solutions that build trust and drive results.
                </p>
                <p className="body-text text-lg text-muted">
                  Professional advertising agency delivering creative campaigns that transform your brand presence and connect with your audience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">Start Your Project</button>
                <button className="btn-secondary">View Our Work</button>
              </div>
              
              <div className="pt-8">
                <p className="accent-text">
                  "Creativity meets strategy for extraordinary results"
                </p>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up">
              <div className="bg-white rounded-2xl p-8 shadow-2xl animate-pulse-glow">
                <Image 
                  src="/Logo-02.png" 
                  alt="ANANDAJATRA Creative Process" 
                  width={400} 
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="heading-h1 mb-6">Our Creative Services</h2>
            <p className="body-text text-lg text-muted max-w-2xl mx-auto">
              From brand identity to digital campaigns, we offer comprehensive creative solutions that drive your business forward.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="heading-h3 mb-4 text-charcoal">{service.title}</h3>
                <p className="body-text text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-light-gray">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="heading-h2 mb-6 text-white">Why Choose ANANDAJATRA?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✨</span>
                    <span className="body-text text-white">Creative excellence that sets your brand apart</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <span className="body-text text-white">Strategic approach backed by market insights</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">🚀</span>
                    <span className="body-text text-white">Proven track record of delivering results</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">🤝</span>
                    <span className="body-text text-white">Collaborative partnership approach</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="heading-h1">About ANANDAJATRA</h2>
              <p className="body-text">
                We are a modern creative advertising agency that combines bold creativity with strategic thinking. 
                Our mission is simple: to help businesses focus on what they do best while we ensure their message 
                reaches the right audience in the right way.
              </p>
              <p className="body-text">
                With years of experience in brand development, digital marketing, and creative campaigns, 
                we understand what it takes to build a powerful brand presence that drives real business results.
              </p>
              <p className="accent-text">
                "Every great brand has a story worth telling. We help you tell yours."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="heading-h1 mb-6">What Our Clients Say</h2>
            <p className="accent-text text-2xl">
              Success stories from brands we've helped transform
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-light-gray p-8 rounded-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <p className="body-text mb-6 italic">"{testimonial.quote}"</p>
                <div className="border-t border-primary pt-4">
                  <p className="heading-h3 text-charcoal mb-1">{testimonial.author}</p>
                  <p className="body-text text-muted">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="section-padding bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="heading-h1 text-white mb-6">Ready to Transform Your Brand?</h2>
            <p className="body-text text-white text-lg">
              Let's discuss how we can help you achieve your marketing goals and build a brand that stands out.
            </p>
            
            <div className="max-w-md mx-auto">
              {!isSubscribed ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-charcoal body-text focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <button 
                    type="submit" 
                    className="bg-white text-primary px-8 py-3 rounded-lg font-montserrat font-medium hover:bg-light-gray transition-colors"
                  >
                    Get Started
                  </button>
                </form>
              ) : (
                <div className="bg-white text-primary p-6 rounded-lg">
                  <p className="heading-h3 text-primary">Thank you for your interest!</p>
                  <p className="body-text text-primary">We'll be in touch soon to discuss your project.</p>
                </div>
              )}
            </div>
            
            <div className="pt-8">
              <p className="accent-text text-white text-2xl">
                "Your success is our creative challenge"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/Logo-02.png" 
                  alt="ANANDAJATRA Logo" 
                  width={30} 
                  height={30}
                  className="object-contain"
                />
                <span className="brand-text text-white text-xl">ANANDAJATRA</span>
              </div>
              <p className="body-text">
                Creative advertising agency focused on delivering results that matter.
              </p>
            </div>
            
            <div>
              <h4 className="heading-h3 text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="body-text hover:text-primary transition-colors">Brand Identity</a></li>
                <li><a href="#" className="body-text hover:text-primary transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="body-text hover:text-primary transition-colors">Creative Content</a></li>
                <li><a href="#" className="body-text hover:text-primary transition-colors">Media Strategy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="heading-h3 text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="body-text hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="body-text hover:text-primary transition-colors">Portfolio</a></li>
                <li><a href="#" className="body-text hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="body-text hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="heading-h3 text-white mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="social-icon text-2xl">📧</a>
                <a href="#" className="social-icon text-2xl">📱</a>
                <a href="#" className="social-icon text-2xl">🔗</a>
                <a href="#" className="social-icon text-2xl">📸</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray pt-6 text-center">
            <p className="body-text">
              © 2025 ANANDAJATRA. All rights reserved. | 
              <span className="accent-text ml-2">"You focus on your product, we make sure the world sees it right."</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
