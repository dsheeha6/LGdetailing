import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Placeholder components with proper TypeScript types
const Home: React.FC = () => (
  <main className="min-h-screen">
    {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Professional Mobile Detailing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium car detailing services that come to you. Serving Atlanta and surrounding areas with excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book-now"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
            >
              Book Now
            </Link>
            <Link
              to="/services"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-lg"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Company Intro */}
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Atlanta's Premier Mobile Detailing Service
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            At LG Mobile Detailing, we're two young entrepreneurs with a passion for cars and a commitment to delivering top-tier detailing services. Driven by ambition and attention to detail, we bring high-quality car care directly to your doorstep — making the entire process convenient, hassle-free, and efficient.
          </p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            From deep interior cleanings to premium exterior treatments, we take pride in every job and treat every vehicle like our own. Our mobile service means you don't have to drive anywhere - we come to you with all the professional equipment and premium products needed to restore your vehicle's beauty.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Convenient</h3>
              <p className="text-gray-600">We come to you - no need to drive anywhere</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-gray-600">Young entrepreneurs with passion and expertise</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Care</h3>
              <p className="text-gray-600">We treat every vehicle like our own</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Service Highlights */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From basic washes to complete restoration, we offer comprehensive detailing packages to meet your needs.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Basic Detail</h3>
            <p className="text-gray-600 mb-4">Perfect for regular maintenance and light cleaning needs.</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Exterior hand wash</li>
              <li>• Interior vacuum & wipe down</li>
              <li>• Window cleaning</li>
              <li>• Tire & wheel cleaning</li>
            </ul>
            <div className="text-2xl font-bold text-blue-600 mb-4">$89</div>
            <Link
              to="/book-now"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-blue-200"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Premium Detail</h3>
            <p className="text-gray-600 mb-4">Comprehensive cleaning with paint correction and protection.</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Everything in Basic Detail</li>
              <li>• Clay bar treatment</li>
              <li>• Paint correction</li>
              <li>• Ceramic coating</li>
              <li>• Engine bay cleaning</li>
            </ul>
            <div className="text-2xl font-bold text-blue-600 mb-4">$299</div>
            <Link
              to="/book-now"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Full Detail</h3>
            <p className="text-gray-600 mb-4">Complete restoration for neglected or heavily soiled vehicles.</p>
            <ul className="text-sm text-gray-600 space-y-1 mb-4">
              <li>• Everything in Premium Detail</li>
              <li>• Deep stain removal</li>
              <li>• Leather conditioning</li>
              <li>• Headlight restoration</li>
              <li>• Paint protection film</li>
            </ul>
            <div className="text-2xl font-bold text-blue-600 mb-4">$499</div>
            <Link
              to="/book-now"
              className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>



    {/* What Customers Are Saying - Auto-scrolling Reviews */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Customers Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Real reviews from our satisfied customers across Atlanta
          </p>
          <button
            onClick={() => window.open('https://g.co/kgs/Xg35Tpg', '_blank')}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.908.609-2.067.97-3.344.97-2.57 0-4.75-1.736-5.527-4.07H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Leave Us a Review
          </button>
        </motion.div>

        {/* Auto-scrolling Reviews Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 animate-scroll"
            style={{
              animation: 'scroll 30s linear infinite',
              animationPlayState: 'running'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = 'paused';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = 'running';
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.animationPlayState = 'paused';
            }}
            onTouchEnd={(e) => {
              setTimeout(() => {
                e.currentTarget.style.animationPlayState = 'running';
              }, 2000);
            }}
          >
            {/* Sample Reviews - TODO: Replace with Google Reviews API integration */}
            {[
              {
                name: "Jennifer K.",
                rating: 5,
                review: "These guys are amazing! They came to my house and transformed my SUV. The interior was spotless and the exterior looked brand new. Highly recommend!",
                location: "Atlanta, GA"
              },
              {
                name: "Marcus T.",
                rating: 5,
                review: "Professional, punctual, and thorough. My truck looks incredible after their premium detail service. Will definitely use them again!",
                location: "Marietta, GA"
              },
              {
                name: "Amanda R.",
                rating: 5,
                review: "Best mobile detailing service I've found. They pay attention to every detail and the results are outstanding. Worth every penny!",
                location: "Roswell, GA"
              },
              {
                name: "Carlos M.",
                rating: 5,
                review: "Incredible work on my sports car. The ceramic coating they applied is fantastic and the paint correction was perfect. These guys know their stuff!",
                location: "Alpharetta, GA"
              },
              {
                name: "Lisa P.",
                rating: 5,
                review: "So convenient having them come to my office. My car looks amazing and they were so professional. Great service and great results!",
                location: "Atlanta, GA"
              },
              {
                name: "Robert J.",
                rating: 5,
                review: "Outstanding service! They restored my classic car to showroom condition. The attention to detail was impressive. Highly recommend!",
                location: "Sandy Springs, GA"
              },
              {
                name: "Michelle W.",
                rating: 5,
                review: "These young entrepreneurs really know their craft. My car has never looked better. Professional, reliable, and excellent results!",
                location: "Buckhead, GA"
              },
              {
                name: "Thomas B.",
                rating: 5,
                review: "Amazing transformation! They came to my home and made my car look brand new. The convenience factor is huge. Great job!",
                location: "Dunwoody, GA"
              }
            ].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  "{review.review}"
                </p>
                <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                <div className="text-xs text-gray-500">{review.location}</div>
              </div>
            ))}
            
            {/* Duplicate reviews for seamless loop */}
            {[
              {
                name: "Jennifer K.",
                rating: 5,
                review: "These guys are amazing! They came to my house and transformed my SUV. The interior was spotless and the exterior looked brand new. Highly recommend!",
                location: "Atlanta, GA"
              },
              {
                name: "Marcus T.",
                rating: 5,
                review: "Professional, punctual, and thorough. My truck looks incredible after their premium detail service. Will definitely use them again!",
                location: "Marietta, GA"
              },
              {
                name: "Amanda R.",
                rating: 5,
                review: "Best mobile detailing service I've found. They pay attention to every detail and the results are outstanding. Worth every penny!",
                location: "Roswell, GA"
              },
              {
                name: "Carlos M.",
                rating: 5,
                review: "Incredible work on my sports car. The ceramic coating they applied is fantastic and the paint correction was perfect. These guys know their stuff!",
                location: "Alpharetta, GA"
              }
            ].map((review, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-80 bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  "{review.review}"
                </p>
                <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                <div className="text-xs text-gray-500">{review.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Trust Badges */}
    <section className="py-12 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-white text-lg font-semibold mb-8">Trusted by Atlanta Drivers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mx-auto w-20 h-20 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-white text-sm">Insured & Bonded</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mx-auto w-20 h-20 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white text-sm">Same Day Service</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mx-auto w-20 h-20 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="text-white text-sm">100% Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-lg p-4 mx-auto w-20 h-20 flex items-center justify-center mb-2">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-white text-sm">Mobile Service</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </main>
);

const Services: React.FC = () => (
  <main className="min-h-screen bg-white">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Detailing Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional mobile detailing packages designed to meet your needs and exceed your expectations.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Service Packages */}
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Basic Detail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Detail</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">$89</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Exterior hand wash & dry
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Interior vacuum & wipe down
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Window cleaning (inside & out)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tire & wheel cleaning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Interior air freshener
                </li>
              </ul>
              <Link
                to="/book-now"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Book Basic Detail
              </Link>
            </div>
          </motion.div>

          {/* Premium Detail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-200 relative"
          >
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Most Popular
            </div>
            <div className="h-48 bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
              <svg className="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Detail</h3>
              <div className="text-3xl font-bold text-indigo-600 mb-6">$299</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Basic Detail
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Clay bar treatment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Paint correction (1-step)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ceramic coating application
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Engine bay cleaning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Interior deep cleaning
                </li>
              </ul>
              <Link
                to="/book-now"
                className="block w-full bg-indigo-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Book Premium Detail
              </Link>
            </div>
          </motion.div>

          {/* Full Detail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
              <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Detail</h3>
              <div className="text-3xl font-bold text-purple-600 mb-6">$499</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Everything in Premium Detail
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-stage paint correction
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Deep stain removal
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Leather conditioning
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Headlight restoration
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Paint protection film
                </li>
              </ul>
              <Link
                to="/book-now"
                className="block w-full bg-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Book Full Detail
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Additional Services */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Additional Services</h2>
          <p className="text-lg text-gray-600">Customize your detailing experience with these add-on services</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Interior Deep Clean", price: "$49", icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" },
            { name: "Headlight Restoration", price: "$79", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
            { name: "Paint Protection Film", price: "$299", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            { name: "Engine Bay Cleaning", price: "$39", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
          ].map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-blue-600 font-bold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterImages = [
    {
      id: 1,
      before: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "SUV Exterior Transformation",
      description: "Complete exterior detail with paint correction and ceramic coating"
    },
    {
      id: 2,
      before: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Classic Car Restoration",
      description: "Vintage vehicle paint correction and restoration"
    },
    {
      id: 3,
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Motorcycle Detail",
      description: "Two-wheel precision cleaning and detailing"
    },
    {
      id: 4,
      before: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Truck Exterior Detail",
      description: "Heavy-duty vehicle cleaning and protection"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our work through stunning before and after transformations
          </p>
        </motion.div>

        {/* Before & After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Before & After Transformations</h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {beforeAfterImages.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="relative">
                      {/* Before/After Images */}
                      <div className="relative h-96 md:h-[500px] overflow-hidden">
                        <div className="absolute inset-0 flex">
                          {/* Before Image */}
                          <div className="w-1/2 relative">
                            <img
                              src={item.before}
                              alt={`Before - ${item.title}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              BEFORE
                            </div>
                          </div>
                          {/* After Image */}
                          <div className="w-1/2 relative">
                            <img
                              src={item.after}
                              alt={`After - ${item.title}`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              AFTER
                            </div>
                          </div>
                        </div>
                        
                        {/* Divider Line */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-full bg-white shadow-lg z-10">
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      {/* Image Info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                        <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-200">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Work Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                title: "Luxury Sedan Detail",
                description: "Premium interior and exterior detailing",
                image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                id: 2,
                title: "SUV Interior Deep Clean",
                description: "Complete interior restoration",
                image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                id: 3,
                title: "Sports Car Paint Correction",
                description: "Professional paint restoration",
                image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                id: 4,
                title: "Truck Exterior Detail",
                description: "Heavy-duty vehicle cleaning",
                image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                id: 5,
                title: "Motorcycle Detail",
                description: "Two-wheel precision cleaning",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              },
              {
                id: 6,
                title: "Classic Car Restoration",
                description: "Vintage vehicle paint correction",
                image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-semibold">Premium Detail</span>
                    <Link
                      to="/book-now"
                      className="text-blue-600 hover:text-blue-800 font-semibold text-sm"
                    >
                      Book Similar Service →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
};



const BookNow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'basic',
    date: '',
    time: '',
    message: ''
  });

  const [additionalServices, setAdditionalServices] = useState({
    interiorDeepClean: false,
    headlightRestoration: false,
    paintProtectionFilm: false,
    engineBayCleaning: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    console.log('Additional services:', additionalServices);
    alert('Thank you for your booking request! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAdditionalServiceChange = (serviceName: string) => {
    setAdditionalServices(prev => ({
      ...prev,
      [serviceName]: !prev[serviceName as keyof typeof prev]
    }));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Book Your Detail</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Contact Information</h2>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Service Selection */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Service Package</h2>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="basic">Basic Detail - $89</option>
                <option value="premium">Premium Detail - $299</option>
                <option value="full">Full Detail - $499</option>
              </select>
            </div>

            {/* Additional Services */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Additional Services</h2>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={additionalServices.interiorDeepClean}
                      onChange={() => handleAdditionalServiceChange('interiorDeepClean')}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-900">Interior Deep Clean</span>
                  </div>
                  <span className="text-blue-600 font-semibold">$49</span>
                </label>
                
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={additionalServices.headlightRestoration}
                      onChange={() => handleAdditionalServiceChange('headlightRestoration')}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-900">Headlight Restoration</span>
                  </div>
                  <span className="text-blue-600 font-semibold">$79</span>
                </label>
                
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={additionalServices.paintProtectionFilm}
                      onChange={() => handleAdditionalServiceChange('paintProtectionFilm')}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-900">Paint Protection Film</span>
                  </div>
                  <span className="text-blue-600 font-semibold">$299</span>
                </label>
                
                <label className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={additionalServices.engineBayCleaning}
                      onChange={() => handleAdditionalServiceChange('engineBayCleaning')}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-3 text-gray-900">Engine Bay Cleaning</span>
                  </div>
                  <span className="text-blue-600 font-semibold">$39</span>
                </label>
              </div>
            </div>

            {/* Scheduling */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Schedule Your Appointment</h2>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Additional Notes */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">Additional Notes</h2>
              <textarea
                name="message"
                placeholder="Tell us about your vehicle, special requests, or any concerns..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit Booking Request
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              LG Mobile Detailing
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link to="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</Link>
              <Link 
                to="/book-now" 
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 relative overflow-hidden group"
                style={{
                  boxShadow: '0 0 20px rgba(0, 123, 255, 0.3)',
                  animation: 'glow 3s ease-in-out infinite'
                }}
              >
                <span className="relative z-10">Book Now</span>
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)',
                    animation: 'shimmer 2s ease-in-out infinite'
                  }}
                ></div>
              </Link>
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden border-t border-gray-200"
              >
                <div className="py-2 space-y-2">
                  <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Home</Link>
                  <Link to="/services" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Services</Link>
                  <Link to="/gallery" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                  <Link 
                    to="/book-now" 
                    className="mobile-book-now block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book-now" element={<BookNow />} />
      </Routes>
      <footer className="bg-gray-900 text-gray-100 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-2">LG Mobile Detailing</h4>
            <p className="text-gray-400 text-sm mb-2">Atlanta, GA & surrounding areas</p>
            <p className="text-gray-400 text-sm">(470) 428-6540</p>
            <p className="text-gray-400 text-sm">info@lgmobiledetailing.com</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Navigation</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link to="/book-now" className="hover:underline">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Follow Us</h4>
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => window.open('https://www.instagram.com/lgmobiledetailing77/?hl=en', '_blank')}
                aria-label="Instagram"
                className="hover:text-pink-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              <button
                onClick={() => window.open('https://www.tiktok.com/@lg.mobile.detailing', '_blank')}
                aria-label="TikTok"
                className="hover:text-pink-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </button>
              <button
                onClick={() => window.open('https://g.co/kgs/C919nxN', '_blank')}
                aria-label="Google Business"
                className="hover:text-red-500 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </button>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Business Hours</h4>
            <div className="text-gray-400 text-sm">
              <p className="mb-1">Monday - Sunday</p>
              <p className="font-semibold text-white">8:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default App; 