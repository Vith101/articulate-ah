import { HoverCard } from "./HoverCard";
import values from "../../assets/values.png"

export const ValueSection: React.FC = () => (
    <section id="Values" className="py-10 bg-pink-100">
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h3 className="text-3xl font-semibold text-center mb-10">Our Values</h3>
            <div className="flex items-center justify-center font-sans">    
                <div className="flex w-full max-w-6xl h-[700px] space-x-6">
                
                {/* Left Column: A vertical flexbox containing three text boxes */}
                <div className="flex flex-col justify-between w-1/3">
                    <div className="">
                        <HoverCard title="Compassionate Care" body="We listen closely and support you with kindness, understanding that everyone's journey is different."/>
                    </div>
                    <div>
                        <HoverCard title="A Holistic Approcah" body="Your speech and communcation are connected to many parts of your life. We consider your physical health, emotions, environment and goals to create therapy that truly works for you."/>
                    </div>
                    <div>
                        <HoverCard title="Evidence-Based Practice" body="Our therapy is backed by the latest research and best practices, so you get the most effective care possible."/>
                    </div>
                </div>

                {/* Middle Column: A single image spanning all three rows */}
                <div className="flex-1 rounded-2xl">
                    <img
                        src={values}
                        alt="A placeholder image spanning all three rows"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Column: A vertical flexbox with three text boxes */}
                <div className="flex flex-col justify-between w-1/3">
                    <div>
                        <HoverCard title="Working Together" body="We see you, your family and your support network as partners. Together, we set goals that are meaningful and achievable."/>
                    </div>
                    <div>
                        <HoverCard title="Always Learning" body="Our team keeps up with the newest knowledge and skills, so you benefit from the best in speech pathology and holistic health."/>
                    </div>
                    <div>
                        <HoverCard title="Respect and Inclusivity" body="Everyone is valued here. We celebrate diversity and create a safe space for all backgrounds, cultures and abilities."/>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </section>
);