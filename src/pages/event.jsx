// event.js
import React from 'react'
import '../css/event.css'
import poster1 from '../assets/posters/Poster-Intro to Programming.jpeg'
import poster2 from '../assets/posters/IntroToProgramming2-Poster.jpeg'
import poster3 from '../assets/posters/OpenSourceWorkshop.jpeg'
import poster4 from '../assets/posters/CyberSec-Workshop-Poster.jpeg'
import poster5 from '../assets/posters/WebDev-Workshop.jpeg'
import poster6 from '../assets/posters/Codenite.jpg'
import poster7 from '../assets/posters/AIWorkshop.jpg'
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
                        name="Introduction to Machine Learning" 
                        type="Workshop" 
                        date="26 January 2023" 
                        desc="This workshop was conducted by the AI-ML Department. The workshop covered various Machine Learning models and the mathematics behind them along with hands-on practice." 
                        poster_img={poster7} 
                        duration="2 hrs" 
                        color="red"
                        name2="Codenite" 
                        type2="Contest" 
                        date2="4 January 2023" 
                        desc2="This was an intra-institute level competitive programming contest organised by the Coding Club with massive participation." 
                        poster_img2={poster6} 
                        duration2="2 hrs" 
                        color2="red"
                    />
                </div>
            </section>
        </div>
    );
}
