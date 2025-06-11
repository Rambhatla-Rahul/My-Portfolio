import ProjectsCard from '@/components/ProjectsCard'
import React from 'react'

const ProjectsSection = () => {
    const projectList = [
        {
            projectName: 'Apple Website Clone',
            projectUrl : 'https://modern-website0rs1.vercel.app/',
            projectDesc:'Clone of Apple Website Featuring IPhone 15 Pro',
            projectImg:'/apple_website.png'
        },
        {
            projectName: 'Chat Application',
            projectUrl : 'https://mern-chat-app-blond-six.vercel.app/',
            projectDesc:'A MERN stack Chatting Application Built using Websockets.',
            projectImg:'/chat_application.png'
        },
    ];
  return (
    <div className='w-full h-full flex flex-1 flex-wrap gap-8 items-center justify-center'>
      {
        projectList.map(({projectName,projectUrl,projectDesc,projectImg},i)=>{
            return(
            <div key={i}>
                <ProjectsCard projectName={projectName} projectUrl={projectUrl} projectDesc={projectDesc} projectImg={projectImg}/>
            </div>
            );
        })
      }
    </div>
  )
}

export default ProjectsSection
