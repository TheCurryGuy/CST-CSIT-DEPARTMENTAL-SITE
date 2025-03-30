import { Rocket, BookOpen, FlaskRoundIcon as Flask, Award } from "lucide-react"
import { useEffect } from "react"

export default function AboutPage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Hero Section - Increased height from 60vh to 70vh */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-[70vh]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('/pic.png?height=1080&width=1920')" }}
        >
          <span className="w-full h-full absolute opacity-75 bg-gradient-to-r from-blue-900 to-teal-800"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">About Our Department</h1>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-200">
                  Excellence in education, research, and innovation since 1995
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Overview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
                Department Overview
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 dark:text-gray-300">
                The Department of Computer Science and Technology (CST) & Computer Science and Information Technology
                (CSIT) was established in 1995 with a vision to impart quality education in the field of computer
                science and information technology.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700 dark:text-gray-300">
                Over the years, the department has grown significantly and has established itself as a center of
                excellence in teaching, research, and innovation. Our department is equipped with state-of-the-art
                laboratories, experienced faculty members, and a conducive learning environment.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700 dark:text-gray-300">
                We offer undergraduate, postgraduate, and doctoral programs in computer science and information
                technology, preparing students for successful careers in the rapidly evolving tech industry.
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-6 shadow-lg rounded-lg">
                <img
                  alt="Department Building"
                  src="/placeholder.svg?height=600&width=800"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    className="absolute left-0 top-0 h-20 w-20 text-gray-100 dark:text-gray-700 transform -translate-x-6 -translate-y-8"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.68967 8.45999C7.16615 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9163 8.45999C14.3927 8.93999 14.6242 9.55333 14.6242 10.3Z"
                      fill="currentColor"
                    />
                  </svg>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">Our Mission</h4>
                  <p className="text-md font-light mt-2 text-gray-700 dark:text-gray-300">
                    To provide quality education in computer science and information technology, fostering innovation,
                    research, and entrepreneurship, and to prepare students to meet the challenges of the rapidly
                    evolving tech industry.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Academic Programs</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600 dark:text-gray-300">
                We offer a range of undergraduate, postgraduate, and doctoral programs designed to prepare students for
                successful careers in the tech industry.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="px-6 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg h-full">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mb-4">
                  <BookOpen size={32} />
                </div>
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">B.Tech in CSE</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  A 4-year undergraduate program focusing on computer science fundamentals, programming, algorithms, and
                  software development.
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400 text-sm">
                  <li>Duration: 4 years</li>
                  <li>Intake: 120 students</li>
                  <li>AICTE Approved</li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="px-6 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg h-full">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mb-4">
                  <BookOpen size={32} />
                </div>
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">B.Tech in IT</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  A 4-year undergraduate program focusing on information technology, networking, database management,
                  and web technologies.
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400 text-sm">
                  <li>Duration: 4 years</li>
                  <li>Intake: 60 students</li>
                  <li>AICTE Approved</li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="px-6 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg h-full">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 mb-4">
                  <BookOpen size={32} />
                </div>
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">M.Tech in CSE</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  A 2-year postgraduate program offering advanced knowledge in specialized areas of computer science and
                  engineering.
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400 text-sm">
                  <li>Duration: 2 years</li>
                  <li>Intake: 30 students</li>
                  <li>Research-oriented</li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="px-6 py-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg h-full">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mb-4">
                  <BookOpen size={32} />
                </div>
                <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ph.D. Program</h5>
                <p className="text-gray-700 dark:text-gray-300">
                  A doctoral program for those interested in pursuing advanced research in computer science and
                  information technology.
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400 text-sm">
                  <li>Duration: 3-5 years</li>
                  <li>Full-time and part-time options</li>
                  <li>Research funding available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Research Areas</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600 dark:text-gray-300">
                Our department is actively involved in cutting-edge research across various domains of computer science
                and information technology.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 mb-8">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-6 py-8">
                  <div className="text-center mb-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                      <Rocket size={32} />
                    </div>
                  </div>
                  <h5 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    Artificial Intelligence & Machine Learning
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Research in AI algorithms, deep learning, natural language processing, computer vision, and
                    intelligent systems.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      Deep Learning
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      NLP
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      Computer Vision
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 mb-8">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-6 py-8">
                  <div className="text-center mb-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                      <Flask size={32} />
                    </div>
                  </div>
                  <h5 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    Data Science & Big Data Analytics
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Research in data mining, big data processing, predictive analytics, and data visualization
                    techniques.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                      Data Mining
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                      Big Data
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
                      Visualization
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 mb-8">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-8 shadow-lg rounded-lg">
                <div className="px-6 py-8">
                  <div className="text-center mb-4">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300">
                      <Award size={32} />
                    </div>
                  </div>
                  <h5 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4">
                    Cybersecurity & Network Security
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    Research in network security, cryptography, secure systems, and ethical hacking methodologies.
                  </p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200">
                      Cryptography
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200">
                      Network Security
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200">
                      Ethical Hacking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Our Facilities</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600 dark:text-gray-300">
                The department is equipped with state-of-the-art laboratories and facilities to support teaching,
                learning, and research activities.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-8 shadow-lg rounded-lg overflow-hidden">
                <img alt="AI Lab" src="/placeholder.svg?height=400&width=600" className="w-full" />
                <div className="px-6 py-6">
                  <h6 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI & Machine Learning Lab</h6>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Equipped with high-performance computing systems, GPUs, and specialized software for AI and ML
                    research.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-8 shadow-lg rounded-lg overflow-hidden">
                <img alt="Networking Lab" src="/placeholder.svg?height=400&width=600" className="w-full" />
                <div className="px-6 py-6">
                  <h6 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Networking & Security Lab</h6>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Features networking equipment, security tools, and simulation software for hands-on networking and
                    security training.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-8 shadow-lg rounded-lg overflow-hidden">
                <img alt="Software Lab" src="/placeholder.svg?height=400&width=600" className="w-full" />
                <div className="px-6 py-6">
                  <h6 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Software Development Lab</h6>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Modern computers with the latest software development tools, IDEs, and collaboration platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full mb-8 shadow-lg rounded-lg overflow-hidden">
                <img alt="Research Lab" src="/placeholder.svg?height=400&width=600" className="w-full" />
                <div className="px-6 py-6">
                  <h6 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Research & Innovation Center</h6>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Dedicated space for research scholars and faculty to work on innovative projects and collaborative
                    research.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Achievements & Milestones</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600 dark:text-gray-300">
                Our department has achieved significant milestones and recognition over the years.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-8 shadow-lg rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Academic Excellence</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-3">
                  <li>Consistently ranked among the top 20 computer science departments in the country</li>
                  <li>100% placement record for the past 5 consecutive years</li>
                  <li>Over 50 research papers published in international journals annually</li>
                  <li>Collaboration with leading tech companies for industry-relevant curriculum development</li>
                  <li>Accredited by the National Board of Accreditation (NBA) with the highest grade</li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-800 w-full mb-8 shadow-lg rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Research & Innovation</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-3">
                  <li>Received grants worth over $2 million for various research projects</li>
                  <li>15 patents filed by faculty and students in the last 5 years</li>
                  <li>Established a Center of Excellence in Artificial Intelligence and Data Science</li>
                  <li>Organized international conferences and workshops attracting global participation</li>
                  <li>Students have won national and international coding and hackathon competitions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

