import React from 'react'
import { Dashboard } from './Dashboard'

export const MainContainer = () => {
  return (
    <div id="body-container" className='bg-gray-500 h-screen'>
        <div id="team-title" className="p-5 flex items-center flex-col sm:flex-row sm:justify-between md:flex-row md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between">
            <div id="left-side" className="flex items-center ml-2">
                <img src="src/assets/letter-a-svg.svg" className="size-10" alt="logo-svg" />
                <span className="ml-5 text-2xl font-bold">
                    Adam Cooper Team
                </span>
            </div>
            <div id="right-side" className="flex flex-col sm:flex-row mr-2">
                <button id="nb-btn" className="m-3 bg-black text-white pl-5 pr-5 pt-2 pb-2 p-3 rounded-md font-bold">New Project</button>
            </div>
        </div>
        <div id='project-container'>
            <Dashboard />
        </div>
    </div>
  )
}
