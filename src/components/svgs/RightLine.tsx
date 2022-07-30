import * as React from "react"
import { SVGProps } from "react"

function SvgComponent(props:  SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={437}
      height={80}
      viewBox="0 0 437 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="RightLine"
      {...props}
    >
      <path d="M1 0v78.5h436" stroke="#F2F2F2" strokeWidth={2} />
    </svg>
  )
}

export default SvgComponent
