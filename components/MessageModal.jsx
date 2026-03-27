"use client"
import { X } from 'lucide-react'
import React from 'react'

const MessageModal = ({setOpen,handleSubmit}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50" onClick={(e)=>{setOpen(false)}}>

          <div className="bg-black border border-white/20 rounded-xl w-full max-w-lg p-8 relative mx-2" onClick={(e)=>{e.stopPropagation();}}>

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X size={20}/>
            </button>

            <h3 className="text-2xl font-semibold mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-black border border-white/20 rounded-lg p-3 focus:border-white outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-black border border-white/20 rounded-lg p-3 focus:border-white outline-none"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (optional)"
                className="bg-black border border-white/20 rounded-lg p-3 focus:border-white outline-none"
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                rows={4}
                className="bg-black border border-white/20 rounded-lg p-3 focus:border-white outline-none resize-none"
              />

              <button
                type="submit"
                className="mt-2 bg-white text-black font-medium py-3 rounded-lg hover:bg-gray-200 transition"
              >
                Submit
              </button>

            </form>

          </div>

    </div>
  )
}

export default MessageModal
