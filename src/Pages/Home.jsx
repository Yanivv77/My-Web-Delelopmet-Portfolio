import React, { useEffect } from 'react'
import Layout from '../Components/Layout'
import { FaNodeJs, FaReact, FaDocker } from 'react-icons/fa'
import { SiDotnet, SiMongodb, SiExpress, SiKubernetes, SiMicrosoftazure } from 'react-icons/si'
import AOS from 'aos'
AOS.init({
  duration: 1000,
})
function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <div>
        {/* Intro section */}
        <div className="h-screen bg-myred">
          <div
            className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0
            mx-10 z-10 bg-dark
          border-white transform rotate-12 md:rotate-0"
          >
            <div className="h-2/3 ">
              <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_kkflmtur.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="font-bold text-white md:px-4 text-myteal">
              <h1 className="text-7xl md:text-4xl" data-aos="slide-right">
                Hello. I'm <b className="text-myyellow pl-6/">Yaniv,</b>
              </h1>
              <h1 className="text-4xl md:text-xl" data-aos="slide-left">
                a FullStack <b className="text-myyellow">Developer</b>
              </h1>
            </div>
          </div>
        </div>

        {/* Technologies */}

        <div className="mt-20">
          <h1 className="text-4xl text-theme font-bold text-center my-8" data-aos="slide-up">
            Technologies I USE
          </h1>
          <div className="grid md:grid-cols-1 grid-cols-4">
            <SiMongodb size={180} color="#589636" className="w-full text-center mt-20 animate-bounce" />
            <SiExpress size={180} color="black" className="w-full text-center mt-20 animate-bounce" />
            <FaReact size={180} color="#61DBFB" className="w-full text-center mt-20 animate-bounce" />
            <FaNodeJs size={180} color="#3C873A" className="w-full text-center mt-20 animate-bounce" />
            <SiDotnet size={180} color="purple" className="w-full text-center mt-20 " />
            <FaDocker size={180} color="#0db7ed" className="w-full text-center mt-20 " />
            <SiKubernetes size={180} color="#047adc" className="w-full text-center mt-20 " />
            <SiMicrosoftazure size={180} color="#008AD8" className="w-full text-center mt-20 " />
          </div>
        </div>

        {/* {Dev stack section} */}
        <div className="my-20">
          <div className="text-center h-52 bg-myred">
            <h1 className="text-white font-bold text-4xl py-10">My DEV Stack</h1>
          </div>

          <div className="md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-theme hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_dlw10cqe.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="grid md:grid-cols-1 grid-cols-3 p-5">
              <div>
                <h1 className="text-xl font-bold">Front End</h1>
                <hr />

                <p className="font-semibold mt-2">React</p>
                <p className="font-semibold mt-2">Redux</p>
                <p className="font-semibold mt-2">Javascript</p>
                <p className="font-semibold mt-2">TypeScript</p>
              </div>

              <div className="text-center">
                <h1 className="text-xl font-bold">Backend and DB</h1>
                <hr />
                <p className="font-semibold mt-2">NodeJS</p>

                <p className="font-semibold mt-2">DotNet</p>
                <p className="font-semibold mt-2">My SQL</p>
                <p className="font-semibold mt-2">Mongo DB</p>
              </div>

              <div className="text-right">
                <h1 className="text-xl font-bold">Devops</h1>
                <hr />
                <p className="font-semibold mt-2">Docker</p>
                <p className="font-semibold mt-2">Kubernetes</p>
                <p className="font-semibold mt-2">Azure</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
