import React from "react";

const handleClick = () => {
    alert("The Quick Start task.");
}

const handleClickInput = (e) => {
    e.preventDefault();
    let input = document.getElementById("query").value
    alert(`You searched "${input}"`);
    document.getElementById("query").value = "";
}

export const Navbar = () => {
    return (
        <div id="navbar" className="p-5 flex items-center flex-col sm:flex-row sm:justify-between md:flex-row md:justify-between lg:flex-row lg:justify-between xl:flex-row xl:justify-between">
            <div id="left-side" className="flex items-center">
                <img src="letter-b-svg.svg" className="size-10" alt="logo-svg" />
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
                    <form onSubmit={handleClickInput}>
                        <input id="query" className="input" type="search" placeholder="Search my storyboards" name="searchbar" />
                    </form>
                </div>
                <button id="nb-btn" onClick={handleClick} className="flex flex-row items-center justify-center m-3 bg-blue-200 hover:bg-blue-100 border border-blue-300 bg-opacity-40 pl-3 pr-3 rounded-md font-bold"><svg className="m-1 flex items-center justify-center" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="skyblue" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12" /></path><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="black">4</text></svg> Quick Start</button>
                <img src="letter-a-svg.svg" className="w-12 h-auto hidden md:flex" />
                <div className="mt-3 m-3 h-12 w-10 bg-black text-black rounded-s-full flex items-center justify-center hidden md:flex">
                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M219.71 117.38a12 12 0 0 0-7.25-8.52l-51.18-20.47l10.59-70.61a12 12 0 0 0-20.64-10l-112 120a12 12 0 0 0 4.31 19.33l51.18 20.47l-10.59 70.64a12 12 0 0 0 20.64 10l112-120a12 12 0 0 0 2.94-10.84M113.6 203.55l6.27-41.77a12 12 0 0 0-7.41-12.92l-43.72-17.49l73.66-78.92l-6.27 41.77a12 12 0 0 0 7.41 12.92l43.72 17.49Z" /></svg>
                </div>
            </div>
        </div>
    );
};
