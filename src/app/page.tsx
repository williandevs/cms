import Carousel from '@/components/Carousel'
import About from '@/components/About'
import React from 'react'
import Services from '@/components/Services'
import PlansPage from './plans/page'
import Blog from './blog/page'


const page = () => {
  return (
    <div>
      <Carousel />
      <About />
      <Services />
      <PlansPage/>
      <div className='mt-[100px] mb-[100px]'>
         <Blog/>
      </div>
     

    </div>
  )
}

export default page
