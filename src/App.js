import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Particles from 'react-particles-js'

import NavBar from './components/NavBar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>
    <Particles
      params={{
        particles:{
          number:{
            value:35,
            density:{
              enable:true,
              value_area:900
            },
            shape:{
              type:"triangle",
              stroke:{
                width: 6,
                color: "6fbf9e"
              }
            }
          }
        }
      }}
    />
    <NavBar />
    <Header />
    <AboutMe />
    <Skills />
    <Experience />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
