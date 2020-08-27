import React from 'react'

export const PlayArrow = () => {
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
        d="M19 12L8 19V5L19 12ZM15.27 12L10 8.64V15.36L15.27 12Z"
        fill="black"
      />
      <mask
        id="play-arrow"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="8"
        y="5"
        width="11"
        height="14"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 12L8 19V5L19 12ZM15.27 12L10 8.64V15.36L15.27 12Z"
          fill="white"
        />
      </mask>
      <g mask="url(#play-arrow)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}
