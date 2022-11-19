import React from 'react';
import { AiFillCompass } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import dc from '../photos/dc.png';
import img1 from '../photos/img1.png';
import img2 from '../photos/img2.png';
import img3 from '../photos/img3.png';

const Groups = () => {
  const groups = [img1, img2, img3];
  return (
    <div className='hidden sm:flex bg-[#212226] w-[6rem] shrink-0 h-screen sticky top-0 pt-6'>
      {/* Groups */}
      <div className='flex flex-col items-center w-full space-y-4'>
        {/* Discord */}
        <Link to='/'>
          <div className='bg-[#36393f] p-3 rounded-[1.3rem] cursor-pointer'>
            <img
              src={dc}
              className='w-12 h-12 rounded-full text-white brightness-[80%]'
              alt=""
            />
          </div>{' '}
        </Link>

        {/* Compass */}
        <div className='bg-[#7289dc] p-3 rounded-[1.3rem] cursor-pointer'>
          <AiFillCompass className='w-8 h-8 rounded-full text-white' />
        </div>
        {/* Groups */}
        <div className='space-y-2 pt-4'>
          {groups.map((group, i) => (
            <div className='w-14 h-14 flex cursor-pointer' key={i}>
              <img src={group} className='object-cover rounded-full' alt="" />
            </div>
          ))}
        </div>

        {/* Plus */}
        <div className='bg-[#36393f] p-1 rounded-full'>
          <FiPlus className='w-6 h-6 rounded-full text-green-700 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Groups;
