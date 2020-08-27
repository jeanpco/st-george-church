import React from 'react'

export const Minus = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 11H18V13H6V11Z" fill="black" />
      <mask
        id="minus"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="6"
        y="11"
        width="12"
        height="2"
      >
        <path d="M6 11H18V13H6V11Z" fill="white" />
      </mask>
      <g mask="url(#minus)">
        <rect x="-2" width="24" height="24" fill="#202020" />
      </g>
    </svg>
  )
}
