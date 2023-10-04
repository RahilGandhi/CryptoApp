import React from 'react'
import ThemeToggle from './ThemeToggle'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineReddit, AiOutlineTwitter } from 'react-icons/ai'
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='rounded-div mt-8 pt-8 text-primary'>
        <div className='grid md:grid-cols-2'>
            <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
                <div>
                    <h2 className='font-bold'>Support</h2>
                    <ul>
                        <li className='text-sm py-2'>Help Center</li>
                        <li className='text-sm py-2'>Contact Us</li>
                        <li className='text-sm py-2'>API Status</li>
                        <li className='text-sm py-2'>documentation</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold'>Info</h2>
                    <ul>
                        <li className='text-sm py-2'>About Us</li>
                        <li className='text-sm py-2'>Careers</li>
                        <li className='text-sm py-2'>Invest</li>
                        <li className='text-sm py-2'>Legal</li>
                    </ul>
                </div>
            </div>
            <div className='text-right'>
                <div className='w-full flex justify-end'>
                    <div className='w-full md:w-[300px] py-4 relative'>
                        <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                            <ThemeToggle />
                        </div>
                        <p className='text-center md:text-right'>Signup For Crypto News</p>
                        <div>
                            <form className='py-4'>
                                <input type='email' placeholder='Email' className='bg-primary border border-input p-2 mr-2 w-full rounded-2xl md:w-auto'/>
                                <button className='bg-button text-btnText px-4 p-2 w-full rounded-2xl  md:w-auto my-2'>sign Up</button>
                            </form>
                        </div>
                        <div className='flex py-4 justify-between text-accent '>
                            <AiOutlineInstagram/>
                            <AiOutlineTwitter/>
                            <AiOutlineFacebook/>
                            <AiOutlineReddit />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer