import Image from 'next/image';
import React from 'react';
import cryptoImg from '../public/assets/projects/wfm.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cryptoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Workflow Management System</h2>
          <h3>C# / Microsoft Access</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          
          <h2 className='pb-4'>Overview</h2>
          <p>
          WorkflowPro is a powerful workflow management system developed using the Model-View-Controller (MVC) architecture and implemented in C# with seamless integration with Microsoft Access for data storage. This innovative solution revolutionizes business process management, providing users with an intuitive and efficient platform to organize, automate, and track complex workflows. With customizable workflows, task management, and real-time tracking, WorkflowPro empowers businesses to improve efficiency and productivity. The system ensures data security through robust access control mechanisms, while its scalability and extensibility allow for future growth and adaptation to changing business needs. Overall, WorkflowPro offers a comprehensive and user-friendly solution to streamline workflow management and enhance organizational productivity.
          </p>
          <a
            href='https://github.com/avinasht801/Workflow-Management'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
         

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> C#
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Microsoft Access
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MVC Architecture
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
