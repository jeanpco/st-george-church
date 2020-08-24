import React from 'react'

export const Add = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="black" />
      <mask
        id="add"
        mask-type="alpha"
        mask-units="userSpaceOnUse"
        x="5"
        y="5"
        width="14"
        height="14"
      >
        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white" />
      </mask>
      <g mask="url(#add)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}