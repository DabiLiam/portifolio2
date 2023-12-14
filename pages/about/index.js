import React, {useState}  from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2047 - 2048',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2041 - 2042',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2026 - 2027',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2027 - 2028',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2030 - 2031',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2036',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2029',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2033',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

// counter
import CountUp from 'react-countup'

const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index);
  return(
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left' >
      <Circles />
      {/* avatar img */}
      <motion.div 
      variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'
       className='hidden xl:flex absolute bottom-0 -left-[340px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6' >
        {/* text */}
        <div className='flex-1 flex flex-col ml-30'>
          <motion.h2 className='h2 px-8 text-center' variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' >
          Histórias <span className='text-accent'>Inspiradoras</span> surgindo designs magníficos.
          </motion.h2>
          <motion.p variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden' className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0' >
          Há 13 anos, comecei a trabalhar como freelancer como desenvolvedor. Desde então, fiz trabalho remoto para agências, prestei consultoria para startups e colaborei em produtos digitais para uso empresarial e de consumo.          </motion.p>
          {/* counters */}
          <motion.div variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden' className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6 '>
              {/* experience */}
              <div className='relative flex-1 px-2 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2' >
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                  Years of experience
                </div>
              </div>
              {/* Clients */}
              <div className='relative flex-none px-2 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2' >
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                  Satisfied clients
                </div>
              </div>
                {/* projects */}
                <div className='relative flex-none px-2 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2' >
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]' >
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'></div>
         <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' 
         className='py-2 xl:px-20 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start  '>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex)=> {
              return <div key={itemIndex} className={`${index === itemIndex  && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
               cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
               onClick={()=> setIndex(itemIndex)}
               >
                {item.title}
               </div>
            })}
          </div>
          <div className='flex flex-col gap-x-4 mb-4'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60' >
                {/* title */}
                <div className='font-light mb-2 mb:mb-0'>{item.title}</div>
                <div className='hidden md:flex' >-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-6'>
              {/* icons */}
              {item.icons?.map((icon, itemIndex) => {
                return <div className='text-2xl text-white'>{icon}</div>
              })}
              </div>
              </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;