import React from 'react'

export const ArrowForward = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.25999 21.9L18.16 12L8.25999 2.10001L6.48999 3.87001L14.62 12L6.48999 20.13L8.25999 21.9Z"
        fill="black"
      />
      <mask
        id="arrow-forward"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="6"
        y="2"
        width="13"
        height="20"
      >
        <path
          d="M8.25999 21.9L18.16 12L8.25999 2.10001L6.48999 3.87001L14.62 12L6.48999 20.13L8.25999 21.9Z"
          fill="white"
        />
      </mask>
      <g mask="url(#arrow-forward)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}
