import React from 'react'
import { Tilt } from 'react-tilt' //used for the 3d cards on hover
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn,textVariant,staggerContainer } from '../utils/motion'
import { testimonials } from '../constants'


const SectionWrapper = (Component,idName) => 
 function hoc() {
       return (
        <motion.section variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:true,amount:0.25}}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            
        >
            <span className='hash-open ' id={idName}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
       )
 }

export default SectionWrapper