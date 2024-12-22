import React from 'react'
import TeamCards from '../components/TeamCards'
import Abhinish from '../assets/memberImages/Abhinish.jpg'
import AravJain from '../assets/memberImages/AravJain.jpg'
import ArjavBarya from '../assets/memberImages/ArjavBarya.jpg'
import Sunny from '../assets/memberImages/Sunny.jpg'
import Harsh from '../assets/memberImages/Harsh.jpeg'
import Prakhar from '../assets/memberImages/Prakhar.jpg'
import Vishwaroop from '../assets/memberImages/Vishwaroop.jpg'
import Aashray from '../assets/memberImages/Aashray.jpg'
import Aayush from '../assets/memberImages/Aayush.jpg'
import Manish from '../assets/memberImages/Manish.jpg'
import Kishan from '../assets/memberImages/Kishan.jpeg'
import Sourav from '../assets/memberImages/Sourav.jpeg'
import Soumye from '../assets/memberImages/Soumye.jpg'
import Aditya from '../assets/memberImages/Aditya.jpeg'
import Sanath from '../assets/memberImages/Sanath.jpg'
import Atharva from '../assets/memberImages/Atharva.jpg'

export default function about() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-300 tracking-widest">TEAM LEADS</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">We have a dedicated team Leads who are always ready to give back to the HackHound Club</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <TeamCards name="Kushagra Sharma" img={Harsh} post="President" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/harsh-agarwal-364439228/"} phone="917549395833" twitter={"https://twitter.com/HK_Agrwl"} github={"https://github.com/HKAgrwl"} />
            <TeamCards name="Pragya Gaur" img={Sanath} post="Vice President" data="Computer Science and Engineering" />
            <TeamCards name="Abhijeet Sharma" img={Aashray} post="Android Lead" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/aashray-gupta-26a503246/"} phone={"7009378912"} />
            <TeamCards name="Arya Putatunda" img={ArjavBarya} post="AI & ML Lead" data="Mechanical Engineering" linkedin={"https://www.linkedin.com/in/arjav-barya-569584235/"} phone={"9301763998"} />
            <TeamCards name="Hitesh Bajaj" img={AravJain} post="Socail Lead I" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/aaravjn/"} phone="7487853240" />
            <TeamCards name="Lalith Mulukutla" img={Prakhar} post="Web Dev Lead" data="Computer Science and Engineering" linkedin={"https://www.linkedin.com/in/prakhar-kapisway-1524ba22b/"} phone={"9508307404"} />
            <TeamCards name="Sanchit Nigam" img={Atharva} post="Competitive Programming Lead" data="Computer Science and Engineering" />
            <TeamCards name="Zuhaib Farooqui" img={Vishwaroop} post="Soical Media Lead II" data="Chemical Engineering" linkedin={"https://www.linkedin.com/in/vishwaroop-gangarde-118a02228/"} phone="7709888143" />
            

          </div>
          <div class="flex flex-col text-center w-full mb-20 mt-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-300 tracking-widest">FACULTY COORIDNATOR</h1>
            {/* <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">We have a dedicated team of core members who are always ready to give back to the community</p> */}
          </div>
          <div class="flex flex-wrap -m-4">
            <TeamCards name="Dr Oshin Sharma" post="Associate Professor" data="SRM-IST" linkedin={"https://www.linkedin.com/in/qascade"} phone="9149601803" twitter={"https://twitter.com/qascade"} github={"https://github.com/qascade"} />
          </div>
          


        </div>

      </section>
    </div >
  )
}
