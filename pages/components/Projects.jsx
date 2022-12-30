import Image from 'next/image'
import React from 'react'
import propertyImg from '/'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects:</p>
            <h2 className='py-4'>What Ive Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5615e5] to-[#709dff]'>
                    <Image src='' alt='/' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects