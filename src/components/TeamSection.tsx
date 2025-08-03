import React from 'react';

const TeamSection: React.FC = () => (
  <section id="team" className="py-10 bg-pink-100 h-full">
    <h3 className="text-3xl font-semibold text-center mb-10">Meet our team</h3>
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid lg:grid-cols-2 gap-16 items-center'>
        <div className='relative z-1 text-center'>
          <h4 className="text-4xl font-bold mb-2">Harshini Baskaran</h4>
          <p className="mb-4 font-bold">
            Director <br />
            Principal Speech Pathologist
          </p>
          <p className="text-center">
            Welcome! <br />
            As a dedicated clinician working in the disability sector for over 5 years, I am passionate about helping individuals and families achieve their therapy goals and increase their participation within the community. <br />
            As a generalist clinician, I see both paediatric and adult clients. I have areas of expertise in nonverbal communication (AAC device use), language, speech, social communication, and fluency., however am able to support in all areas of communication. <br />
            I am here to provide personalised and compassionate care, to support families and individuals accessing their community and increasing their ability to communicate wants and needs. I eagerly anticipate the opportunity to work with you as we navigate this journey together. <br />
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img
              src="http://articulateah.com.au/staging/Baskaran_Harshi_Default_Pop+Out_Headshot+(2).jpeg"
              alt="Harshini Baskaran"
              className="w-48 h-48 mx-auto rounded-full mb-4"
            />
            <p className="mb-4">
              Harshini holds a Master's in Speech and Language Pathology and has extensive expertise in various specialised areas. She is proficient in AAC device application and implementation, certified in the Hanen More Than Words program, and holds a Key Word Sign certificate. Additionally, she is qualified in the SOS Feeding Approach, enhancing her ability to support diverse communication and feeding needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
