import React, { useState } from 'react'
import { Storyboard } from './Storyboard';

export const Dashboard = () => {

  const [rotationAngle, setRotationAngle] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleArrowClick = () => {
    const newRotationAngle = rotationAngle === 0 ? -90 : 0;
    setRotationAngle(newRotationAngle);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div id='new-project' className='bg-white rounded-md ml-10 mr-10'>
        <div className='flex justify-between'>
          <div id='title' className='p-10 flex flex-row'>
            <img className='w-10 h-auto mr-3' src='src/assets/folder-svg.svg' />
            <div className='flex flex-col'>
              <h1 className='font-bold'>Default Project</h1>
              <h3 className='font-semibold text-gray-400'>1 storyboard</h3>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <svg id='menu' className='mr-7 hover:cursor-pointer' onClick={togglePopup} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><g fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><circle cx="8" cy="2.5" r=".75" /><circle cx="8" cy="8" r=".75" /><circle cx="8" cy="13.5" r=".75" /></g></svg>
            {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded shadow-lg">
                  <h1 className="text-xl font-bold mb-4">Project</h1>
                  <p>Do you want to delete this project.</p>
                  <button onClick={togglePopup} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Close
                  </button>
                  <button onClick={togglePopup} className="mt-4 ml-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                  </button>
                </div>
              </div>
            )}
            <svg id='arrow' className={`mr-7 hover:cursor-pointer ${showPopup ? 'pointer-events-none' : 'pointer-events-auto'}`} onClick={() => { handleArrowClick(); toggleDropdown(); }} style={{ transform: `rotate(${rotationAngle}deg)` }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="black" d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496" /></svg>
          </div>
        </div>
        {/* Dropdown*/}
        {isOpen && (
          <div className="w-auto mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="horizontal" aria-labelledby="options-menu">
              <div>
                <Storyboard />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
