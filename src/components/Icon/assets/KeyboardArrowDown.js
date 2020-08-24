import React from 'react'

export const KeyboardArrowDown = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
        fill="black"
      />
      <mask
        id="keyboard-arrow-down"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="6"
        y="8"
        width="12"
        height="8"
      >
        <path
          d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
          fill="white"
        />
      </mask>
      <g mask="url(#keyboard-arrow-down)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}
