import { useRef, useLayoutEffect } from "react";
import { SVGProps } from "react"

const SvgComponent = (props:  SVGProps<SVGSVGElement>) => {
    const Ref = useRef<SVGPathElement>(null);
    useLayoutEffect(() => {
      console.log(Ref.current?.getTotalLength())
    }, [])
    return (
        <svg
            // width={120}
            // height={120}
            viewBox="0 0 121 121"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="LogoCircle"
            {...props}
        >
            <path
                ref={Ref}
                d="M119 60c0 32.585-26.415 59-59 59S1 92.585 1 60 27.415 1 60 1s59 26.415 59 59z"
                stroke="#F2F2F2"
                strokeWidth={2}
            />
        </svg>
    )
}

export default SvgComponent
