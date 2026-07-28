import React from 'react';
import { Section, Container, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { BulletList } from '../ui/BulletList';
import { screenFor, screenEarly, howItWorks } from '../../data/preschool';
import preschoolScreener1 from '../../../assets/preschool-screeners-1.png';
import preschoolScreener3 from '../../../assets/preschool-screeners-3.png';
import preschoolScreener4 from '../../../assets/preschool-screeners-4.png';
import preschoolScreener5 from '../../../assets/preschool-screeners-5.png';

const rowClasses = 'mt-16 flex flex-col md:flex-row items-center justify-center gap-8';
const subHeading = 'text-2xl text-center font-semibold mb-6';

const PreeschoolSection: React.FC = () => (
  <Section id="preschoolScreeners" className="h-full">
    <Container>
      <Reveal>
        <SectionHeading>Preschool Screeners</SectionHeading>
        <p className="mb-4 text-lg font-bold leading-relaxed">
          Early Identification. Clear guidance. School readiness support.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          We offer 15 minute Speech and Language screening sessions for children aged 3-6 years, designed specifically for preschools
          wanting to support children’s communication development and school readiness. We offer 15 minute Speech and Language screening
          sessions for children aged 3-6 years, designed specifically for preschools wanting to support children’s communication development
          and school readiness.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          These brief screeners help identify children who may benefit from additional support before starting school, giving educators and families clear, practical direction.
        </p>
      </Reveal>

      <Reveal>
        <div className={rowClasses}>
          <div className="w-full flex justify-center">
            <div>
              <h4 className={subHeading}>What we screen for</h4>
              <p className="mb-4 text-lg leading-relaxed">
                Each session provides a snapshot of your child’s communication skills, including:
              </p>
              <BulletList items={screenFor} />
              <div className="flex-1 max-w-3xl mx-auto flex items-center justify-center">
                <img src={preschoolScreener1} alt="Preschool Screener 1" className="max-w-full max-h-[350px]" />
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={rowClasses}>
          <div className="w-full md:w-2/3 flex justify-center">
            <div>
              <h4 className={subHeading}>What you'll receive</h4>
              <p className="mb-4 text-lg leading-relaxed">
                Following the screener, preschools and families will receive a brief summary outlining:
              </p>
              <ol className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                <li className="pl-2 tracking-wide">Child’s strengths</li>
                <li className="pl-2 tracking-wide">Areas of difficulty or concern</li>
                <li className="pl-2 tracking-wide">
                  Recommendations for support
                  <ul className="">
                    <li className="pl-2 tracking-wide">Strategies for educators</li>
                    <li className="pl-2 tracking-wide">Suggestions for home</li>
                    <li className="pl-2 tracking-wide">Guidance on whether further assessment is recommended</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <img src={preschoolScreener3} alt="Preschool Screener 3" className="max-w-full max-h-[350px]" />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={rowClasses}>
          <div className="w-full md:w-1/3 flex justify-center">
            <img src={preschoolScreener4} alt="Preschool Screeners 4" className="max-w-full max-h-[350px]" />
          </div>
          <div className="w-full md:w-2/3 flex justify-center">
            <div>
              <h4 className={subHeading}>Why screen early</h4>
              <p className="mb-4 text-lg leading-relaxed">Early screening helps to:</p>
              <BulletList items={screenEarly} />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={rowClasses}>
          <div className="w-full md:w-2/3 flex justify-center">
            <div>
              <h4 className={subHeading}>How it works</h4>
              <BulletList items={howItWorks} />
              <p className="text-lg underline leading-relaxed">Cost:</p>
              <BulletList items={['Accounts for report, time and travel to the preschool ']} />
              <p className="mb-4 text-xs italic leading-relaxed">
                Cost per child may vary to account for travel, depending on location. Further details available upon enquiry.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <img src={preschoolScreener5} alt="Preschool Screener 5" className="max-w-full max-h-[350px]" />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h3 className="text-2xl font-semibold text-center mb-10">Additional Services</h3>
        <p className="mb-4 text-lg leading-relaxed">
          For children requiring further support, we also provide
          <ul className="text-left mt-2 space-y-3 text-base md:text-lg list-disc pl-5">
            <li className="pl-2 tracking-wide">1:1 comprehensive assessment and ongoing intervention</li>
            <li className="pl-2 tracking-wide">Intervention tailored to the child’s needs and frequency</li>
            <li className="pl-2 tracking-wide">This can be conducted at home, early learning centre or in the community</li>
            <li className="pl-2 tracking-wide">We support funding from NDIS, Medicare and Private Health</li>
          </ul>
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          We also support early learning centres and schools through;
          <ul className="text-left mt-2 space-y-3 text-base md:text-lg list-disc pl-5">
            <li className="pl-2 tracking-wide">Tailored training and consultation services</li>
            <li className="pl-2 tracking-wide">Workshops are designed to suit the specific needs and demographics of your setting</li>
            <li className="pl-2 tracking-wide">Provide practical strategies for educators</li>
            <li className="pl-2 tracking-wide">Opportunities for open discussion and questions</li>
          </ul>
          Cost is $190 per hour (enquire via email)
        </p>
      </Reveal>
    </Container>
  </Section>
);

export default PreeschoolSection;
