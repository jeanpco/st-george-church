import React from 'react'

export const Grade = () => {
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
        d="M9.19 8.63L12 2L14.81 8.63L22 9.24L16.54 13.97L18.18 21L12 17.27L5.82 21L7.46 13.97L2 9.24L9.19 8.63ZM12.97 9.42L12 7.13L11.03 9.4L10.56 10.51L9.36 10.61L6.89 10.82L8.77 12.45L9.68 13.24L9.41 14.42L8.85 16.83L10.97 15.55L12 14.93L13.03 15.57L15.15 16.85L14.59 14.44L14.32 13.26L15.23 12.47L17.11 10.84L14.64 10.63L13.44 10.53L12.97 9.42Z"
        fill="black"
      />
      <mask
        id="grade"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="19"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.19 8.63L12 2L14.81 8.63L22 9.24L16.54 13.97L18.18 21L12 17.27L5.82 21L7.46 13.97L2 9.24L9.19 8.63ZM12.97 9.42L12 7.13L11.03 9.4L10.56 10.51L9.36 10.61L6.89 10.82L8.77 12.45L9.68 13.24L9.41 14.42L8.85 16.83L10.97 15.55L12 14.93L13.03 15.57L15.15 16.85L14.59 14.44L14.32 13.26L15.23 12.47L17.11 10.84L14.64 10.63L13.44 10.53L12.97 9.42Z"
          fill="white"
        />
      </mask>
      <g mask="url(#grade)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}
