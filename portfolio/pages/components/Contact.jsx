import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactImg from '../../public/assets/contact.png'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get in Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* Left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt='/' />
                        </div>
                        <div>
                            <h2 className='py-2'>Name here</h2>
                            <p>Full-Stack Developer</p>
                            <p className='py-4'>I am available for freelance or remote positions. Contact me and let&apos;s talk.</p>
                        </div>
                    <div>
                        <p className='uppercase pt-8'>Connect with me</p>
                        <div className='flex items-center justify-between py-4'>
                            <a href='' target='_blank' rel='noreferrer'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                            </a>
                            <a href='' target='_blank' rel='noreferrer'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                            </a>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div>
                            <Link href='/resume'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                            </Link>
                        </div>
                    </div>
                    </div>
                </div>
                {/* Right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060' method='POST' encType='multipart/form-data'>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppertext py-2 text-sm'>Name:</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppertext py-2 text-sm'>Phone Number:</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone' />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppertext py-2 text-sm'>Email:</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppertext py-2 text-sm'>Subject:</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject' />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppertext py-2 text-sm'>Message:</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'></textarea>
                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
                        </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact