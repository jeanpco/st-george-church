import React from 'react'

export const MoreHorizontal = () => {
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
        d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12Z"
        fill="black"
      />
      <mask
        id="more-horizontal"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="4"
        y="10"
        width="16"
        height="4"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM10 12C10 10.9 10.9 10 12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12Z"
          fill="white"
        />
      </mask>
      <g mask="url(#more-horizontal)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}
