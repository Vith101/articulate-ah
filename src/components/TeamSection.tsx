import React from 'react';

const TeamSection: React.FC = () => (
  <section id="team" className="py-10 bg-pink-100 h-full">
    <h3 className="text-3xl font-semibold text-center mb-10">Meet our team</h3>
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid lg:grid-cols-2 gap-16 items-center'>
        <div className='relative z-1 text-center'>
          <h4 className="text-4xl font-bold mb-2">Harshini Baskaran</h4>
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
              src="http://articulateah.com.au/staging/Baskaran_Harshi_Default_Pop+Out_Headshot+(2).jpeg"
              alt="Harshini Baskaran"
              className="w-48 h-48 mx-auto rounded-full mb-4"
            />
            <p className="mb-4 text-lg leading-relaxed">
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
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
