import { useState, useEffect } from "react"
import { Book, FileText, Download, ExternalLink, ChevronDown, ChevronUp, Search } from "lucide-react"
import { subjectsData } from "../utils/data"

export default function SubjectsPage() {
  const [expandedSemesters, setExpandedSemesters] = useState([1])
  const [searchQuery, setSearchQuery] = useState("")
  const [hasSearchResults, setHasSearchResults] = useState(false)
  const [isManualToggle, setIsManualToggle] = useState(false)

  // Filter subjects based on search query
  const filteredSubjects = subjectsData
    .map(semester => ({
      ...semester,
      subjects: semester.subjects.filter(subject =>
        subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        subject.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(semester => semester.subjects.length > 0)

  useEffect(() => {
    if (!isManualToggle && searchQuery.trim()) {
      const semestersWithMatches = filteredSubjects.map(s => s.id)
      setExpandedSemesters(semestersWithMatches)
      setHasSearchResults(semestersWithMatches.length > 0)
    }
  }, [searchQuery, filteredSubjects, isManualToggle])

  const toggleSemester = (semesterId) => {
    setIsManualToggle(true)
    setExpandedSemesters(prev => 
      prev.includes(semesterId)
        ? prev.filter(id => id !== semesterId)
        : [...prev, semesterId]
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-[60vh]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('/pic.png?height=1080&width=1920')" }}
        >
          <span className="w-full h-full absolute opacity-80 bg-gradient-to-r from-blue-900 to-teal-800"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-bold text-5xl mb-6">Course Subjects</h1>
                <p className="text-xl text-gray-200 max-w-xl mx-auto">
                  Explore our comprehensive curriculum organized by semester with access to study materials
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center text-center mb-12">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Semester-wise Subjects</h2>
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Browse through our curriculum organized by semester. Click on any subject to access study materials,
                notes, and resources.
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-12 pr-4 py-3.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 shadow-sm"
                placeholder="Search subjects by name or code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {hasSearchResults && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                Showing results in {filteredSubjects.length} semester{filteredSubjects.length > 1 ? 's' : ''}
              </p>
            )}
          </div>

          {/* Semesters Accordion */}
          <div className="space-y-6 max-w-5xl mx-auto">
            {filteredSubjects.length > 0 ? (
              filteredSubjects.map((semester) => (
                <div
                  key={semester.id}
                  className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
                    expandedSemesters.includes(semester.id) ? "ring-2 ring-blue-500" : "hover:shadow-lg"
                  }`}
                >
                  {/* Semester Header */}
                  <button
                    onClick={() => toggleSemester(semester.id)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4">
                        <span className="text-xl font-bold">{semester.id}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{semester.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {semester.subjects.length} Subjects • {semester.credits} Credits
                        </p>
                      </div>
                    </div>
                    <div className="text-blue-600 dark:text-blue-400">
                      {expandedSemesters.includes(semester.id) ? (
                        <ChevronUp size={24} />
                      ) : (
                        <ChevronDown size={24} />
                      )}
                    </div>
                  </button>

                  {/* Subjects Grid */}
                  {expandedSemesters.includes(semester.id) && (
                    <div className="px-6 pb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {semester.subjects.map((subject) => (
                          <a
                            key={subject.code}
                            href={subject.driveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-gray-50 dark:bg-gray-700 rounded-lg p-5 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 flex flex-col h-full"
                          >
                            <div className="flex items-start mb-4">
                              <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                                  <Book size={20} />
                                </div>
                              </div>
                              <div className="ml-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                  {subject.name}
                                </h4>
                                <p className="text-sm text-blue-600 dark:text-blue-400">{subject.code}</p>
                              </div>
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
                                <FileText size={14} className="mr-2 text-gray-500 dark:text-gray-400" />
                                <span>{subject.type}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                <span className="font-medium">{subject.credits} Credits</span>
                                <span className="mx-2">•</span>
                                <span>{subject.hours} Hours/Week</span>
                              </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {subject.resources} Resources
                              </div>
                              <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                                <span className="text-sm font-medium mr-1">Access</span>
                                <ExternalLink size={14} />
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {searchQuery.trim() ? (
                    <>
                      No subjects found for "<span className="font-medium">{searchQuery}</span>"
                    </>
                  ) : (
                    "No subjects available"
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Additional Resources Section */}
          <div className="mt-20">
            <div className="flex flex-wrap justify-center text-center mb-12">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Additional Resources</h2>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Access additional study materials and resources to support your learning journey.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <Download size={24} />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">
                  Previous Year Papers
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-5">
                  Access a comprehensive collection of previous year question papers for all subjects.
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <Download size={16} className="mr-2" />
                    Access Papers
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <Book size={24} />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">Reference Books</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-5">
                  Find recommended textbooks and reference materials for each subject in the curriculum.
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <Book size={16} className="mr-2" />
                    View Books
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center w-14 h-14 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-3">Lecture Notes</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-5">
                  Download comprehensive lecture notes prepared by faculty members for all subjects.
                </p>
                <div className="text-center">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    <FileText size={16} className="mr-2" />
                    Get Notes
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}