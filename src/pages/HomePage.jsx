/* eslint-disable no-unused-vars */
import React from 'react'

const HomePage = () => {
  return (
    <section className='.section h-screen w-full flex flex-col'>
        <video src="/assets/profis-bg-video.mp4" className='bg-video' autoPlay loop muted></video>
        <div className="bg-vid-overlay"></div>
        <div className="header w-full py-2 px-8 flex flex-row items-center justify-around">
            <div className="logo mr-5">
                <img src="/assets/logo/profis-logo-white.png" alt="logo" className='h-12'/>
            </div>
            <div className="navbar w-[40%] rounded-4xl">
                <ul className='flex flex-row w-full items-center justify-around text-white'>
                    <li>Features</li>
                    <li>FAQ</li>
                    <li>Join Waitlist</li>
                </ul> 
            </div>
            <div className='button'>
                <button className="button rounded-4xl border-gray-900 py-4">Join Waitlist</button>
            </div>
        </div>
        <div className="content flex flex-1 flex-col items-center justify-end pb-16 bg-redo-500">
            <div className="heading baumans text-white w-[40%] text-center">Take control of your life</div>
            <div className="sub-heading baumans text-white">Plan your tasks. organize your day. Be productive and still have time for your hobbies</div>
            <div className="demo-button py-4">
                <button className='bg-gray-200 px-8 py-3 rounded-2xl text-black cursor-pointer'>Download Demo</button><i className='fa-windows'></i>
            </div>
        </div>

    </section>
  )
}

export default HomePage