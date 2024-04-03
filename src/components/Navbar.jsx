import React from "react";

export const Navbar = () => {
    return (
        <div id="navbar" className="p-5 flex items-center flex-col sm:flex-row sm:justify-between md:flex-row md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between">
            <div id="left-side" className="flex items-center">
                <img src="src/assets/letter-b-svg.svg" className="size-10" alt="logo-svg" />
                <span className="ml-5 text-3xl font-bold">
                    Project Dashboard
                </span>
            </div>
            <div id="right-side" className="flex flex-col sm:flex-row">
                <div className="group">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                        </g>
                    </svg>
                    <input id="query" className="input" type="search" placeholder="Search my storyboards" name="searchbar" />
                </div>
                <button id="nb-btn" className="m-3 bg-blue-300 bg-opacity-40 p-3 rounded-md font-bold">Quick Start</button>
                <img src="src/assets/letter-a-svg.svg" className="w-12 h-auto" />
            </div>
        </div>
    );
};
