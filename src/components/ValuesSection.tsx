import { HoverCard } from "./HoverCard";
import values from "../../assets/values.png"

export const ValueSection: React.FC = () => (
    <section id="Values" className="py-10 bg-pink-100">
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h3 className="text-3xl font-semibold text-center mb-10">Our Values</h3>
            <div className="flex items-center justify-center font-sans"> 
                
                {/* Main container is now vertical (flex-col) on mobile, 
                  horizontal (lg:flex-row) on large screens. 
                  Removed fixed mobile height.
                */}   
                <div className="flex flex-col lg:flex-row w-full max-w-6xl lg:h-[700px] space-y-6 lg:space-y-0 lg:space-x-6">
                
                    {/* Left Column: Cards */}
                    {/* Takes full width on mobile, 1/3 width on large screens. Uses vertical spacing on mobile. */}
                    <div className="flex flex-col space-y-4 lg:space-y-0 lg:justify-between w-full lg:w-1/3">
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

                    {/* Middle Column: Image */}
                    {/* Hidden on mobile (default), block/visible on large screens (lg:block). */}
                    <div className="hidden lg:block lg:flex-1 rounded-2xl">
                        <img
                            src={values}
                            alt="A visual representation of the company's core values"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>

                    {/* Right Column: Cards */}
                    {/* Takes full width on mobile, 1/3 width on large screens. Uses vertical spacing on mobile. */}
                    <div className="flex flex-col space-y-4 lg:space-y-0 lg:justify-between w-full lg:w-1/3">
                        <div>
                            <HoverCard title="Working Together" body="We see you, your family and your support network as partners. Together, we set goals that are meaningful and achievable."/>
                        </div>
                        <div>
                            <HoverCard title="Always Learning" body="Our team keeps up with the newest knowledge and skills, so you benefit from the best in Speech Pathology and holistic health."/>
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