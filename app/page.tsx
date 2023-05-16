import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import SideComponent from './components/SideComponent';
import Abbout from './components/Abbout';
import Portfloio from './components/Portfloio';
import Skills from './components/Skills';
import Contact from './components/Contact';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <SideComponent />
      <Navbar />
      <HomeHero />
      <Abbout/>
      <Portfloio />
      <Skills />
      <Contact />
      
    </>
    
  )
}
