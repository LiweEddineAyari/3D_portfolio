import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import { github,facebook,linkedin,cv } from '../assets'
import './Hero.css';

const Hero = () => {
  return (
    <section className='relative w-full h-[70vh] '>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
          </div>
         <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m <span className='text-[#915eff]'>Liwa Ayari</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a Full-Stack Developer, i develop user interfaces and web applications</p>
          <div className='flex flex-row items-center justify-center gap-5 mt-10'>
              <a href="https://github.com/LiweEddineAyari/"  className={`black-gradient w-16 h-16 rounded-full flex justify-center items-center cursor-pointer`} >
                <img src={github} alt='github' className='w-1/2 h-1/2 object-contain'/>
              </a>
              <a href="https://linkedin.com/in/liwe-eddine-ayari-b73643289" style={{ backgroundColor: "#0077B7" }} className=' w-16 h-16 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={linkedin} alt='github' className='w-1/2 h-1/2 object-contain'/>
              </a>
              <a href="https://facebook.com/liwa.ayari.1" style={{ backgroundColor: "#3B5998" }} className=' w-16 h-16 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={facebook} alt='github' className='w-1/2 h-1/2 object-contain'/>
              </a>

              <a href={cv} download="Liwa_Ayari_CV.pdf" className="btn-violet-gradient items-center justify-center">
                Download My Resume
              </a>
          </div>
         </div>
      </div>
    </section>
  )
}

export default SectionWrapper(Hero,'Hero')