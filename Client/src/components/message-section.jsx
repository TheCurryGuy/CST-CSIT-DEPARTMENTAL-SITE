import { motion } from "framer-motion"

export default function MessageSection() {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-600 rounded-full blur-lg opacity-20 animate-pulse"></div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-full border-8 border-white dark:border-gray-700 shadow-xl">
                <img src="/placeholder.svg?height=600&width=600" alt="HOD" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-700 rounded-full p-4 shadow-lg">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-gray-700 text-blue-800 dark:text-blue-300 text-sm font-medium mb-4">
              Message from the HOD
            </div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Shaping the Future of Technology</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                It is a great pleasure to welcome you to the Department of Computer Science and Technology (CST) &
                Computer Science and Information Technology (CSIT). The department has experienced and well-qualified
                faculty members, well-equipped laboratories, research facilities, and all other facilities to nurture
                the development of young engineers.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                To inculcate excellent problem-solving skills, the department always focuses on outcome-based education,
                through outcome-based teaching and learning process. A large number of students pursue their projects in
                various departmental laboratories which provides them strong hands-on learning experience.
              </p>
              <div className="mt-8">
                <p className="font-semibold text-gray-900 dark:text-white">Prof. Dr. Example Name</p>
                <p className="text-gray-500 dark:text-gray-400">Professor and HOD</p>
                <p className="text-gray-500 dark:text-gray-400">Department of CST & CSIT</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

