"use client"

import { Mail, Phone, MapPin, Send, Linkedin, Twitter } from "lucide-react"
import { studentCoordinators, facultyContacts } from "../utils/data"
import { useEffect } from "react"

export default function ContactPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero Section - Increased height from 40vh to 60vh */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-[60vh]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
        >
          <span className="w-full h-full absolute opacity-75 bg-gradient-to-r from-blue-900 to-teal-800"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-bold text-5xl">Contact Us</h1>
                <p className="mt-4 text-lg text-gray-200">
                  Get in touch with our department for inquiries, collaborations, or information
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Contact Info */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Department Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <MapPin size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Address</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Department of CST & CSIT
                      <br />
                      University Campus, New Town
                      <br />
                      Kolkata, West Bengal 700156
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Phone size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      Office: +91 33 1234 5678
                      <br />
                      Fax: +91 33 1234 5679
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Mail size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Email</h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      info@cstcsit.edu
                      <br />
                      admissions@cstcsit.edu
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Twitter size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">Social Media</h4>
                    <div className="mt-2 flex space-x-4">
                      <a
                        href="#"
                        className="text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-indigo-400"
                      >
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4 mr-auto ml-auto mt-12 lg:mt-0">
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1252655858164!2d88.4869!3d22.5764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzM1LjAiTiA4OMKwMjknMTIuOCJF!5e0!3m2!1sen!2sin!4v1616661315372!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: "0.5rem" }}
                  allowFullScreen
                  loading="lazy"
                  className="shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Get In Touch</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600 dark:text-gray-300">
                Have a question or want to know more about our department? Fill out the form below and we'll get back to
                you.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-8/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white dark:bg-gray-900">
                <div className="flex-auto p-8">
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 bg-white dark:bg-gray-800 rounded text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full dark:text-white"
                          placeholder="Full Name"
                          id="name"
                        />
                      </div>

                      <div className="relative">
                        <label
                          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 bg-white dark:bg-gray-800 rounded text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full dark:text-white"
                          placeholder="Email"
                          id="email"
                        />
                      </div>

                      <div className="relative">
                        <label
                          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          className="border-0 px-3 py-3 bg-white dark:bg-gray-800 rounded text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full dark:text-white"
                          placeholder="Phone Number"
                          id="phone"
                        />
                      </div>

                      <div className="relative">
                        <label
                          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                          htmlFor="subject"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 bg-white dark:bg-gray-800 rounded text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full dark:text-white"
                          placeholder="Subject"
                          id="subject"
                        />
                      </div>

                      <div className="relative col-span-2">
                        <label
                          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          rows={5}
                          className="border-0 px-3 py-3 bg-white dark:bg-gray-800 rounded text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full dark:text-white"
                          placeholder="Your Message"
                          id="message"
                        ></textarea>
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <button
                        className="bg-gradient-to-r from-blue-600 to-teal-600 text-white active:bg-blue-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        <div className="flex items-center">
                          <Send size={16} className="mr-2" />
                          Send Message
                        </div>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Coordinators */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Student Coordinators</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600 dark:text-gray-300">
                Our student coordinators are here to help you with any student-related inquiries.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            {studentCoordinators.map((coordinator) => (
              <div key={coordinator.id} className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
                <div className="px-6 py-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
                  <div className="inline-block relative w-32 h-32 mb-6">
                    <img
                      alt={coordinator.name}
                      src={coordinator.image || "/placeholder.svg"}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{coordinator.name}</h5>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">{coordinator.position}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                      <Mail size={16} className="mr-2" />
                      <span>{coordinator.email}</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-600 dark:text-gray-300">
                      <Phone size={16} className="mr-2" />
                      <span>{coordinator.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Contacts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Faculty Contacts</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600 dark:text-gray-300">
                Get in touch with our faculty members for academic and research inquiries.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            {facultyContacts.map((faculty) => (
              <div key={faculty.id} className="w-full md:w-6/12 lg:w-4/12 px-4 mb-8">
                <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                  <div className="md:w-1/3 relative h-48 md:h-auto">
                    <img
                      alt={faculty.name}
                      src={faculty.image || "/placeholder.svg"}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{faculty.name}</h5>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-4">{faculty.position}</p>
                    <div className="space-y-2">
                      <div className="flex items-start text-gray-600 dark:text-gray-300">
                        <Mail size={16} className="mr-2 mt-1 flex-shrink-0" />
                        <span>{faculty.email}</span>
                      </div>
                      <div className="flex items-start text-gray-600 dark:text-gray-300">
                        <Phone size={16} className="mr-2 mt-1 flex-shrink-0" />
                        <span>{faculty.phone}</span>
                      </div>
                      <div className="flex items-start text-gray-600 dark:text-gray-300">
                        <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                        <span>{faculty.office}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

