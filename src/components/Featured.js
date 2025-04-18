import React from 'react';
import { Link } from 'react-router-dom';
import picture1 from '../photos/background2.jpg';
import bg1 from '../photos/bg01.jpg';
import bg2 from '../photos/bg02.jpg';
import bg3 from '../photos/bg03.jpg';
import bg4 from '../photos/bg04.jpg';
import picture2 from '../photos/lmfao2.jpg';
import Card from './Card';

const Featured = () => {
  const cards = [
    {
      bg: picture1,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      description:
        'We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom',
      size: '85 Online, 232 Members',
    },
    {
      bg: bg1,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      description:
        'We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom',
      size: '12 Online, 721 Members',
    },
    {
      bg: bg2,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      description:
        'We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom',
      size: '85 Online, 600 Members',
    },
    {
      bg: bg3,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      description:
        'We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom',
      size: '815 Online, 200,000 Members',
    },
    {
      bg: bg4,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      description:
        'We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom',
      size: '167 Online, 151,000 Members',
    },
    {
      bg: picture1,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      description:
        'We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom',
      size: '85,532 Online, 232,061 Members',
    },
    {
      bg: bg1,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      description:
        'We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom',
      size: '85,532 Online, 232,061 Members',
    },
    {
      bg: bg2,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      description:
        'We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom',
      size: '85,532 Online, 232,061 Members',
    },
    {
      bg: bg3,
      profile: picture2,
      title: 'Fire Emblem Heroes',
      description:
        'We are a community for Fire Emblem Heroes.Enjoy lore,get game help. and FE fandom',
      size: '85,532 Online, 232,061 Members',
    },
  ];
  return (
    <div className='pt-6   '>
      {/* Titles */}
      <div className='text-white pb-4'>
        <p className='font-bold text-[20px]'>Featured Servers</p>
        <p className='text-white/50'>
          Some awesome Discords we think you'd love
        </p>
      </div>

      {/* Cards*/}
      <div className='grid grid-cols-1 xs:grid-cols-2   lg:grid-cols-3 gap-y-8 xs:gap-x-2 sm:gap-x-4 mb-4  '>
        {cards.map((card, i) => (
          <Link to='/card' key={i}>
            <Card
              bg={card.bg}
              profile={card.profile}
              title={card.title}
              description={card.description}
              size={card.size}
              key={card.description}
            />{' '}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
