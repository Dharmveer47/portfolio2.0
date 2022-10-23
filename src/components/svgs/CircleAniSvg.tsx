import { SVGProps, useRef, useLayoutEffect } from "react";
import { Svg, SvgContainer,SvgPath } from "../../styles/circleAni.styled";
const CircleAniSVG = (props: SVGProps<SVGSVGElement>) => {
  const pathRef = useRef<SVGCircleElement>(null);
  useLayoutEffect(() => {
    // const pathlegth = pathRef.current?.getTotalLength();
    // console.log(pathlegth);
  }, []);
  return (
    <SvgContainer>
      <Svg
        width={191}
        height={191}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <SvgPath
          ref={pathRef}
          d="M177.583 82.31A83.143 83.143 0 0 0 74.326 15.077a83.146 83.146 0 0 0 12.642 163.119l.728-7.07a76.048 76.048 0 0 1-63.494-49.173 76.039 76.039 0 1 1 146.364-38.518l7.017-1.127Z"
          className="path1"
          time={60}
          fill="#182226"
        />
        <SvgPath
          d="M138.951 149.033a69.582 69.582 0 1 0-107.408-25.55l5.429-2.431a63.633 63.633 0 1 1 98.226 23.366l3.753 4.615Z"
          fill="#2C3C40"
          time={50}
        />
        <SvgPath
          d="M41.676 101.979a53.503 53.503 0 0 0 37.065 42.647 53.494 53.494 0 0 0 68.184-40.454 53.505 53.505 0 0 0-19.667-52.97 53.499 53.499 0 0 0-27.276-10.92l-.469 4.549a48.927 48.927 0 1 1-53.321 56.423l-4.516.725Z"
          fill="#3F5559"
          time={40}
        />
        <SvgPath
          d="M123.098 128.564a43.767 43.767 0 0 0 15.052-43.699 43.768 43.768 0 0 0-32.535-32.827 43.764 43.764 0 0 0-53.49 36.668 43.76 43.76 0 0 0 3.42 23.788l3.415-1.528a40.022 40.022 0 1 1 61.778 14.696l2.36 2.902Z"
          fill="#627173"
          time={30}
        />
        <SvgPath
          d="M94.902 126.979a32.12 32.12 0 0 0 28.781-17.941A32.115 32.115 0 0 0 106.145 64.8a32.112 32.112 0 0 0-42.306 21.79l2.652.707A29.368 29.368 0 1 1 94.9 124.234l.003 2.745Z"
          fill="#182226"
          time={20}
        />
        <SvgPath
          d="M114.223 87.606a20.882 20.882 0 0 0-37.181-4.503 20.88 20.88 0 0 0 19.062 32.238l-.135-1.779a19.089 19.089 0 0 1-17.884-9.322 19.092 19.092 0 0 1 8.376-27.028 19.096 19.096 0 0 1 26.078 10.985l1.684-.591Z"
          fill="#627173"
          time={10}
        />
        <SvgPath
          d="M87.479 106.153a13.377 13.377 0 0 0 14.103.934 13.387 13.387 0 0 0 7.074-12.236 13.376 13.376 0 0 0-7.845-11.756 13.38 13.38 0 0 0-14.014 1.835l8.484 10.35-7.802 10.873Z"
          // fill="url(#a)"
          fill="#182226"
          time={5}
        />
        <defs>
          <radialGradient
            id="a"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="rotate(-135.22 67.266 28.014) scale(13.3823)"
          >
            <stop stopColor="#2C3C40" />
            <stop offset={1} stopColor="#182226" />
          </radialGradient>
        </defs>
      </Svg>
    </SvgContainer>
  );
};
export default CircleAniSVG;
