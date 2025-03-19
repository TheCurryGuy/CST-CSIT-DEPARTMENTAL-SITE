"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { useStateContext } from "../context/state-context"
import { Sun, Moon, Menu, X, ChevronDown, GraduationCap, Home, Info, Phone, Calendar } from "lucide-react"

const years = [2022, 2023, 2024, 2025]

export default function Navbar() {
  const { isDarkMode, toggleDarkMode } = useStateContext()
  const [isEventsOpen, setIsEventsOpen] = useState(false)
  const [activeYear, setActiveYear] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-lg py-2" : "bg-transparent py-4"
      }`}
      style={{ transform: "translateZ(0)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-blue-600 to-teal-800 p-1">
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <GraduationCap size={20} />
              </div>
            </div>
            <div>
              <span
                className={`font-bold text-lg transition-colors ${
                  isScrolled ? "text-indigo-900 dark:text-white" : "text-white"
                }`}
              >
                CST & CSIT
              </span>
              <p
                className={`text-xs transition-colors ${
                  isScrolled ? "text-gray-600 dark:text-gray-300" : "text-gray-200"
                }`}
              >
                Department of Excellence
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" icon={<Home size={16} />} isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink to="/about" icon={<Info size={16} />} isScrolled={isScrolled}>
              About
            </NavLink>

            {/* Events Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsEventsOpen(true)}
              onMouseLeave={() => {
                setIsEventsOpen(false)
                setActiveYear(null)
              }}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-md transition-colors ${
                  isScrolled
                    ? "text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400"
                    : "text-white hover:text-blue-200"
                }`}
              >
                <Calendar size={16} />
                <span>Events</span>
                <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {isEventsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 border border-gray-100 dark:border-gray-700"
                  >
                    {years.map((year) => (
                      <div key={year} className="relative" onMouseEnter={() => setActiveYear(year)}>
                        <div className="px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer flex items-center justify-between text-gray-800 dark:text-gray-200">
                          <span>{year}</span>
                          <ChevronDown size={14} className="transform -rotate-90" />
                        </div>

                        {activeYear === year && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-full top-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 border border-gray-100 dark:border-gray-700"
                          >
                            <Link
                              to={`/events/${year}/odd`}
                              className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
                            >
                              Odd Semester
                            </Link>
                            <Link
                              to={`/events/${year}/even`}
                              className="block px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
                            >
                              Even Semester
                            </Link>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/contact" icon={<Phone size={16} />} isScrolled={isScrolled}>
              Contact
            </NavLink>

            {/* Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full mr-2 transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 shadow-lg z-50 relative"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <div className="px-4 py-2">
              <MobileNavLink to="/" icon={<Home size={18} />} onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/about" icon={<Info size={18} />} onClick={() => setIsMobileMenuOpen(false)}>
                About
              </MobileNavLink>

              {/* Mobile Events Dropdown */}
              <div className="py-2">
                <button
                  onClick={() => setIsEventsOpen(!isEventsOpen)}
                  className="w-full flex items-center justify-between px-2 py-2 text-gray-800 dark:text-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>Events</span>
                  </div>
                  <ChevronDown size={16} className={`transition-transform ${isEventsOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {isEventsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-8 space-y-1"
                    >
                      {years.map((year) => (
                        <div key={year} className="py-1">
                          <button
                            onClick={() => setActiveYear(activeYear === year ? null : year)}
                            className="w-full flex items-center justify-between px-2 py-1 text-gray-700 dark:text-gray-300"
                          >
                            <span>{year}</span>
                            <ChevronDown
                              size={14}
                              className={`transition-transform ${activeYear === year ? "rotate-180" : ""}`}
                            />
                          </button>

                          <AnimatePresence>
                            {activeYear === year && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="pl-4 space-y-1 pt-1"
                              >
                                <Link
                                  to={`/events/${year}/odd`}
                                  className="block px-2 py-1 text-blue-600 dark:text-blue-400"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  Odd Semester
                                </Link>
                                <Link
                                  to={`/events/${year}/even`}
                                  className="block px-2 py-1 text-blue-600 dark:text-blue-400"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  Even Semester
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <MobileNavLink to="/contact" icon={<Phone size={18} />} onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

// Helper components for the navbar
function NavLink({ to, children, icon, isScrolled }) {
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <Link
      to={to}
      className={`flex items-center gap-1 px-4 py-2 rounded-md transition-colors ${
        isScrolled
          ? `${isActive ? "text-blue-700 dark:text-blue-400" : "text-gray-800 dark:text-gray-200"} hover:text-blue-700 dark:hover:text-blue-400`
          : `${isActive ? "text-blue-200" : "text-white"} hover:text-blue-200`
      }`}
    >
      {icon}
      <span>{children}</span>
    </Link>
  )
}

function MobileNavLink({ to, children, icon, onClick }) {
  return (
    <Link to={to} className="flex items-center gap-2 px-2 py-2 text-gray-800 dark:text-gray-200" onClick={onClick}>
      {icon}
      <span>{children}</span>
    </Link>
  )
}

