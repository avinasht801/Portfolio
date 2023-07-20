import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who Am I?</h2>
          <p className='py-2 text-gray-600'>
          I am a results-driven full-stack developer with a Master&apos;s degree in Computing Systems and expertise in web development and email development. I have experience in handling WordPress sites, building custom websites using ReactJS/NextJs and Tailwind CSS, and developing e-commerce solutions on platforms like BigCommerce. I am proficient in Next.js, ReactJS, JavaScript, and HTML5.
          </p>
          <p className='py-2 text-gray-600'>
          With a strong background in Agile and Waterfall methodologies, I bring project management expertise in Kanban. I am skilled in tools such as Adobe XD, Git, and SQL. I have been recognized for my innovative projects, including a Chatbot and Workflow Management System. I possess strong problem-solving and communication skills and I am currently seeking web development or software engineering opportunities.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
