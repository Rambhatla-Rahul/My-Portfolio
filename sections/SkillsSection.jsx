'use client'

import SkillsCard from "@/components/SkillsCard"

const SkillsSection = () => {
    const skillList = [
        {
            skillName:'JavaScript',
            skillIcon: '',
            
            skillLink: 'https://www.javascript.com',
        },
        {
            skillName:'NodeJs',
            skillIcon: '',
            
            skillLink: 'https://nodejs.org/en',
        },
        {
            skillName:'NextJS',
            skillIcon: '',
            
            skillLink: 'https://nextjs.org/',
        },
        {
            skillName:'Python',
            skillIcon: '',
            
            skillLink: 'https://www.python.org/',
        },
        {
            skillName:'Java',
            skillIcon: '',
            
            skillLink: 'https://www.java.com/en/',
        },
        {
            skillName:'C',
            skillIcon: '',
            
            skillLink: 'https://www.c-language.org/',
        },
    ]
  return (
    <div className="max-w-[900px] h-full flex flex-wrap flex-1 justify-evenly items-center gap-4">
      {
        skillList.map(({skillName,skillIcon,skillDesc,skillLink},index)=>{
            return(
              <div key={index} className="flex gap-2 justify-evenly items-center">
                <SkillsCard skillName={skillName} skillIcon={skillIcon} skillDesc={skillDesc} skillLink={skillLink}/>
              </div>
            )
        })
      }
    </div>
  )
}

export default SkillsSection
