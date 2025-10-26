import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import HomePage from './components/home/home'
import Projects from './components/project/projects'
import ContactPage from './components/contact/contact'
import ServicesPage from './components/services/services'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App