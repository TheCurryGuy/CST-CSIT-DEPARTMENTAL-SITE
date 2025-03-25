import { useParams, Navigate } from "react-router-dom"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { eventsData } from "../utils/data"
import { useEffect } from "react"

export default function EventsPage() {
  const { year, semester } = useParams()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Validate year and semester
  if (!["2022", "2023", "2024", "2025"].includes(year) || !["odd", "even"].includes(semester)) {
    return <Navigate to="/" replace />
  }

  const events = eventsData[year]?.[semester] || []
  const categories = [...new Set(events.map((event) => event.category))]

  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900">
        {/* Hero Section with Background Image */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-[60vh]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: "url('/pic.png')" }} // Replace '/event_banner.jpg' with your image path
          >
            <span className="w-full h-full absolute opacity-75 bg-gradient-to-r from-blue-900 to-teal-800"></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-0"> {/* Removed pr-12 to center text for wider screens if needed */}
                  <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight">
                    Events - {year}
                    <span className="block sm:inline">
                      ({semester.charAt(0).toUpperCase() + semester.slice(1)} Semester)
                    </span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-200">
                    Explore upcoming and past events for the {semester} semester of {year}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          {/* Categories Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Event Categories</h2>
            <div className="flex flex-wrap gap-3"> {/* Changed gap-2 to gap-3 for better spacing */}
              {categories.map((category) => (
                <span
                  key={category}
                  className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 text-sm font-medium shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-1 lg:mx-20"> {/* Kept mx-1 lg:mx-20 and gap-8 */}
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Clock size={16} className="mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <Users size={16} className="mr-2" />
                      <span>{event.attendees} Attendees</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Events Message */}
          {events.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mb-4">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">No Events Found</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                There are no events scheduled for the {semester} semester of {year} yet. Please check back later or
                explore other semesters.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}