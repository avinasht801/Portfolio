import Image from 'next/image';
import React from 'react';
import twitchImg from '../public/assets/projects/encrypt.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={twitchImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Banking Password Encryption</h2>
          <h3>Java / MySQL</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className='pb-4'>Overview</h2>
          <p>
          The Banking Password Encryption system is a security solution developed to protect sensitive user passwords using the innovative technique of chafing by tweaking the algorithm. This cutting-edge system enhances the security of passwords by generating multiple decoy passwords, alongside keeping the pivotal value associated with the real passwords. Developed using Java and SQL, the system ensures robustness and reliability. By employing this advanced encryption approach, the system effectively thwarts unauthorized access and data breaches, providing users with peace of mind about the safety of their sensitive information. The seamless integration of Java and SQL ensures efficient data handling and storage, making the Banking Password Encryption system a trustworthy and highly secure solution for modern banking applications.
          </p>
          <a
            href='https://github.com/avinasht801/BankingPassEncryption'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Java
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MySQL
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Chafing Tweaking
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

export default twitch;
