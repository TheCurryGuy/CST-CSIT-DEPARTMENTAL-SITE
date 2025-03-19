import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StateProvider } from "./context/state-context"
import Layout from "./components/layout"
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import FacultyPage from "./pages/faculty"
import EventsPage from "./pages/events"
import "./globals.css"

export default function App() {
  return (
    <BrowserRouter>
      <StateProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="faculty" element={<FacultyPage />} />
            <Route path="events/:year/:semester" element={<EventsPage />} />
          </Route>
        </Routes>
      </StateProvider>
    </BrowserRouter>
  )
}

