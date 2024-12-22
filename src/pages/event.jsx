// event.js
import React from 'react'
import '../css/event.css'
import poster1 from '../assets/posters/poster1.jpeg'
import poster2 from '../assets/posters/poster2.jpeg'
import poster3 from '../assets/posters/poster3.jpeg'
import poster4 from '../assets/posters/poster4.jpeg'
import poster5 from '../assets/posters/poster5.jpeg'
import poster6 from '../assets/posters/poster6.jpg'
import EventCard from '../components/eventCard';

export default function Event() {
    return (
        <div>
            <section className="dark">
                <div className="py-4">
                    <h1 className="head text-gray-300 tracking-widest pt-6 pl-10" id="pageHeaderTitle">Events</h1>
                    <div className="flex flex-col text-center w-full mb-20">
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">We conduct various events in form of Workshops, Competitions etc to make the community engaging.</p>
                    </div>
                    <EventCard
                        name="Research Methedology & Effective Paper Writing" 
                        type="Online Seminar" 
                        date="2 October 2024" 
                        desc=" How to write an effective research paper? - Total overview in detail. What steps to follow when the paper gets rejected?  What goes into the peer-review process and steps for best revisions? Sites for the best citations and references" 
                        poster_img={poster6} 
                        duration="3 hrs" 
                        color="green"
                    />
                    <EventCard
                        name="HackHound & C# Corner Presents CERT RUSH" 
                        type="Competition" 
                        date="13 September 2024" 
                        desc="HackHound Club and C# Corner present Cert Rush—showcase skills, earn C# certificates, and win exciting goodies!" 
                        poster_img={poster5} 
                        duration="6 hrs" 
                        color="blue"
                    />
                    <EventCard
                        name=" Workshop On 'DATA VISUALIZATION' & TABLEAU" 
                        type="Workshop " 
                        date="13 September 2024" 
                        desc="HackHound's Engineers' Day Workshop with Mansi Yadav teaches data visualization basics and best practices." 
                        poster_img={poster4} 
                        duration="4 hrs" 
                        color="yellow"
                    />
                    <EventCard
                        name=" HackHound Club Core Member's Recruitment" 
                        type="Core Members Recruitment" 
                        date="9 September 2024" 
                        desc="HackHound is recruiting. We are looking skilled students accross various domains such as (AI&ML, Web Development, Android Development, Competitive Programming Social & PR)" 
                        poster_img={poster3} 
                        duration="3 hrs" 
                        color="green"
                    />
                    <EventCard
                        name=" From Zero to Hero: Mastering GenAl in a Flash" 
                        type="Workshop" 
                        date="2 September 2024" 
                        desc="Introduction of GenAI, providing hands on exercises and a small scale Hackathon based to what you learned in the workshop " 
                        poster_img={poster2} 
                        duration="6 hrs" 
                        color="blue"
                    />
                    <EventCard
                        name=" HackHound Spectrum Sync" 
                        type="Competition" 
                        date="12 & 13 August 2024" 
                        desc="Quiz on CS Fundamentals and DSA and Domain Specific Competition for Qualifiers." 
                        poster_img={poster1} 
                        duration="2.5 hrs" 
                        color="red"
                    />
                </div>
            </section>
        </div>
    );
}
