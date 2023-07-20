import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ntuImg from '../public/assets/projects/ntu.jpg';
import wfmImg from '../public/assets/projects/wfm.jpg'
import tramImg from '../public/assets/projects/tram.jpg'
import encryptImg from '../public/assets/projects/encrypt.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Chatbot for Nottingham Trent University'
            backgroundImg={ntuImg}
            projectUrl='/ntu'
            tech='Python and Javascript'
          />
          <ProjectItem
            title='Workflow Management System'
            backgroundImg={wfmImg}
            projectUrl='/wfm'
            tech='C#'

          />
          <ProjectItem
            title='Nottingham Tram Application'
            backgroundImg={tramImg}
            projectUrl='/android'
            tech='Android Kotlin'

          />
          <ProjectItem
            title='Banking Password Encryption'
            backgroundImg={encryptImg}
            projectUrl='/encrypt'
            tech='Java and MySql'

          />
        </div>
        <p className='pt-8'>About this Website: Built in NextJs with Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Projects;
