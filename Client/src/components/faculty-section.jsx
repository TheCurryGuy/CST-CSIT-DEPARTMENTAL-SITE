import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from 'lucide-react'
import { Link } from "react-router-dom"
import { homeFaculty } from "../utils/data"

export default function FacultySection() {
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
            Our Distinguished Faculty
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
          >
            Meet our team of experienced educators and researchers
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {homeFaculty.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <div className="flex space-x-3">
                    <a href="#" className="text-white hover:text-blue-300 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-300 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-blue-300 transition-colors">
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">{member.role}</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{member.specialization}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/faculty"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-sm hover:shadow-lg transition-all"
          >
            View All Faculty
          </Link>
        </div>
      </div>
    </div>
  )
}

