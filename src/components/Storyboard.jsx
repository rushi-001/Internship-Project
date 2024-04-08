import React, { useState } from 'react'

export const Storyboard = () => {

    const [showPopup2, setShowPopup2] = useState(true);

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
                                <img className="lg:h-80 md:h-36 w-full object-cover object-center" src="src/assets/storyboard-bg.jpg" alt="blog" />
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
                                    <div className="bg-white p-8 rounded shadow-lg">
                                        <h1 className='mb-7 font-bold text-3xl text-black'>New Storyboard</h1>
                                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 flex flex-col">
                                            <div className="col-span-full">
                                                <label htmlFor="firstname" className="text-sm">First name</label>
                                                <input id="firstname" type="text" placeholder="First name" className="p-3 border border-gray-300 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                            </div>
                                            <div className="col-span-full">
                                                <label htmlFor="lastname" className="text-sm">Last name</label>
                                                <input id="lastname" type="text" placeholder="Last name" className="p-3 border border-gray-300 w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                                            </div>
                                        </div>
                                        <button onClick={togglePopup2} className="mt-4 ml-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                            Delete
                                        </button>
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
