import * as React from "react"

function Arrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        strokeWidth={1.5}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 27v4" stroke="#CD3D73" />
        <path stroke="#666" d="M19 23v8h-8M11 23.8V31H3v-6" />
        <path stroke="#666" d="M10 25l5-6H6l-5 6zM21 25l-6-6" />
        <g stroke="#666">
          <path d="M15.956 9L23 1h-9L6.956 9zM31 9l-8-8" />
        </g>
        <path d="M17 7.815V15M29 7v18h-4M9 15V9" stroke="#666" />
        <path d="M21 10v1M25 10v1M21 15v1M25 15v1M25 20v1" stroke="#CD3D73" />
      </g>
    </svg>
  )
}

const MemoSvgComponent = React.memo(Arrow)
export default MemoSvgComponent
