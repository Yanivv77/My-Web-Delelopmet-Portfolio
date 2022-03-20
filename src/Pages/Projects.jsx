import React from 'react'
import Layout from '../Components/Layout'
import projectsData from '../resources/projects'
import AOS from 'aos'
AOS.init({
  duration: 1000,
})

function Projects() {
  return (
    <Layout>
      x
      <div className="grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5">
        {projectsData.map((project) => {
          return (
            <div>
              <div className="relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400">
                <img src={project.image} alt="../resources/project.jpg" className="w-full h-52 text-center" />

                <div className="absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80 rounded-tr-3xl rounded-bl-3xl">
                  <h1 className="text-4xl font-semibold text-white">{project.title}</h1>
                  <button className="border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white ">
                    <a href={project.link} alt="" target="_blank" rel="noreferrer">
                      Enter
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Projects
