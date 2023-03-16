import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import {styles} from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrap } from '../hoc';
import { slideIn } from '../utilities/motion'


const Contact = () => {

  const [form, setForm] = useState({

    name: '',
    email: '',
    message: '',

  });

  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleChange = function(e) {

  }

  const handleSubmit = function(e) {

  }

  return (

    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>

      <motion.div variants={ slideIn('left', 'tween', 0.2, 1) } className='flex-[0.75] p-8 rounded-2xl bg-[#ECF0F1] shadow-card' >
        
        <p className={styles.sectionSubText} >Get in touch</p>
        <h3 className={styles.sectionHeadText} >Contact.</h3>

        <form ref={formRef} onSubmit={ handleSubmit } className='mt-12 flex flex-col gap-8' >

          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your name</span>
            <input type="text" name='name' value={form.name} placeholder="What's your name?" onChange={ handleChange } className='py-4 px-6 bg-transparent rounded-lg outline-none border-none shadow-input' />
          </label>

          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your email</span>
            <input type="email" name='email' value={form.email} placeholder="What's your email?" onChange={ handleChange } className='py-4 px-6 bg-transparent rounded-lg outline-none border-none shadow-input' />
          </label>

          <label className='flex flex-col'>
            <span className='mb-4 font-medium'>Your message</span>
            <textarea rows={6} type="text" name='message' value={form.message} placeholder="What's your message to me?" onChange={ handleChange } className='py-4 px-6 bg-transparent rounded-lg outline-none border-none shadow-input' />
          </label>

          <button type='submit' className='py-3 px-10 outline-none w-fit font-medium shadow-input rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>

        </form>

      </motion.div>

      <motion.div variants={ slideIn('right', 'tween', 0.2, 1) } className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] ' >

        <EarthCanvas />

      </motion.div>

    </div>

  )
}

export default SectionWrap(Contact, 'contact') 