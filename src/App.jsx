import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code, 
  Database, 
  Globe,
  ExternalLink,
  Server,
  Cpu,
  TestTube,
  ShoppingBag,
  Leaf,
  Heart,
  Building,
  GraduationCap,
  Award,
  Sparkles,
  Zap,
  Star,
  ArrowRight,
  ArrowUp,
  MousePointer,
  Eye,
  Target
} from 'lucide-react'
import './App.css'
import SnowEffect from './components/SnowEffect'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [hoveredProject, setHoveredProject] = useState(null)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const { scrollY } = useScroll()
  
  const heroY = useTransform(scrollY, [0, 500], [0, -100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.8])
  const heroRotate = useTransform(scrollY, [0, 300], [0, 5])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true)
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
      
      setTimeout(() => setIsScrolling(false), 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // Create a link to download the PDF file from the public folder
    const link = document.createElement('a')
    link.href = '/cv.pdf' // Assuming your PDF is named cv.pdf in the public folder
    link.download = 'Aliff_Haiqal_CV.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadRecommendation = () => {
    // Create a link to download the recommendation letter PDF
    const link = document.createElement('a')
    link.href = '/recommendation.pdf' // Assuming your recommendation letter is named recommendation.pdf in the public folder
    link.download = 'Aliff_Haiqal_Recommendation_Letter.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const skills = [
    { 
      name: 'Backend Development', 
      icon: <Server />, 
      description: 'C#, .NET Core, PHP, Laravel, Python, Django, REST APIs' 
    },
    { 
      name: 'Database & SQL', 
      icon: <Database />, 
      description: 'SQL Server, MySQL, Database Design, Query Optimization' 
    },
    { 
      name: 'Frontend & Web', 
      icon: <Globe />, 
      description: 'JavaScript, HTML, CSS, Web Fundamentals' 
    },
    { 
      name: 'IoT & Hardware', 
      icon: <Cpu />, 
      description: 'Arduino, C++, IoT Projects, Hardware Integration' 
    }
  ]

  const projects = [
    {
      title: 'DANA Orphanage Management System',
      description: 'National-level orphanage management system for Brunei Government. Built backend API features, interpreted business requirements, and collaborated with development team.',
      technologies: ['.NET Core', 'C#', 'SQL Server'],
      link: 'https://staging.dana.bitlab.solutions/admin/login',
      client: 'Brunei Government (via Bitlab Digital)',
      role: 'Backend Developer Intern',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600'
    },
    {
      title: 'Disease Management System',
      description: 'Laravel-based monitoring system for tracking user health data and flagging potential critical diseases.',
      technologies: ['Laravel', 'PHP', 'MySQL'],
      link: '#',
      client: 'Academic Project',
      role: 'Full-Stack Developer',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600'
    },
    {
      title: 'Clothing E-Commerce Platform',
      description: 'Complete e-commerce platform for clothing retail which mainly focus on the design.',
      technologies: ['HTML/CSS', 'JavaScript'],
      link: '#',
      client: 'Personal Project',
      role: 'Full-Stack Developer',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600'
    },
    {
      title: 'Recipe Desktop App',
      description: 'Desktop application for searching recipes using Electron with public API integration and CRUD features.',
      technologies: ['Electron', 'JavaScript', 'HTML/CSS', 'Public APIs'],
      link: '#',
      client: 'Personal Project',
      role: 'Web App Developer',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600'
    },
    {
      title: 'Automatic Plant-Watering Vase',
      description: 'IoT-based smart vase using Arduino to monitor soil moisture and automatically water plants.',
      technologies: ['Arduino', 'C++', 'IoT', 'Hardware'],
      link: '#',
      client: 'Personal Project',
      role: 'IoT Developer',
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600'
    },
    {
      title: 'Nurich Rehab Center Website',
      description: 'Production website for autism therapy center in Johor (autismterapi.com) using web fundamentals.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Fundamentals'],
      link: 'autismterapi.com',
      client: 'Nurich Rehab Center',
      role: 'Web Developer',
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600'
    }
  ]

  const experience = [
    {
      company: 'Bitlab Digital',
      position: 'Backend Developer Intern',
      location: 'Damansara, Kuala Lumpur',
      period: 'April–June 2025',
      description: 'Worked on the DANA Orphanage Management System using .NET Core, C#, PHP, and SQL Server. Developed REST APIs and backend features. Collaborated with full development team. Highly praised for independence, flexibility, and fast learning.',
      technologies: ['.NET Core', 'C#', 'PHP', 'SQL Server', 'REST APIs']
    },
    {
      company: 'Mr. DIY',
      position: 'Promoter',
      location: 'Malaysia',
      period: 'Nov 2022 – Feb 2023',
      description: 'Built discipline, customer-facing communication, and time management skills in retail environment.',
      technologies: ['Customer Service', 'Sales', 'Communication']
    }
  ]

  const education = [
    {
      degree: 'Diploma in Computer Science',
      institution: 'University/College',
      period: '2022-2025',
      gpa: 'CGPA: 3.50',
      project: 'Final Project: Disease Management System (Laravel PHP)'
    },
    {
      degree: 'SPM',
      institution: 'Secondary School',
      period: '2021',
      results: '5B+, 3B'
    }
  ]

  const testimonials = [
    {
      quote: "Aliff demonstrated strong technical skills and professionalism. He worked independently and showed good judgment when to seek help. His technical foundation and responsible approach to work make him a solid candidate for junior developer roles.",
      author: "Lim Ie Howe",
      position: "Application Manager",
      company: "Bitlab Digital"
    }
  ]

  return (
    <div className="App">
      <SnowEffect />
      {/* Navigation */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderBottom: '1px solid rgba(102, 126, 234, 0.1)'
        }}
      >
        <div className="navbar-content">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.h2 
              style={{ color: '#667eea', fontWeight: 700 }}
              whileHover={{ 
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                transition: { duration: 0.3 }
              }}
            >
              <Sparkles size={20} style={{ marginRight: '8px', display: 'inline' }} />
              Aliff Haiqal
            </motion.h2>
          </motion.div>
          <ul className="nav-links">
            {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section, index) => (
              <motion.li
                key={section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                  style={{ 
                    color: activeSection === section ? '#667eea' : '#333',
                    position: 'relative',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                    transform: 'translateY(-2px)'
                  }}
                  animate={{
                    boxShadow: activeSection === section ? '0 4px 15px rgba(102, 126, 234, 0.4)' : 'none'
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeSection"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        borderRadius: '1px'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <motion.div
          className="hero-bg"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale, rotate: heroRotate }}
        />
        
        {/* Floating particles */}
        <motion.div
          style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            zIndex: 1
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Star size={30} color="#667eea" opacity={0.6} />
        </motion.div>
        
        <motion.div
          style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            zIndex: 1
          }}
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Zap size={25} color="#764ba2" opacity={0.7} />
        </motion.div>
        
        <motion.div
          style={{
            position: 'absolute',
            top: '30%',
            right: '25%',
            zIndex: 1
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles size={20} color="#667eea" />
        </motion.div>

        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ textAlign: 'center' }}
          >
            <motion.h1
              style={{
                fontSize: '3.5rem',
                fontWeight: 800,
                marginBottom: '1rem',
                color: '#fff',
                padding: '0.5em 1.5em',
                borderRadius: '1.5em',
                position: 'relative',
                zIndex: 2,
                background: 'rgba(30, 41, 59, 0.45)', // frosted glass effect
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '2px solid rgba(102, 126, 234, 0.15)',
                filter: 'none',
                opacity: 1,
                mixBlendMode: 'normal',
                backgroundImage: 'none',
                WebkitBackgroundClip: 'unset',
                WebkitTextFillColor: 'unset'
              }}
              whileHover={{ scale: 1.05 }}
              animate={{
                textShadow: isScrolling ? '0 4px 16px rgba(0,0,0,0.8), 0 0 24px #667eea, 0 1px 0 #333' : '0 2px 8px rgba(0,0,0,0.7), 0 0 16px #667eea, 0 1px 0 #333'
              }}
            >
              Hi, I'm Aliff Haiqal
            </motion.h1>
            
            <motion.p
              style={{
                fontSize: '1.3rem',
                marginBottom: '2rem',
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A backend-focused software developer with hands-on experience in real-world system development
            </motion.p>
            
            <motion.div
              style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.a 
                href="#contact" 
                className="btn"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)',
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  border: 'none',
                  padding: '12px 30px',
                  borderRadius: '25px',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <MousePointer size={18} />
                Get In Touch
              </motion.a>
              
              <motion.button 
                onClick={downloadCV} 
                className="btn" 
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 8px 25px rgba(255, 255, 255, 0.3)',
                  y: -3
                }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  background: 'transparent', 
                  border: '2px solid white', 
                  cursor: 'pointer',
                  padding: '12px 30px',
                  borderRadius: '25px',
                  color: 'white',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <Download size={18} />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="portfolio-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '3rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <Eye size={30} style={{ marginRight: '15px', display: 'inline' }} />
            About Me
          </motion.h2>
          
          <div className="about-content" style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ flex: 1, minWidth: '300px' }}
            >
              <motion.div
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '2rem',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(102, 126, 234, 0.1)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.2)'
                }}
              >
                <motion.p
                  style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  I'm a backend-focused software developer with hands-on experience in real-world system development. 
                  I completed my internship at Bitlab Digital where I contributed to a national-level orphanage 
                  management system using .NET Core and SQL Server.
                </motion.p>
                
                <motion.p
                  style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333', marginBottom: '1.5rem' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  I specialize in building scalable APIs and backend systems, with additional skills in PHP, Laravel, 
                  Django, and MySQL. I'm passionate about solving complex problems and continuously growing as a 
                  developer — technically and personally.
                </motion.p>
                
                <motion.p
                  style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or working on IoT projects with Arduino. I'm always looking for new challenges and 
                  opportunities to grow as a developer and create meaningful impact through technology.
                </motion.p>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center', flex: 1, minWidth: '300px' }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                style={{ 
                  width: '300px', 
                  height: '300px', 
                  borderRadius: '50%',
                  margin: '0 auto',
                  overflow: 'hidden',
                  border: '4px solid #667eea',
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)',
                  position: 'relative'
                }}
                whileHover={{ 
                  boxShadow: '0 30px 60px rgba(102, 126, 234, 0.4)',
                  rotate: 5
                }}
                animate={{
                  boxShadow: [
                    '0 20px 40px rgba(102, 126, 234, 0.3)',
                    '0 25px 50px rgba(102, 126, 234, 0.4)',
                    '0 20px 40px rgba(102, 126, 234, 0.3)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <img 
                  src="/profile.jpg" 
                  alt="Aliff Haiqal" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  borderRadius: '50%',
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '4rem',
                  fontWeight: 'bold'
                }}>
                  👨‍💻
                </div>
              </motion.div>
              
              {/* Floating icons around the image */}
              <motion.div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: -1
                }}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-150px',
                    left: '-150px'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Code size={20} color="#667eea" />
                </motion.div>
                
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-150px',
                    right: '-150px'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <Database size={20} color="#764ba2" />
                </motion.div>
                
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '-150px',
                    left: '-150px'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Server size={20} color="#667eea" />
                </motion.div>
                
                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '-150px',
                    right: '-150px'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <Cpu size={20} color="#764ba2" />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="portfolio-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '3rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <Target size={30} style={{ marginRight: '15px', display: 'inline' }} />
            Skills & Expertise
          </motion.h2>
          
          <div className="skills-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
                }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(102, 126, 234, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Animated background */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    opacity: 0,
                    zIndex: 0
                  }}
                  animate={{
                    opacity: hoveredSkill === skill.name ? 0.05 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="skill-icon"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    zIndex: 1
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    boxShadow: '0 10px 20px rgba(102, 126, 234, 0.3)'
                  }}>
                    {skill.icon}
                  </div>
                </motion.div>
                
                <motion.h3 
                  style={{ 
                    marginBottom: '1rem', 
                    color: '#333',
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill.name}
                </motion.h3>
                
                <motion.p 
                  style={{ 
                    color: '#666', 
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1
                  }}
                  whileHover={{ color: '#333' }}
                >
                  {skill.description}
                </motion.p>
                
                {/* Floating particles on hover */}
                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={{
                          position: 'absolute',
                          top: '20%',
                          left: '10%',
                          zIndex: 2
                        }}
                      >
                        <Sparkles size={15} color="#667eea" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={{
                          position: 'absolute',
                          top: '30%',
                          right: '15%',
                          zIndex: 2
                        }}
                      >
                        <Star size={12} color="#764ba2" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        style={{
                          position: 'absolute',
                          bottom: '20%',
                          left: '20%',
                          zIndex: 2
                        }}
                      >
                        <Zap size={10} color="#667eea" />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)' }}>
        <div className="portfolio-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '3rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <Code size={30} style={{ marginRight: '15px', display: 'inline' }} />
            Featured Projects
          </motion.h2>
          
          <div className="projects-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: '0 25px 50px rgba(102, 126, 234, 0.3)'
                }}
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(102, 126, 234, 0.1)',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Animated background overlay */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    opacity: 0,
                    zIndex: 1
                  }}
                  animate={{
                    opacity: hoveredProject === project.title ? 0.05 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div 
                  className="project-image"
                  style={{
                    height: '200px',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '12px'
                  }}
                >
                  {/* Floating particles in project image */}
                  <AnimatePresence>
                    {hoveredProject === project.title && (
                      <>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          style={{
                            position: 'absolute',
                            top: '20%',
                            left: '20%',
                            zIndex: 2
                          }}
                        >
                          <Sparkles size={20} color="white" />
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          style={{
                            position: 'absolute',
                            bottom: '20%',
                            right: '20%',
                            zIndex: 2
                          }}
                        >
                          <Star size={15} color="white" />
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      zIndex: 1
                    }}
                  />
                </motion.div>
                
                <div className="project-content" style={{ padding: '2rem', position: 'relative', zIndex: 2 }}>
                  <motion.h3 
                    className="project-title"
                    style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 600, 
                      marginBottom: '1rem',
                      color: '#333'
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    style={{ 
                      fontSize: '0.9rem', 
                      color: '#667eea', 
                      marginBottom: '1rem',
                      fontWeight: 500
                    }}
                    whileHover={{ color: '#764ba2' }}
                  >
                    <strong>Client:</strong> {project.client} | <strong>Role:</strong> {project.role}
                  </motion.p>
                  
                  <motion.p 
                    className="project-description"
                    style={{ 
                      color: '#666', 
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}
                    whileHover={{ color: '#333' }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        style={{
                          display: 'inline-block',
                          background: 'linear-gradient(45deg, #667eea, #764ba2)',
                          color: 'white',
                          padding: '6px 12px',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          margin: '3px',
                          fontWeight: 500
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.a 
                    href={project.link} 
                    className="btn" 
                    style={{ 
                      fontSize: '0.9rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'linear-gradient(45deg, #667eea, #764ba2)',
                      color: 'white',
                      padding: '10px 20px',
                      borderRadius: '25px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 8px 20px rgba(102, 126, 234, 0.4)',
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section" style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)' }}>
        <div className="portfolio-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '3rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <Building size={30} style={{ marginRight: '15px', display: 'inline' }} />
            Work Experience
          </motion.h2>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                style={{
                  background: 'white',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  marginBottom: '2rem',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(102, 126, 234, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(102, 126, 234, 0.2)'
                }}
              >
                {/* Animated background */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left'
                  }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
                  viewport={{ once: true }}
                />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div style={{ flex: 1 }}>
                    <motion.h3 
                      style={{ 
                        color: '#333', 
                        marginBottom: '0.5rem',
                        fontSize: '1.4rem',
                        fontWeight: 600
                      }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {exp.position}
                    </motion.h3>
                    <motion.h4 
                      style={{ 
                        color: '#667eea', 
                        marginBottom: '0.5rem',
                        fontSize: '1.2rem',
                        fontWeight: 500
                      }}
                      whileHover={{ color: '#764ba2' }}
                    >
                      {exp.company}
                    </motion.h4>
                    <motion.p 
                      style={{ 
                        color: '#666', 
                        fontSize: '0.95rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                      whileHover={{ color: '#333' }}
                    >
                      📍 {exp.location} | 📆 {exp.period}
                    </motion.p>
                  </div>
                  
                  {/* Company icon */}
                  <motion.div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      background: 'linear-gradient(45deg, #667eea, #764ba2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      marginLeft: '1rem'
                    }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Building size={24} />
                  </motion.div>
                </div>
                
                <motion.p 
                  style={{ 
                    color: '#666', 
                    lineHeight: '1.8', 
                    marginBottom: '1.5rem',
                    fontSize: '1rem'
                  }}
                  whileHover={{ color: '#333' }}
                >
                  {exp.description}
                </motion.p>
                
                <div>
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      style={{
                        display: 'inline-block',
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        margin: '3px',
                        fontWeight: 500
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                
                {/* Floating particles */}
                <AnimatePresence>
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '20%',
                      right: '10%',
                      zIndex: 1
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles size={15} color="#667eea" opacity={0.6} />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'linear-gradient(135deg, #e9ecef 0%, #f8f9fa 100%)', paddingBottom: '5rem' }}>
        <div className="portfolio-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '2.5rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <Mail size={30} style={{ marginRight: '15px', display: 'inline' }} />
            Contact Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              background: 'rgba(255,255,255,0.7)',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(102, 126, 234, 0.08)',
              padding: '2.5rem',
              textAlign: 'center',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(102, 126, 234, 0.1)'
            }}
            whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(102, 126, 234, 0.15)' }}
          >
            <p style={{ fontSize: '1.1rem', color: '#333', marginBottom: '2rem' }}>
              Want to collaborate, have a question, or just want to say hi? <br />
              Feel free to reach out!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'center' }}>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=a.haiqaal@gmail.com&su=Hello&body=Just wanted to say hi"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  color: 'white', 
                  padding: '12px 28px', 
                  borderRadius: '25px',
                  fontWeight: 600, 
                  textDecoration: 'none', 
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.15)'
                }}
              >
                <Mail size={20} /> 
                a.haiqaal@gmail.com
              </a>
              
              <a href="https://github.com/Heyqull" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'white', color: '#333', border: '2px solid #333',
                padding: '12px 28px', borderRadius: '25px', fontWeight: 600,
                textDecoration: 'none', fontSize: '1.1rem',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.08)'
              }}>
                <Github size={20} /> github.com/Heyqull
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', paddingBottom: '5rem' }}>
        <div className="portfolio-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              fontWeight: 700,
              marginBottom: '3rem',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            <Award size={30} style={{ marginRight: '15px', display: 'inline' }} />
            What People Say
          </motion.h2>
          
          <motion.div
            style={{
              textAlign: 'center',
              marginBottom: '3rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={downloadRecommendation}
              style={{
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 12px 35px rgba(102, 126, 234, 0.4)',
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} />
              Download Recommendation Letter
            </motion.button>
          </motion.div>
          
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                style={{
                  background: 'white',
                  padding: '3rem',
                  borderRadius: '20px',
                  marginBottom: '2rem',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(102, 126, 234, 0.1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(102, 126, 234, 0.2)'
                }}
              >
                {/* Quote icon */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '30px',
                    fontSize: '4rem',
                    color: 'rgba(102, 126, 234, 0.1)',
                    fontFamily: 'serif'
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  "
                </motion.div>
                
                {/* Animated background */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left'
                  }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: index * 0.15 + 0.5 }}
                  viewport={{ once: true }}
                />
                
                <motion.div style={{ position: 'relative', zIndex: 2 }}>
                  <motion.p 
                    style={{ 
                      fontSize: '1.2rem', 
                      lineHeight: '1.8', 
                      color: '#333', 
                      marginBottom: '2rem',
                      fontStyle: 'italic',
                      textAlign: 'center'
                    }}
                    whileHover={{ color: '#667eea' }}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    gap: '1rem'
                  }}>
                    <motion.div
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.5rem'
                      }}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {testimonial.author.charAt(0)}
                    </motion.div>
                    
                    <div style={{ textAlign: 'center' }}>
                      <motion.h4 
                        style={{ 
                          color: '#333', 
                          marginBottom: '0.25rem',
                          fontSize: '1.1rem',
                          fontWeight: 600
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {testimonial.author}
                      </motion.h4>
                      <motion.p 
                        style={{ 
                          color: '#667eea', 
                          fontSize: '0.9rem',
                          fontWeight: 500
                        }}
                        whileHover={{ color: '#764ba2' }}
                      >
                        {testimonial.position} at {testimonial.company}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Floating particles */}
                <AnimatePresence>
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '30%',
                      left: '10%',
                      zIndex: 1
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Star size={15} color="#667eea" opacity={0.6} />
                  </motion.div>
                  <motion.div
                    style={{
                      position: 'absolute',
                      bottom: '20%',
                      right: '15%',
                      zIndex: 1
                    }}
                    animate={{
                      y: [0, 15, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Sparkles size={12} color="#764ba2" opacity={0.7} />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App