
import { LangGraph } from "@lobehub/icons";
import { Code, Github } from "lucide-react";
import { FaDocker, FaJava } from "react-icons/fa";
import { GrReactjs, GrScript } from "react-icons/gr";
import { SiCplusplus, SiExpress, SiFastapi, SiJavascript, SiLangchain, SiMongodb, SiMysql, SiPostgresql, SiPython } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const languages_list = [
        {
            skillName:'JavaScript',
            skillIcon: SiJavascript,
            skillLink: 'https://www.javascript.com',
        },
        
        {
            skillName:'Python',
            skillIcon: SiPython,
            
            skillLink: 'https://www.python.org/',
        },
        {
            skillName:'Java',
            skillIcon: FaJava,
            
            skillLink: 'https://www.java.com/en/',
        },
        {
            skillName:'C',
            skillIcon: Code,
            
            skillLink: 'https://www.c-language.org/',
        },
        {
            skillName:'C++',
            skillIcon: SiCplusplus,
            
            skillLink: 'https://www.c-language.org/',
        },
    ]


export const framework_list = [
    {
            skillName:'NextJs',
            skillIcon: TbBrandNextjs,
            skillLink: 'https://www.javascript.com',
        },
        
        {
            skillName:'Express',
            skillIcon: SiExpress,
            skillLink: 'https://www.python.org/',
        },
        {
            skillName:'Lang-Chain',
            skillIcon: SiLangchain,
            
            skillLink: 'https://www.java.com/en/',
        },
        {
            skillName:'Lang-Graph',
            skillIcon: LangGraph,
            
            skillLink: 'https://www.c-language.org/',
        },
]


export const tools_list = [
    {
        skillName:'ReactJs',
        skillIcon: GrReactjs,
        skillLink: 'https://www.c-language.org/',
    },
    {
        skillName:'MongoDB',
        skillIcon: SiMongodb,
        skillLink: 'https://www.c-language.org/',
    },
    {
        skillName:'PostgreSQL',
        skillIcon: SiPostgresql,
        skillLink: 'https://www.c-language.org/',
    },
    {
        skillName:'MySQL',
        skillIcon: SiMysql,
        skillLink: 'https://www.c-language.org/', 
    },
    {
        skillName:'FastAPI',
        skillIcon: SiFastapi,
        skillLink: 'https://www.c-language.org/', 
    },
    {
        skillName:'Github',
        skillIcon: Github,
        skillLink: 'https://www.c-language.org/', 
    },
    {
        skillName:'Docker',
        skillIcon: FaDocker,
        skillLink: 'https://www.c-language.org/', 
    },
]