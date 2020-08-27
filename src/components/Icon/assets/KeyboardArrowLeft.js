import React from 'react'

export const KeyboardArrowLeft = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
        fill="#FAC2A5"
      />
      <mask
        id="keyboard-arrow-left"
        mask-type="alpha"
        mask-units="userSpaceOnUse"
        x="8"
        y="6"
        width="8"
        height="12"
      >
        <path
          d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
          fill="white"
        />
      </mask>
      <g mask="url(#keyboard-arrow-left)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}
