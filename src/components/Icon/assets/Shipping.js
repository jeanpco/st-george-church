import React from 'react'

export const Shipping = () => {
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
        d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM19.5 9.5L21.46 12H17V9.5H19.5ZM5 17C5 17.55 5.45 18 6 18C6.55 18 7 17.55 7 17C7 16.45 6.55 16 6 16C5.45 16 5 16.45 5 17ZM8.22 15C7.67 14.39 6.89 14 6 14C5.11 14 4.33 14.39 3.78 15H3V6H15V15H8.22ZM17 17C17 17.55 17.45 18 18 18C18.55 18 19 17.55 19 17C19 16.45 18.55 16 18 16C17.45 16 17 16.45 17 17Z"
        fill="black"
      />
      <mask
        id="shipping"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="1"
        y="4"
        width="22"
        height="16"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12L20 8ZM19.5 9.5L21.46 12H17V9.5H19.5ZM5 17C5 17.55 5.45 18 6 18C6.55 18 7 17.55 7 17C7 16.45 6.55 16 6 16C5.45 16 5 16.45 5 17ZM8.22 15C7.67 14.39 6.89 14 6 14C5.11 14 4.33 14.39 3.78 15H3V6H15V15H8.22ZM17 17C17 17.55 17.45 18 18 18C18.55 18 19 17.55 19 17C19 16.45 18.55 16 18 16C17.45 16 17 16.45 17 17Z"
          fill="white"
        />
      </mask>
      <g mask="url(#shipping)">
        <rect width="24" height="24" fill="#FAC2A5" />
      </g>
    </svg>
  )
}
