'use client'

import { useState } from "react"
import SkillsCard from "@/components/home/SkillsCard"
import { framework_list, languages_list, tools_list } from "@/constants/Skills"
import { motion } from "framer-motion"

const tabList = [
  { tabName: "Languages" },
  { tabName: "Frameworks" },
  { tabName: "Tools" }
]

export const SkillsSection = () => {

  const [activeTab, setActiveTab] = useState("Languages")

  return (
    <section
      id="skills-section"
      className="w-full min-h-screen bg-black text-white flex items-start px-4 container-bg"
    >

      <div className="w-full mx-auto py-40 h-full rounded-2xl flex flex-col items-center gap-14">

        {/* Title */}
        <div className="text-center">
          <h2 className="heading">Skills</h2>
          
        </div>

        {/* Navigation */}
        <nav className="relative flex gap-2 bg-black/40 border border-white/10 rounded-xl p-1 backdrop-blur-md">

  {tabList.map((tab) => {

    const isActive = activeTab === tab.tabName

    return (
      <button
        key={tab.tabName}
        onClick={() => setActiveTab(tab.tabName)}
        className="relative px-5 py-2 text-sm md:text-base rounded-lg transition-colors duration-200"
      >

        {/* Sliding highlight */}
        {isActive && (
          <motion.div
            layoutId="active-tab"
            className="absolute inset-0 bg-white rounded-lg"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}

        {/* Text */}
        <span
          className={`relative z-10 ${
            isActive ? "text-black" : "text-gray-400 hover:text-white"
          }`}
        >
          {tab.tabName}
        </span>

      </button>
    )

  })}

</nav>

        {/* Divider */}
        <div className="w-full max-w-5xl border-t border-white/10" />

        {/* Tab Content */}
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 justify-items-center">

          {activeTab === "Languages" &&
            languages_list.map((skill, index) => (
              <SkillsCard key={skill.skillName || index} skill={skill} />
            ))
          }
          {activeTab === "Frameworks" &&
            framework_list.map((skill, index) => (
              <SkillsCard key={skill.skillName || index} skill={skill} />
            ))
          }
          {activeTab === "Tools" &&
            tools_list.map((skill, index) => (
              <SkillsCard key={skill.skillName || index} skill={skill} />
            ))
          }

        </div>

      </div>

    </section>
  )
}

export default SkillsSection