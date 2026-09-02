import React from 'react';
import { Reveal } from '../ui/Reveal';
import { team } from '../../data/team';

const TeamSection: React.FC = () => (
  <section id="team" className="py-10 bg-pink-100 h-full">
    <h3 className="text-3xl font-semibold text-center mb-10">Meet our team</h3>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {team.map((member) => (
        <Reveal key={member.name}>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-1 text-center">
              <h4 className="text-4xl font-bold mb-2">{member.name}</h4>
              <p className="mb-4 font-bold text-lg leading-relaxed">{member.role}</p>
              {member.intro}
            </div>
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <img
                  src={member.image}
                  alt={member.imageAlt}
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-xl ring-4 ring-white ring-offset-4 ring-offset-pink-100 border-4 border-pink-300 transition-transform duration-300 hover:scale-105"
                />
                {member.detail}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default TeamSection;
