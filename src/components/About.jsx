import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utilities/motion'
import { services } from '../constants/constants'
import SectionWrap from '../hoc/SectionWrap'



const ServiceCard = ({ title, i, icon }) => {

  return (

    <Tilt className='xs:w-[250px] w-full'>

      <motion.div variants={fadeIn('right', 'spring', 0.5 * i, 0.75)} className='w-full p-[1px] rounded-[20px] shadow-card ' >

        <div options={{ max: 45, scale: 1, speed: 450, }} className='px-12 py-5 min-h-[280px] rounded-[20px] flex flex-col justify-evenly items-center bg-[#ECF0F1]' >
          <img src={icon} alt={title} className='w-32 h-32 object-contain' />
          <h3 className='text-center text-[20px]'> {title} </h3>
        </div>

      </motion.div>

    </Tilt>

  )

}


const About = () => {

  return (

    <>

      <motion.div variants={textVariant()}>

        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-2 text-[20px] max-w-3xl leading-[30px]' >
        I'm Adrian - Experienced Senior Software Engineer with a decade of expertise, specializing in JavaScript, particularly focused on React and Node.js. A strategic approach involves consistently capitalizing on JS strengths, navigating weaknesses, and selecting optimal frameworks for peak code performance.
        Demonstrated success in developing reliable and highly scalable applications, complemented by effective teamwork and collaboration skills for project success.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>

        {services.map((service, i) => (
          <ServiceCard key={service.title} i={i} {...service} />
        ))}

      </div>

    </>

  )
}

export default SectionWrap(About, 'about');