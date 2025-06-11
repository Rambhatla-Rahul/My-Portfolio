'use client'
import { TbPhone } from "react-icons/tb";
import React, { useState } from 'react'
import { BsTelephoneOutbound } from "react-icons/bs";
import ExpandButton from "./ExpandButton";
import { VscChromeClose } from "react-icons/vsc";

const ContactButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>

      <div
        className="fixed w-16 h-16 right-8 bottom-8 overflow-hidden flex justify-center items-center p-2 bg-white/30 backdrop-blur-md shadow-lg rounded-2xl animate-contact-shadow hover:cursor-pointer hover:scale-110 transition-all duration-150 ease-in-out z-50"
        onClick={() => setModalOpen(true)}
      >
        <BsTelephoneOutbound className="text-2xl" />
      </div>

      
      {modalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[100] bg-white/30 backdrop-blur-md flex justify-center items-center"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-start w-[50%] h-[50%] bg-white/50 backdrop-blur-md border border-white/40 shadow-lg rounded-xl p-6 gap-30"
            onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col w-full items-center justify-start">
                <h2 className="text-nowrap text-4xl font-extrabold text-black">Contact Me</h2>
            </div>
            <div className='flex w-full justify-evenly overflow-hidden'>
                <ExpandButton icon={TbPhone} text="+91-7802981187" textColor={'text-white'}/>
                <ExpandButton icon={TbPhone} text="+91-7016724379" textColor={'text-white'}/>
            </div>
            <div className='flex absolute right-4 top-4 hover:cursor-pointer hover:rotate-[360deg] transition-all duration-100 ease-in-out' onClick={() =>setModalOpen(false)}>
                 <VscChromeClose />
            </div>
          </div>
          
          
        </div>
      )}
    </>
  )
}

export default ContactButton;
