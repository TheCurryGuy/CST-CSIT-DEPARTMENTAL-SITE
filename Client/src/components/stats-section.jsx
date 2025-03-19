"use client"

import { motion } from "framer-motion"
import { Users, BookOpen, Award, Building } from "lucide-react"
import { stats } from "../utils/data"

export default function StatsSection() {
  // Map icon names to actual components
  const getIcon = (iconName) => {
    switch (iconName) {
      case "Users":
        return <Users className="h-6 w-6" />
      case "BookOpen":
        return <BookOpen className="h-6 w-6" />
      case "Award":
        return <Award className="h-6 w-6" />
      case "Building":
        return <Building className="h-6 w-6" />
      default:
        return null
    }
  }

  return (
    <div className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            Department at a Glance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
          >
            Building excellence through education, research, and innovation
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white dark:bg-gray-800 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
              <div className="p-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-gray-700 text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon)}
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{stat.name}</h3>
                <p className="mt-2 text-3xl font-bold text-indigo-600 dark:text-indigo-400">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

