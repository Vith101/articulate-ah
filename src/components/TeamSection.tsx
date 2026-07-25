import React from 'react';
import headshot from '../../assets/headshot.png';
import madelineHeadshot from '../../assets/madeline-headshot.jpeg';
import { Reveal } from './Reveal';

const TeamSection: React.FC = () => (
  <section id="team" className="py-10 bg-pink-100 h-full">
    <h3 className="text-3xl font-semibold text-center mb-10">Meet our team</h3>
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <Reveal>
      <div className='grid lg:grid-cols-2 gap-16 items-center'>
        <div className='relative z-1 text-center'>
          <h4 className="text-4xl font-bold mb-2">Harshini Baskaran-Elango</h4>
          <p className="mb-4 font-bold text-lg leading-relaxed">
            Director <br />
            Principal Speech Pathologist
          </p>
          <p className="text-center text-lg leading-relaxed">
            Welcome! <br />
            As a dedicated clinician working in the disability sector, I am passionate about helping individuals and families achieve their therapy goals and increase their participation within the community. 
            As a generalist clinician, I see clients of all ages and across all areas of communication and feeding. This is not limited to supporting literacy, social skills, nonverbal communication (Communication device)
            and language development. I am here to provide personalised and compassionate care, to support families and individuals accessing their community and increasing their ability to communicate
            wants and needs. I eagerly anticipate the opportunity to work with you as we navigate this journey together.
            
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img
              src={headshot}
              alt="Harshini Baskaran-Elango"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-xl ring-4 ring-white ring-offset-4 ring-offset-pink-100 border-4 border-pink-300 transition-transform duration-300 hover:scale-105"
            />
            <div className="mb-4 text-lg leading-relaxed">
              Harshini holds a Master&#39;s in Speech and Language Pathology and has extensive expertise in various specialised areas. She is proficient in AAC device application and implementation,
              language development, articulation intervention, supporting nonverbal communicators and has the following certifications;
              <ul className="list-disc list-inside space-y-2 mb-4 text-lg leading-relaxed">
                <li>Hanen More Than Words program</li>
                <li>Little Learners Love Literacy program</li>
                <li>Key Word Sign certificate</li>
                <li>SOS Feeding Approach program</li>
                <li>DTTC Childhood Apraxia of Speech program</li>
                <li>Augmentative and Alternative Communication training</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </Reveal>
      <Reveal>
      <div className='grid lg:grid-cols-2 gap-16 items-center'>
        <div className='relative z-1 text-center'>
          <h4 className="text-4xl font-bold mb-2">Madeline Stockdale</h4>
          <p className="mb-4 font-bold text-lg leading-relaxed">
            Certified Practising Speech Pathologist (CPSP)
          </p>
          <p className="mb-4 text-lg leading-relaxed">
            Maddie is a Speech Pathologist who is passionate about supporting people of all ages to develop their communication skills, achieve their goals, and participate more confidently in everyday life.
            She holds a Master of Speech Pathology from The University of Melbourne and is committed to providing evidence-based, individualised care that is tailored to the unique needs, strengths, and goals of each client.
            Maddie also holds a Bachelor of Applied Science and Master of Podiatric Practice from La Trobe University and previously worked as a Podiatrist in private practice for four years, where she developed a strong foundation
            in client-centred care, health education, and building meaningful therapeutic relationships. Maddie has experience working across a range of healthcare settings, including community health and hospital-based services at
            Monash Health and Monash Children’s Hospital. Through these roles, she has supported clients with a variety of communication and feeding needs across different stages of life. Maddie believes that a strong therapeutic relationship is the foundation of effective therapy.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img
              src={madelineHeadshot}
              alt="Madeline Stockdale"
              className="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-xl ring-4 ring-white ring-offset-4 ring-offset-pink-100 border-4 border-pink-300 transition-transform duration-300 hover:scale-105"
            />
            <p className="mb-4 text-lg leading-relaxed">
              Outside of work, she enjoys coastal getaways with her partner, exploring Melbourne’s food scene with friends and family, and spending time outdoors with her dog. She also loves staying active through Pilates,
              running, strength training, and long walks. A fun fact about Maddie is that she represented Australia in the U17 and U21 women’s soccer teams!
            </p>
          </div>
        </div>
      </div>
      </Reveal>
    </div>
  </section>
);

export default TeamSection;
