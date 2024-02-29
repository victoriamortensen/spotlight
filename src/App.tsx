import React, { useRef } from 'react';
import Img from './images/profile_2024.jpg'
import gitImg from './images/octocat.svg'
import linearImg from './images/linear.webp'
import './App.css';
import { Navbar, Container, Nav, Image} from 'react-bootstrap';
import * as Icon from 'react-feather';
import SkillsSection from './components/featureShowcase';
import NavBar from './components/navBar';

function App() {
  return (
    <div className="App">
    <section id='home'>
      <div className="bg-gradient-to-r from-fuchsia-200 to-fuchsia-300">
        <div className="relative isolate overflow-hidden">
        <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]">
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-fuchsia-400 to-fuchsia-700 opacity-40"
            style={{
              clipPath: "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          ></div>
        </div>

          <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-40 lg:flex lg:px-8 lg:pt-40 gap-32">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
              <div className="w-32">
                <img src={Img} className="aspect-square rotate-3 rounded-2xl shadow-xl object-cover" alt="Victoria Mortensen"/>
              </div>

              <h1 className="mt-10 text-4xl font-bold tracking-tight text-slate-800 sm:text-6xl text-left">Victoria G. Mortensen</h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 text-pretty text-left">
                I’m Victoria, a happy <span className=" font-medium">Product Manager</span> / Engineer from Philly+NYC, who makes web products that are intuitive, 
                accessible, beautiful, and fun to use. I love the intersection between pushing super detailed CSS on a nifty React Component to production AND making 
                Figma drafts as a Product Manager to drive business outcomes. Applying my entrepreneurial startup genes as best as I can along the way.
              </p>

              <div className="mt-10 flex items-center gap-x-6 gap-y-6 flex-col md:flex-row">
                <a href="https://github.com/victoriamortensen" target="_blank">
                  <div className="w-12">
                    <img src={gitImg} alt=""/>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/victoriamortensen/" target="_blank">
                  <button className="flex h-10 gap-2 rounded-lg bg-[#0a66c2] px-4 py-2 shadow-xl shadow-yellow-900/40 text-white">
                    <div>
                      <svg className="size-6" fill="currentColor" viewBox="-30 0 350 350" aria-hidden="true"><path d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z"></path><path d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"></path><path d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995C310,145.43,300.549,94.761,230.454,94.761z"></path></svg>              </div>
                    <div className="text-white/80">Connect on LinkedIn</div>
                  </button>
                </a>
                <a href="mailto:victoria@glavindmortensen.com" className="text-sm font-semibold leading-6 text-slate-800 no-underline">.. or shoot me an email </a>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32 pt-8 hidden md:block">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <img src={linearImg} alt="Linear" className="w-[65rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SkillsSection/>

    <NavBar/>

  </div>
  );
}

export default App;
