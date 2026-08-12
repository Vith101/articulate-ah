import React from 'react';
import { Section, Container, SectionHeading } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { BulletList } from '../ui/BulletList';
import { GetStartedCTA } from '../ui/GetStartedCTA';
import { supportAreas, supervisionFor, whatToExpect, whyMatters } from '../../data/supervision';
import supervision1 from '../../../assets/supervision-1.png';
import supervision2 from '../../../assets/supervision-2.png';
import supervision3 from '../../../assets/supervision-3.png';

const rowClasses = 'mt-16 flex flex-col md:flex-row items-center justify-center gap-8';
const subHeading = 'text-2xl text-center font-semibold mb-6';

const SupervisionImage: React.FC<{ src: string }> = ({ src }) => (
  <img src={src} alt="Supervision" className="max-w-full max-h-[350px]" />
);

const SupervisionSection: React.FC = () => (
  <Section id="supervision" className="h-full">
    <Container>
      <Reveal>
        <SectionHeading>Supervision</SectionHeading>
        <p className="mb-4 text-lg font-bold leading-relaxed">
          Grow your confidence, clinical skills and career with supportive, evidence-based supervision
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          Whether you’re an early career clinician, transitioning into a new area, or an experienced Speech Pathologist looking for reflective practice,
          supervision provides a space to build clinical reasoning, strengthen decision making, and feel supported.
        </p>
        <p className="mb-4 text-lg leading-relaxed">
          We offer online supervision across Australia, as well as in-person sessions in Melbourne and Geelong.
        </p>
      </Reveal>

      <Reveal>
        <div className={rowClasses}>
          <div className="w-full md:w-2/3 flex justify-center">
            <div>
              <h4 className={subHeading}>What supervision can support with?</h4>
              <p className="mb-4 text-lg leading-relaxed">
                Supervision is tailored to your individual goals and caseload.
                <span className="block mt-1">Areas of support may include:</span>
              </p>
              <BulletList items={supportAreas} />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <SupervisionImage src={supervision1} />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={rowClasses}>
          <div className="w-full md:w-1/3 flex justify-center"> </div>
          <div className="w-full md:w-2/3 flex justify-center">
            <div>
              <h4 className={subHeading}>Who is supervision for?</h4>
              <br />
              <BulletList items={supervisionFor} />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={rowClasses}>
          <div className="w-full md:w-2/3 flex justify-center">
            <div>
              <h4 className={subHeading}>Flexible Supervision options</h4>
              <p className="mb-4 text-lg leading-relaxed">We offer:</p>
              <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                <li className="pl-2 tracking-wide">Online Supervision - accessible Australia-wide</li>
                <li className="pl-2 tracking-wide">In-person sessions - Melbourne & Geelong</li>
                <li className="pl-2 tracking-wide">1:1 supervision - personlised and goal-focused</li>
                <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                  <li className="pl-2 tracking-wide">1hr Supervision sessions - $190 p/hour</li>
                </ul>
                <li className="pl-2 tracking-wide">
                  Small group supervision - shared learning and case discussion
                  <ul className="text-left space-y-3 text-base md:text-lg list-disc pl-5">
                    <li className="pl-2 tracking-wide">1.5hr Group supervision - $120 p/hour</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center" />
        </div>
      </Reveal>

      <Reveal>
        <div className={rowClasses}>
          <div className="w-full md:w-1/3 flex justify-center">
            <SupervisionImage src={supervision2} />
          </div>
          <div className="w-full md:w-2/3 flex justify-center">
            <div>
              <h4 className={subHeading}>What to expect</h4>
              <p className="mb-4 text-lg leading-relaxed">Supervision sessions may include:</p>
              <BulletList items={whatToExpect} />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className={rowClasses}>
          <div className="w-full md:w-1/2 flex justify-center">
            <div>
              <h4 className={subHeading}>Why supervision matters</h4>
              <br />
              <BulletList items={whyMatters} />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <SupervisionImage src={supervision3} />
          </div>
        </div>
      </Reveal>

      <Reveal>
        <GetStartedCTA
          heading="Ready to get started?"
          body="Get in touch to book a supervision session or ask us anything — we’d love to support your clinical journey."
        />
      </Reveal>
    </Container>
  </Section>
);

export default SupervisionSection;
