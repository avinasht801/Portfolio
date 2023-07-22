import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Avinash | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Avinash Tiwari</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/avinash-tiwari801/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/avinasht801'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Results-driven full-stack developer with a Master&apos;s degree in Computing Systems and expertise in web
          development and email development. Experienced in handling WordPress sites, building custom websites
          using ReactJS/NextJs and Tailwind CSS, and developing e-commerce solutions on platforms like
          BigCommerce. Proficient in Next.js, ReactJS, JavaScript, and HTML5. Skilled in Agile and Waterfall
          methodologies, with project management expertise in Kanban. Proficient in tools such as Adobe XD, Git, and
          SQL. Awarded for innovative projects, including a Chatbot and Workflow Management System. Strong
          problem-solving and communication skills. Seeking web development or software engineering opportunities.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>PHP
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>Wordpress
            <span className='px-2'>|</span> Airtable
            <span className='px-2'>|</span> WooCommerce
            <span className='px-2'>|</span> RESTAPI
          </p>

        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Rusty Monkey
            </span>
            <span className='px-2'>|</span>Nottingham, UK
          </p>
          <p className='py-1 italic'>Junior Web Developer (Feb 2023 - July 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Handled all WordPress sites, ensuring their smooth operation and making necessary updates and
              modifications.
            </li>
            <li>
              Built a custom WordPress website using PHP and Tailwind CSS, creating a unique and tailored theme
              for the organization.
            </li>
            <li>
              Developed an e-commerce website on BigCommerce using Stencil CLI, implementing a seamless
              shopping experience.
            </li>
            <li>
              Utilized Next.js 13.4 with Tailwind CSS to develop internal websites, optimizing performance and user
              experience.
            </li>
            <li>
              Collaborated with the design team, utilizing Adobe XD for UI/UX design and translating design concepts
              into functional websites.
            </li>
            <li>
              Proficiently worked with both Waterfall and Agile methodologies (WAGILE), adapting to project
              requirements.
            </li>
            <li>
              Employed Kanban for efficient project management, ensuring smooth workflow and timely delivery.
            </li>

          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              eClerx Service Limited
            </span>
            <span className='px-2'>|</span>Mumbai, IN
          </p>
          <p className='py-1 italic'>Code Commerce - Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Designing functional Email developments templates in HTML5, JavaScript and CSS3.
            </li>
            <li>
              Designs digital marketing templates.
            </li>
            <li>
              Processing web publishers and maintaining the repository.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Projects
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>IMPACD CIC</span>
            <span className='px-2'>|</span><a href='https://impacd-cic.org.uk/' target='_blank' rel='noreferrer'>impacd-cic.org.uk</a>
          </p>

          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed a WordPress website from scratch as a collaborative project with a former colleague.
            </li>
            <li>
              Utilized PHP and Tailwind CSS extensively to build a custom WordPress theme.
            </li>
            <li>
              Played a key role in building foundational components that formed the basis of the organization&apos;s
              WordPress vanilla theme.
            </li>
            <li>
              Demonstrated proficiency in WordPress development and customization.
            </li>
            <li>
              Successfully implemented design elements and ensured a visually appealing and user-friendly
              website.
            </li>
            <li>
              Collaborated effectively with team members to deliver a high-quality website that met client
              requirements.
            </li>
            <li>
              Contributed to the overall success and impact of the Impacd CIC project through my technical skills
              and dedication.
            </li>
            <li>
              Implemented accessibility features following W3C accessibility standards to ensure an inclusive user
              experience for all visitors to the Impacd CIC website.
            </li>
            <li>
              Successfully implemented design elements and ensured a visually appealing and user-friendly
              website.
            </li>

          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>My Next Pint</span>
            <span className='px-2'>|</span>Rusty Monkey Project
          </p>

          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed a web application for the Nottingham Beer and Cider Festival.
            </li>
            <li>
              Utilized Next.js 13.4 and Tailwind CSS to create a responsive and visually appealing interface.
            </li>
            <li>
              Implemented advanced search and filtering mechanisms for products, enhancing user experience
              and making it easier to find specific items.
            </li>
            <li>
              Integrated Airtable API to fetch data dynamically, ensuring the accuracy and up-to-date information
              of products.
            </li>
            <li>
              Leveraged JavaScript SWR (Stale-While-Revalidate) to maintain data freshness and optimize
              performance.
            </li>
            <li>
              Demonstrated proficiency in Next.js and Tailwind CSS, along with knowledge of API integration and
              data management.
            </li>
            <li>
              Independently handled the entire project, showcasing my ability to work independently and take
              ownership.
            </li>
          </ul>
        </div>
        <div className='flex justify-center mb-5'>
         <a href='https://drive.google.com/u/0/uc?id=1chyRAXUP7HB-51JMiv7xSrq7GoUsWNr6&export=download'><button className='p-5 '>Download My Resume</button></a>
        </div>
      </div>
    </>
  );
};

export default resume;
