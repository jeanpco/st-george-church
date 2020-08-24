import React from 'react'

export const Menu = () => {
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
        d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
        fill="black"
      />
      <mask
        id="menu"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="3"
        y="6"
        width="18"
        height="12"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z"
          fill="white"
        />
      </mask>
      <g mask="url(#menu)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}
