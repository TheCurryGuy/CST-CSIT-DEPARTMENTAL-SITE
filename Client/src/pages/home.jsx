import Hero from "../components/hero"
import StatsSection from "../components/stats-section"
import MessageSection from "../components/message-section"
import FacultySection from "../components/faculty-section"
import NewsSection from "../components/news-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <MessageSection />
      <NewsSection />
      <FacultySection />
    </>
  )
}

