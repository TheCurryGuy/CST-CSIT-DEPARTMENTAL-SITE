"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Link } from "react-router-dom"

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])

  return (
    <div className="relative h-[90vh] overflow-hidden">
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-teal-800/60 to-black/80" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mb-6">
            <div className="bg-black/30 backdrop-blur-sm px-6 py-2 rounded-full">
              <span className="text-sm font-medium uppercase tracking-wider">Excellence in Education</span>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
        >
          Department of Computer Science
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl"
        >
          and Computer Science and Information Technology
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a
            href="#about"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-700 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all"
          >
            Discover More
          </a>
          <Link
            to="/contact"
            className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-medium hover:bg-white/20 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="dark:fill-gray-900"
          ></path>
        </svg>
      </div>
    </div>
  )
}

