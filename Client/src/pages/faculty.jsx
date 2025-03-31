import React, { useState, useEffect, useMemo } from "react";
import { fetchFacultyData } from '../utils/data';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe, BookOpen, Award, FileText, ExternalLink } from "lucide-react";
import Modal from "../components/ui/modal";

export default function FacultyPage() {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeSpecialization, setActiveSpecialization] = useState(null);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchFacultyData();
      setFacultyList(data);
      if (data.length === 0) {
        setError("No faculty data found.");
      }
    } catch (err) {
      console.error("Error calling fetchFacultyData from component:", err);
      setError("Failed to load faculty data. Please try again later.");
      setFacultyList([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => { 
    loadData();
    window.scrollTo(0, 0);
  }, []);
  const specializations = useMemo(() => {
    if (!facultyList) return [];
    return [...new Set(facultyList.map((faculty) => faculty.specialization).filter(Boolean))];
  }, [facultyList]);

  const filteredFaculty = useMemo(() => {
    if (!facultyList) return [];
    return activeSpecialization
      ? facultyList.filter((faculty) => faculty.specialization === activeSpecialization)
      : facultyList;
  }, [facultyList, activeSpecialization]);

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-[60vh]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: "url('/pic.png?height=1080&width=1920')" }}
        >
          <span className="w-full h-full absolute opacity-75 bg-gradient-to-r from-blue-900 to-teal-800"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pt-10">
                <h1 className="text-white font-bold text-5xl">Our Faculty</h1>
                <p className="mt-4 text-lg text-gray-200">
                  Meet our distinguished faculty members who are experts in their respective fields
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Faculty Directory</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600 dark:text-gray-300">
                Our department has a team of highly qualified and experienced faculty members dedicated to academic
                excellence and research.
              </p>
            </div>
          </div>
          {loading ? (
            <div className="text-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Loading Faculty...</p>
            </div>
          ) : error ? (
            <div className="text-center py-10 bg-neutral-100 text-red-700 p-4 rounded-md">
              <p className="font-semibold">Failed to load faculty data:</p>
              <p>{error}</p>
              <button onClick={loadData} className="bg-red-500 px-7 py-1 rounded-xl cursor-pointer hover:bg-red-700 text-black">Retry</button>
            </div>
          ) : (
            <>
              {specializations.length > 0 && (
                <div className="mb-12">
                  <div className="flex flex-wrap justify-center">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                        Filter by Specialization
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <button
                          onClick={() => setActiveSpecialization(null)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSpecialization === null
                              ? "bg-blue-500 text-white"
                              : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                            }`}
                        >
                          All
                        </button>
                        {specializations.map((specialization, index) => (
                          <button
                            key={index}
                            onClick={() => setActiveSpecialization(specialization)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeSpecialization === specialization
                                ? "bg-blue-500 text-white"
                                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                              }`}
                          >
                            {specialization}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}


              {/* Faculty Grid */}
              {filteredFaculty.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1 lg:px-20">
                  {filteredFaculty.map((faculty) => (
                    <div
                      key={faculty._id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-6">
                          <div className="relative h-24 w-24 rounded-full overflow-hidden mr-4 flex-shrink-0">
                            <img src={faculty.image || "/placeholder.svg"} alt={faculty.name} className="object-cover w-full h-full" onError={(e) => { e.target.src = '/placeholder.svg'; }} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{faculty.name}</h3>
                            <p className="text-blue-600 dark:text-blue-400">{faculty.position}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{faculty.specialization}</p>
                          </div>
                        </div>
                        {/* ... Education, Research Interests, Contact ... */}
                        <div className="mb-4">
                          <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{faculty.education}</p>
                        </div>
                        <div className="mb-4">
                          <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Research Interests</h4>
                          <div className="flex flex-wrap gap-2">
                            {faculty.researchInterests?.map((interest, index) => (<span key={index} className="px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs"> {interest} </span>))}
                          </div>
                        </div>
                        <div className="mb-4">
                          <h4 className="text-md font-semibold text-gray-900 dark:text-white mb-2">Contact</h4>
                          <div className="space-y-1 text-sm">
                            <div className="flex items-center text-gray-600 dark:text-gray-400"> <Mail size={14} className="mr-2 flex-shrink-0" /> <span className="truncate">{faculty.email}</span> </div>
                            {faculty.phone && (<div className="flex items-center text-gray-600 dark:text-gray-400"> <Phone size={14} className="mr-2 flex-shrink-0" /> <span>{faculty.phone}</span> </div>)}
                            <div className="flex items-center text-gray-600 dark:text-gray-400"> <MapPin size={14} className="mr-2 flex-shrink-0" /> <span>{faculty.office}</span> </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                          <div className="flex space-x-3">
                            {faculty.socialLinks?.linkedin && faculty.socialLinks.linkedin !== '#' && (<a href={faculty.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"> <Linkedin size={18} /> </a>)}
                            {faculty.socialLinks?.twitter && faculty.socialLinks.twitter !== '#' && (<a href={faculty.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"> <Twitter size={18} /> </a>)}
                            {faculty.socialLinks?.website && faculty.socialLinks.website !== '#' && (<a href={faculty.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"> <Globe size={18} /> </a>)}
                          </div>
                          <button onClick={() => setSelectedFaculty(faculty)} className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"> View Profile </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    No faculty members found{activeSpecialization ? ` with specialization: ${activeSpecialization}` : ""}.
                  </p>
                  <button
                    onClick={() => setActiveSpecialization(null)}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Show All Faculty
                  </button>
                </div>
              )}
            </>
          )}
          <Modal isOpen={!!selectedFaculty} onClose={() => setSelectedFaculty(null)} title={selectedFaculty?.name || ""} >
            {selectedFaculty && (
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex-shrink-0">
                    {/* ... Image, Contact, Social ... */}
                    <div className="relative h-64 w-full rounded-lg overflow-hidden"> <img src={selectedFaculty.image || "/placeholder.svg"} alt={selectedFaculty.name} className="object-cover w-full h-full" onError={(e) => { e.target.src = '/placeholder.svg'; }} /> </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-gray-700 dark:text-gray-300"> <Mail size={16} className="mr-2 flex-shrink-0" /> <span className="break-all">{selectedFaculty.email}</span> </div>
                      {selectedFaculty.phone && (<div className="flex items-center text-gray-700 dark:text-gray-300"> <Phone size={16} className="mr-2 flex-shrink-0" /> <span>{selectedFaculty.phone}</span> </div>)}
                      <div className="flex items-center text-gray-700 dark:text-gray-300"> <MapPin size={16} className="mr-2 flex-shrink-0" /> <span>{selectedFaculty.office}</span> </div>
                    </div>
                    <div className="mt-4 flex space-x-4">
                      {selectedFaculty.socialLinks?.linkedin && selectedFaculty.socialLinks.linkedin !== '#' && (<a href={selectedFaculty.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"> <Linkedin size={20} /> </a>)}
                      {selectedFaculty.socialLinks?.twitter && selectedFaculty.socialLinks.twitter !== '#' && (<a href={selectedFaculty.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"> <Twitter size={20} /> </a>)}
                      {selectedFaculty.socialLinks?.website && selectedFaculty.socialLinks.website !== '#' && (<a href={selectedFaculty.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"> <Globe size={20} /> </a>)}
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-6">
                    {/* ... Position, Education, Experience, Interests ... */}
                    <div> <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedFaculty.position}</h3> <p className="text-blue-600 dark:text-blue-400">{selectedFaculty.specialization}</p> </div>
                    <div> <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h4> <p className="text-gray-700 dark:text-gray-300">{selectedFaculty.education}</p> </div>
                    <div> <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Experience</h4> <p className="text-gray-700 dark:text-gray-300">{selectedFaculty.experience}</p> </div>
                    <div> <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Research Interests</h4> <div className="flex flex-wrap gap-2 mt-2"> {selectedFaculty.researchInterests?.map((interest, index) => (<span key={index} className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm"> {interest} </span>))} </div> </div>
                  </div>
                </div>

                {/* Publications Section */}
                {selectedFaculty.publications && selectedFaculty.publications.length > 0 && (<div className="border-t border-gray-200 dark:border-gray-700 pt-6"> <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4"> General Publications </h4> <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300"> {selectedFaculty.publications.map((pub, index) => (<li key={index}>{pub}</li>))} </ul> </div>)}

                {/* Research Papers Section */}
                {selectedFaculty.researchPapers && selectedFaculty.researchPapers.length > 0 && (<div className="border-t border-gray-200 dark:border-gray-700 pt-6"> <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4"> Published Research Papers </h4> <ol className="list-decimal space-y-4 pl-5"> {selectedFaculty.researchPapers.map((paper, index) => (<li key={index} className="text-gray-700 dark:text-gray-300 pl-1"> {paper.link ? (<a href={paper.link} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"> {paper.title} <ExternalLink size={16} className="ml-1 flex-shrink-0" /> </a>) : (<span className="font-medium">{paper.title}</span>)} <p className="text-sm text-gray-600 dark:text-gray-400 mt-1"> {paper.authors}. {paper.journal} </p> </li>))} </ol> </div>)}

              </div>
            )}
          </Modal>
        </div>
      </section>

      {/* Faculty Achievements (No changes needed here, assumes static content) */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-16">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Faculty Achievements</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-600 dark:text-gray-300">
                Our faculty members have received numerous accolades and recognition for their contributions to academia
                and research.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            {/* Awards Card */}
            <div className="w-full md:w-4/12 px-4 mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"> <Award size={32} /> </div>
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4"> Awards & Recognition </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {/* Static list items */}
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <Award size={14} /> </span> <span>15+ National Awards for Teaching Excellence</span> </li>
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <Award size={14} /> </span> <span>8 Faculty members recognized as IEEE Fellows</span> </li>
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <Award size={14} /> </span> <span>5 Best Researcher Awards from national research foundations</span> </li>
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <Award size={14} /> </span> <span>12 Patents granted to faculty members in the last 5 years</span> </li>
                </ul>
              </div>
            </div>
            {/* Research Card */}
            <div className="w-full md:w-4/12 px-4 mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"> <BookOpen size={32} /> </div>
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4"> Research & Publications </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {/* Static list items */}
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <BookOpen size={14} /> </span> <span>200+ Research papers published in international journals annually</span> </li>
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <BookOpen size={14} /> </span> <span>25+ Books authored by faculty members</span> </li>
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <BookOpen size={14} /> </span> <span>15 Research projects with funding over $5 million</span> </li>
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <BookOpen size={14} /> </span> <span>10+ International research collaborations with top universities</span> </li>
                </ul>
              </div>
            </div>
            {/* Contributions Card */}
            <div className="w-full md:w-4/12 px-4 mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 h-full">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"> <FileText size={32} /> </div>
                <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white mb-4"> Academic Contributions </h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                  {/* Static list items */}
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <FileText size={14} /> </span> <span>30+ Faculty members serving as journal editors</span> </li>
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <FileText size={14} /> </span> <span>50+ Conference papers presented annually</span> </li>
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <FileText size={14} /> </span> <span>20+ Workshops and seminars organized each year</span> </li>
                  <li className="flex items-start"> <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0"> <FileText size={14} /> </span> <span>15 Faculty members on national education committees</span> </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}