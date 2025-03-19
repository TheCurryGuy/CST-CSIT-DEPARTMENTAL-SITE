"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, ArrowRight } from "lucide-react"
import Modal from "./ui/modal"
import { useStateContext } from "../context/state-context"
import { news } from "../utils/data"

export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState(null)
  const { isDarkMode } = useStateContext()

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl"
          >
            Latest News & Announcements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
          >
            Stay updated with the latest happenings in our department
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`h-2 ${getCategoryColor(item.category)}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getCategoryBadgeColor(item.category)}`}
                  >
                    {item.category}
                  </span>
                  <div className="flex items-center ml-auto text-sm text-gray-500 dark:text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {item.date}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{item.excerpt}</p>
                <button
                  onClick={() => setSelectedNews(item)}
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  Read more
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* News Modal */}
        <Modal isOpen={!!selectedNews} onClose={() => setSelectedNews(null)} title={selectedNews?.title || ""}>
          <div className="flex items-center mb-4">
            <span
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                selectedNews ? getCategoryBadgeColor(selectedNews.category) : ""
              }`}
            >
              {selectedNews?.category}
            </span>
            <div className="flex items-center ml-auto text-sm text-gray-500 dark:text-gray-400">
              <Calendar size={14} className="mr-1" />
              {selectedNews?.date}
            </div>
          </div>
          <div
            className="prose prose-blue max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: selectedNews?.fullContent || "" }}
          />
        </Modal>
      </div>
    </div>
  )
}

function getCategoryColor(category) {
  switch (category) {
    case "Research":
      return "bg-blue-500"
    case "Event":
      return "bg-teal-500"
    case "Achievement":
      return "bg-green-500"
    case "Facility":
      return "bg-amber-500"
    default:
      return "bg-gray-500"
  }
}

function getCategoryBadgeColor(category) {
  switch (category) {
    case "Research":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    case "Event":
      return "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300"
    case "Achievement":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "Facility":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
  }
}

