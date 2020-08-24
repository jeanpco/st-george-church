import React from 'react'

export const ArrowBack = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.51 3.87001L15.73 2.10001L5.84 12L15.74 21.9L17.51 20.13L9.38 12L17.51 3.87001Z"
        fill="black"
      />
      <mask
        id="arrow-back"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="5"
        y="2"
        width="13"
        height="20"
      >
        <path
          d="M17.51 3.87001L15.73 2.10001L5.84 12L15.74 21.9L17.51 20.13L9.38 12L17.51 3.87001Z"
          fill="white"
        />
      </mask>
      <g mask="url(#arrow-back)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}
