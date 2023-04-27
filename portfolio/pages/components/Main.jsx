import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export default function main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let&#39;s build something together</p>
                <h1 className='py-4 text-gray-700'>Hi, I&#39;m <span className='text-[#5651e5]'>Peace Oloruntoba</span></h1>
                <h1 className='py-4 text-gray-700'>Full-Stack Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I&#39;m a Full Stack Developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&#39;m focused on building responsive web and android applications while I learn BlockChain Technologies.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href='https://www.linkedin.com/in/peaceoloruntoba/' target='_blank' rel='noreferrer'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a href='https://www.github.com/PeaceOloruntoba' target='_blank' rel='noreferrer'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </a>
                    <Link href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </Link>
                    <Link href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}
