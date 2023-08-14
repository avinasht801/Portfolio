import Image from 'next/image';
import React from 'react';
import WeatherImg from '../public/assets/projects/weather.jpg';
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
          src={WeatherImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Weather Application</h2>
          <h3>JavaScript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2 className='pb-4'>Overview</h2>
          <p>
          Dynamic weather application using JavaScript, API integration, and DOM manipulation. This project showcases my skills in web development and data handling. By harnessing the power of APIs, I enabled real-time weather data retrieval, ensuring that users receive accurate and up-to-date information. Through the creative use of DOM manipulation, I crafted an engaging and user-friendly interface that displays the weather conditions in an intuitive manner. This project not only highlights my technical proficiency but also reflects my commitment to crafting practical and visually appealing solutions for real-world challenges.          </p>
          <a
            href='https://github.com/avinasht801/WeatherApp'
            target='_blank'
            rel='noreferrer'
            className='pr-2'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>
          <a
            href='https://weather-app-gules-two-29.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> API
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> DOM Manipulation
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
