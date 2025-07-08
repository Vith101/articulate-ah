import React from 'react';

const AboutSection: React.FC = () => (
  <section id="about" className="py-20 bg-pink-100">
    <h3 className="text-3xl font-semibold text-center mb-10">About Us</h3>
    <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid lg:grid-cols-2 gap-16 items-center'>
            <div className='relative z-1'>
              <p className="text-left">
                As a dedicated clinician working in the disability sector for over 5 years, I am passionate about helping individuals and families achieve their therapy goals and increase their participation within the community.
                As a generalist clinician, I see both paediatric and adult clients. I have areas of expertise in nonverbal communication (AAC device use), language, speech, social communication, and fluency., however am able to support in all areas of communication.
                I am here to provide personalised and compassionate care, to support families and individuals accessing their community and increasing their ability to communicate wants and needs. I eagerly anticipate the opportunity to work with you as we navigate this journey together.
                Our dedicated team of speech pathologists is committed to helping individuals of all ages improve their communication skills. We offer personalized assessments and therapy sessions to support speech, language, and communication development.
              </p>
            </div>
            <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <img
              src="http://articulateah.com.au/staging/Baskaran_Harshi_Default_Pop+Out_Headshot+(2).jpeg"
              alt="Harshi Baskaran"
              className="w-48 h-48 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-bold mb-2">Harshi Baskaran</h4>
            <p className="mb-4">
              Speech and Language Pathologist<br />
              Mobile Services: East Melbourne Region<br />
              Telehealth: Australia Wide
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
