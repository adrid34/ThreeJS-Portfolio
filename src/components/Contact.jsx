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

    <div>Contact</div>

  )
}

export default Contact