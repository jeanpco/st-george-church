import React from 'react'

export const ArrowRight = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="black" />
      <mask
        id="arrow-right"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="4"
        y="8"
        width="16"
        height="8"
      >
        
      </mask>
      <path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" fill="white" />
      <g mask="url(#arrow-right)">
        <rect width="24" height="24" fill="black" />
      </g>
    </svg>
  )
}
