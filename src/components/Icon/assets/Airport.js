import React from 'react'

export const Airport = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 16V14L13.5 9V3.5C13.5 2.67 12.83 2 12 2C11.17 2 10.5 2.67 10.5 3.5V9L2 14V16L10.5 13.5V19L8 20.5V22L12 21L16 22V20.5L13.5 19V13.5L22 16Z"
        fill="black"
      />
      <mask
        id="airport"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="2"
        y="2"
        width="20"
        height="20"
      >
        <path
          d="M22 16V14L13.5 9V3.5C13.5 2.67 12.83 2 12 2C11.17 2 10.5 2.67 10.5 3.5V9L2 14V16L10.5 13.5V19L8 20.5V22L12 21L16 22V20.5L13.5 19V13.5L22 16Z"
          fill="white"
        />
      </mask>
      <g mask="url(#airport)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H24V24H0V0Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1)"></g>
    </svg>
  )
}
