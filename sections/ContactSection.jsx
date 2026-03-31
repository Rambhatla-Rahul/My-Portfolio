'use client'

import MessageModal from "@/components/home/MessageModal"
import { Mail, Phone, MessageSquare } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const item = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function ContactSection() {

  const [open, setOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message")
    }

    console.log(data)
    setOpen(false)
  }

  return (

    <section
      id="contact-section"
      className="w-full min-h-screen bg-black text-white flex items-center px-4 bg-gradient-to-b from-black to-[#0a0a0a]"
    >

      <div className="
        w-full mx-auto py-28
        rounded-2xl
        flex flex-col items-center gap-20
        
      ">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading"
        >
          Contact
        </motion.h2>


        {/* Contact Options */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl w-full"
        >

          {/* Message */}
          <motion.div
            variants={item}
            onClick={() => setOpen(true)}
            className="
              group
              bg-[#0b0b0b]
              border border-white/10
              backdrop-blur-xl
              p-10
              rounded-xl
              cursor-pointer
              flex flex-col items-center
              text-center
              gap-5
              transition
              hover:border-white/30
              hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]
              hover:-translate-y-1
            "
          >

            <div className="
              w-16 h-16
              flex items-center justify-center
              rounded-full
              bg-white/5
              border border-white/10
              group-hover:bg-white/10
              transition
            ">
              <MessageSquare size={28}/>
            </div>

            <h3 className="text-xl font-semibold">
              Message
            </h3>

            <p className="text-gray-500 text-sm">
              Send a message directly.
            </p>

          </motion.div>


          {/* Call */}
          <motion.div
            variants={item}
            onClick={() => window.location.href="tel:+91XXXXXXXXXX"}
            className="
              group
              bg-[#0b0b0b]
              border border-white/10
              backdrop-blur-xl
              p-10
              rounded-xl
              cursor-pointer
              flex flex-col items-center
              text-center
              gap-5
              transition
              hover:border-white/30
              hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]
              hover:-translate-y-1
            "
          >

            <div className="
              w-16 h-16
              flex items-center justify-center
              rounded-full
              bg-white/5
              border border-white/10
              group-hover:bg-white/10
              transition
            ">
              <Phone size={28}/>
            </div>

            <h3 className="text-xl font-semibold">
              Call
            </h3>

            <p className="text-gray-500 text-sm">
              Prefer a quick conversation.
            </p>

          </motion.div>


          {/* Email */}
          <motion.div
            variants={item}
            onClick={() => window.location.href="mailto:rrambhat@gitam.in"}
            className="
              group
              bg-[#0b0b0b]
              border border-white/10
              backdrop-blur-xl
              p-10
              rounded-xl
              cursor-pointer
              flex flex-col items-center
              text-center
              gap-5
              transition
              hover:border-white/30
              hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]
              hover:-translate-y-1
            "
          >

            <div className="
              w-16 h-16
              flex items-center justify-center
              rounded-full
              bg-white/5
              border border-white/10
              group-hover:bg-white/10
              transition
            ">
              <Mail size={28}/>
            </div>

            <h3 className="text-xl font-semibold">
              Email
            </h3>

            <p className="text-gray-500 text-sm">
              Send a detailed message.
            </p>

          </motion.div>

        </motion.div>

      </div>


      {/* Message Modal */}
      {open && (
        <MessageModal
          setOpen={setOpen}
          handleSubmit={handleSubmit}
        />
      )}

    </section>
  )
}