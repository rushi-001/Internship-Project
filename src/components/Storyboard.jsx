import React, { useState } from 'react'

export const Storyboard = () => {

    const [showPopup2, setShowPopup2] = useState(false);

    const handleStoryboardClick = () => {
        alert("Storyboard content")
    }

    const togglePopup2 = () => {
        setShowPopup2(!showPopup2);
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-14 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/3 cursor-pointer">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg" onClick={handleStoryboardClick}>
                                <img className="lg:h-80 md:h-36 w-full object-cover object-center" src="storyboard-bg.jpg" alt="blog" />
                                <div className="p-3">
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-1">AI Character Demo Storyboard</h1>
                                    <div className="flex items-center flex-wrap ">
                                        <h3 className='text-gray-400 inline-flex items-center md:mb-2 lg:mb-0'>Updated 19 Mar 24</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3 cursor-pointer">
                            <div className="h-full border-2 bg-body rounded-lg overflow-hidden flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-lg" onClick={togglePopup2}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 1024 1024"><path fill="#9c9c9c" d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0m0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448 200.977 448 448s-200.976 449.01-448 449.01M736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32" /></svg>
                            </div>
                            {showPopup2 && (
                                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                                    <div className="bg-white p-8 rounded-lg shadow-lg">
                                        <div className='mb-7 flex flex-row justify-between items-center'>
                                            <h1 className='font-bold text-3xl text-black'>New Storyboard</h1>
                                            <svg xmlns="http://www.w3.org/2000/svg" onClick={togglePopup2} width="1em" height="1em" viewBox="0 0 15 15"><path fill="black" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27" /></svg>
                                        </div>
                                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 flex flex-col">
                                            <div className="col-span-full">
                                                <label htmlFor="firstname" className="text-sm font-bold">Storyboard Name</label>
                                                <input id="firstname" type="text" placeholder="e.g. Default Project Storyboard" className="p-3 border border-gray-300 w-full rounded-md focus:ring focus:ring-opacity-75" />
                                            </div>
                                            <div className="col-span-full relative">
                                                <label htmlFor="frameSize" className="text-sm font-bold">Frame size</label>
                                                <div className="relative">
                                                    <select id="frameSize" className="p-3 border font-bold border-gray-300 w-full rounded-md focus:ring focus:ring-opacity-75">
                                                        <option className='text-gray-500' value="landscape">Landscape (16:9)</option>
                                                        <option className='text-gray-500' value="portrait">Portrait (16:9)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-row justify-between items-center m-3'>
                                            <label className="relative h-auto w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]" htmlFor="switch">
                                                <input className="peer sr-only" id="switch" type="checkbox" />
                                                <span className="absolute inset-0 m-auto h-2 rounded-full bg-stone-400" />
                                                <span className="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-stone-600 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0">
                                                    <span className="absolute inset-0 m-auto size-4 rounded-full bg-stone-300 transition">
                                                    </span>
                                                </span>
                                            </label>
                                            <button onClick={togglePopup2} className="bg-gray-300 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
                                                Create Storyboard
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
