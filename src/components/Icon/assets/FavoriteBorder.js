import React from 'react'

export const FavoriteBorder = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.2769 18.6056 15.3549 13.4627 20.0185L13.45 20.03L12 21.35L10.55 20.04L10.5105 20.0041C5.38263 15.3442 2 12.2703 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09ZM12 18.65L12.1 18.55C16.86 14.24 20 11.39 20 8.5C20 6.5 18.5 5 16.5 5C14.96 5 13.46 5.99 12.94 7.36H11.07C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5C4 11.39 7.14 14.24 11.9 18.55L12 18.65Z"
        fill="black"
      />
      <mask
        id="favorite-border"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="3"
        width="20"
        height="19"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.2769 18.6056 15.3549 13.4627 20.0185L13.45 20.03L12 21.35L10.55 20.04L10.5105 20.0041C5.38263 15.3442 2 12.2703 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09ZM12 18.65L12.1 18.55C16.86 14.24 20 11.39 20 8.5C20 6.5 18.5 5 16.5 5C14.96 5 13.46 5.99 12.94 7.36H11.07C10.54 5.99 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5C4 11.39 7.14 14.24 11.9 18.55L12 18.65Z"
          fill="white"
        />
      </mask>
      <g mask="url(#favorite-border)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}
