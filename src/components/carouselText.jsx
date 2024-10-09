import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const images = [
  {
    url: "https://picsum.photos/seed/asez/1920/1080",
    text: 'This is the description for Image 1.'
  },
  {
    url: 'https://picsum.photos/seed/esref/1920/1080',
    text: 'This is the description for Image 2.'
  },
  {
    url: 'https://picsum.photos/seed/ef/1920/1080',
    text: 'This is the description for Image 3.'
  },
  {
    url: "https://picsum.photos/seed/piawcum/1920/1080",
    text: 'This is the description for Image 4.'
  },
  {
    url: "https://picsum.photos/seed/piasrfgswcum/1920/1080",
    text: 'This is the description for Image 5.'
  }
]


function carouselText() {

  
 const[index,setIndex]= useState (0)

 const indexChange = ()=>{ 
  if(index<4){ 

    setIndex(index+1)

  }
  else{ 
    setIndex(0)
  }
 }

  return (

    <div className='bg-red-800 w-full relative h-screen'>


      <div className='absolute flex p-5 justify-center '>
        <motion.div 
        initial={{ 
          y:-100
        }}
        animate={ { 
          y:0
        }
        }
        
        > 
        <h2 className='text-3xl font-bold text-white' >{images[index].text}</h2>
        </motion.div> 
        </div>

      <img  src={images[index].url} alt="" />

      <button onClick={()=>{indexChange()}} className='w-40 py-3 text-xl font-bold capitalize bg-yellow-500 rounded-full' >change-bg</button>

      
    </div>
  )
}

export default carouselText