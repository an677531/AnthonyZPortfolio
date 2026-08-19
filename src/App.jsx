import { useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectTemplate from './components/ProjectTemplate';
import Footer from './components/Footer';
import RecipeJungle from './components/RecipeJungleProject'
function App() {
  const [page, setPage] = useState('home');

  return (
    <>

      <Nav currentPage={page} onNavigate={setPage} />

      <main>
        {page === 'home' && <Home onNavigate={setPage} />}
        {page === 'about' && <About onNavigate={setPage} />}
        {page === 'projects' && <Projects onNavigate={setPage} />}
        {page === 'contact' && <Contact onNavigate={setPage} />}
        {page === 'project-template' && <ProjectTemplate onNavigate={setPage} />}
        {page === 'project-recipe-jungle' && <RecipeJungle onNavigate={setPage} />}
      </main>
      <Footer />
    </>
  )
}

export default App
