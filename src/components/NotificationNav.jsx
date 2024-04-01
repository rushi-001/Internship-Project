import React from "react";

export const NotificationNav = () => {

  const offerBtn = () => {
    alert("hello");
  }

  return (
    <div
      id="notification-nav"
      className="bg-notification flex items-center p-3 "
    >
      <div
        id="offer-title"
        className="p-1 pl-2 pr-2 rounded-full font-bold bg-notification-title flex flex-row items-center w-96 sm:w-auto md:w-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
        >
          <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m56 112h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16" />
        </svg>
        <span className="ml-1">One-Time Offer</span>
      </div>
      <h3 id="offer-description" className="ml-2 font-bold">
        Your AI Storyboarding Bundle Discount expires in
        <span> </span>
        <span
          id="offer-time"
          className="p-1 text-timer font-bold rounded-md bg-notification-timer"
        >
          5:01
        </span>
      </h3>
      <button
        id="offer-btn"
        className="p-2 ml-5 bg-notification-btn hover:bg-notification-btn-hover rounded font-bold text-sm sm:w-auto md:w-auto lg:w-auto  xl:w-auto"
        onClick={offerBtn}
      >
        Claim Discount
      </button>
    </div>
  );

};
