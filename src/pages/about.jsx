import React from "react";
import TeamCards from "../components/TeamCards";
import Sanchit from "../assets/memberImages/Sanchit_Nigam.jpeg";
import Arya from "../assets/memberImages/AryaP.jpeg";
import Lalith from "../assets/memberImages/LalithM.jpeg";
import Abhijeet from "../assets/memberImages/Abhijeet.jpeg";
import Pragya from "../assets/memberImages/Pragya.jpeg"
import Zuhaib from "../assets/memberImages/Zuhaib.jpg"
import Hitesh from "../assets/memberImages/Hitesh.jpg"
import Kushagra from "../assets/memberImages/Kushagra.jpeg"
import Oshin from "../assets/memberImages/Oshin.jpeg"
import Abhilasha from "../assets/memberImages/Abhilasha.jpeg"
export default function about() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-300 tracking-widest">
              TEAM LEADS
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
              We have a dedicated team Leads who are always ready to give back
              to the HackHound Club
            </p>
          </div>
          <div class="flex flex-wrap -m-4 justify-center">
            <TeamCards
              name="Kushagra Sharma"
              img={Kushagra}
              post="President"
              data="Computer Science and Engineering"
              linkedin={"linkedin.com/in/kushagra-sharma-b78515249"}
              instagram={"https://www.instagram.com/ikushagra._/"}
            />
            <TeamCards
              name="Pragya Gaur"
              img={Pragya}
              post="Vice President"
              data="Computer Science and Engineering"
              github={"https://github.com/pragya0129"}
              linkedin={"https://www.linkedin.com/in/pragyagaur12"}
              instagram={"https://www.instagram.com/pianistpragya/"}
            />
            <TeamCards
              name="Abhijeet Sharma"
              img={Abhijeet}
              post="Android Lead"
              data="Computer Science and Engineering"
              github={"https://github.com/abhijeetsharma016"}
              instagram={"https://www.instagram.com/just_abhijeet/"}
              linkedin={"https://www.linkedin.com/in/abhijeetsharma016/"}
            />
            <TeamCards
              name="Arya Putatunda"
              img={Arya}
              post="AI & ML Lead"
              data="Computer Science and Engineering"
              linkedin={"https://www.linkedin.com/in/arya-putatunda-002b40261/"}
              github={"https://github.com/Movazed?tab=repositories"}
              instagram={
                "https://www.instagram.com/jojo_arya_/profilecard/?igsh=Z2MzbDNqY3Rna3Iz"
              }
            />
            <TeamCards
              name="Hitesh Bajaj"
              img={Hitesh}
              post="Social Lead "
              data="Computer Science and Engineering"
              linkedin={"https://www.linkedin.com/in/hitesh-hb"}
              instagram={"https://www.instagram.com/simply.__.complicated"}
              github={"https://github.com/HITESH07-TECH"}
            />
            <TeamCards
              name="Lalith Mulukutla"
              img={Lalith}
              post="Web Dev Lead"
              data="Computer Science and Engineering"
              linkedin={"https://www.linkedin.com/in/msrilalith/"}
              github={"https://github.com/mlalith0302"}
              instagram={"https://www.instagram.com/lalith0302/"}
            />
            <TeamCards
              name="Sanchit Nigam"
              img={Sanchit}
              post="Competitive Programming Lead"
              data="Computer Science and Engineering"
              linkedin={"https://www.linkedin.com/in/sanchit-nigam-6a899a30a/"}
              github={"https://github.com/sanchit-cmd"}
              instagram={" https://www.instagram.com/nigam.sanchit/"}
            />
            <TeamCards
              name="Zuhaib Farooqui"
              img={Zuhaib}
              post="Media Lead "
              data="Computer Science and Engineering"
              linkedin={"https://www.linkedin.com/in/zuhaibfarooqui1204/"}
              github={"https://github.com/iammzf"}
              instagram={"https://www.instagram.com/iammzf/"}
            />
          </div>
          <div class="flex flex-col text-center w-full mb-20 mt-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-gray-300 tracking-widest">
              FACULTY COORIDNATOR
            </h1>
          </div>
          <div class="flex flex-wrap -m-4 justify-center lg:justify-start">
            <TeamCards
              name="Dr Oshin Sharma"
              img={Oshin}
              post="Associate Professor"
              data="SRM-IST"
              linkedin={"https://www.linkedin.com/in/dr-oshin-sharma-99142017/"}
              instagram={"https://www.instagram.com/oshinsharmaa/"}
            />
            <TeamCards
              name="Dr Abhilasha Singh"
              img={Abhilasha}
              post="Associate Professor"
              data="SRM-IST"
              linkedin={"https://www.linkedin.com/in/abhilasha-singh-1b282637/"}
              instagram={"https://www.instagram.com/abhilashasingh296"}
              
            />
          </div>
        </div>
      </section>
    </div>
  );
}
