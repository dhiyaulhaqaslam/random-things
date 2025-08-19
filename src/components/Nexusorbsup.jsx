"use client";

import React, {
   useState,
   useEffect,
   useRef,
   ReactNode,
   useMemo,
   useCallback,
} from "react";
const SparkleIcon = () => (
   <svg
      height="1.8em"
      style={{
         flex: "none",
         lineHeight: 1,
      }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
   >
      <title>Gemini</title>
      <defs>
         <linearGradient
            id="gemini-gradient-fixed"
            x1="0%"
            x2="68.73%"
            y1="100%"
            y2="30.395%"
         >
            <stop offset="0%" stopColor="#1C7DFF"></stop>
            <stop offset="52.021%" stopColor="#1C69FF"></stop>
            <stop offset="100%" stopColor="#F0DCD6"></stop>
         </linearGradient>
      </defs>
      <path
         d="M12 24A14.304 14.304 0 000 12 14.304 14.304 0 0012 0a14.305 14.305 0 0012 12 14.305 14.305 0 00-12 12"
         fill="url(#gemini-gradient-fixed)"
         fillRule="nonzero"
      ></path>
   </svg>
);
const FigmaIcon = () => (
   <svg
      width="1.8em"
      height="1.8em"
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         d="M0 1.5C0 0.671573 0.671573 0 1.5 0H8.5C9.32843 0 10 0.671573 10 1.5V8H1.5C0.671573 8 0 7.32843 0 6.5V1.5Z"
         fill="#F26207"
      ></path>
      <path
         d="M10 8H18.5C19.3284 8 20 8.67157 20 9.5V14.5C20 15.3284 19.3284 16 18.5 16H10V8Z"
         fill="#F26207"
      ></path>
      <path
         d="M0 17.5C0 16.6716 0.671573 16 1.5 16H10V22.5C10 23.3284 9.32843 24 8.5 24H1.5C0.671573 24 0 23.3284 0 22.5V17.5Z"
         fill="#F26207"
      ></path>
   </svg>
);
const CoralIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="1.8em"
      height="1.8em"
   >
      <defs>
         <linearGradient
            id="coral-gradient-fixed"
            x1="199.997"
            x2="296.665"
            y1="214.302"
            y2="307.573"
            gradientTransform="translate(-200 -213)"
            gradientUnits="userSpaceOnUse"
         >
            <stop offset="0" stopColor="#62A0EA"></stop>
            <stop offset="1" stopColor="#1A5FB4"></stop>
         </linearGradient>
      </defs>
      <path
         fill="url(#coral-gradient-fixed)"
         d="M48.26 2.274a6.113 6.113 0 0 0-1.838 8.468c10.109 15.655 12.495 27.463 11.46 37.811-4.184 19.816-13.279 23.836-21.227 23.836-7.76 0-5.682-12.771.151-16.509 3.482-2.174 7.942-3.587 11.365-3.587 3.392 0 6.142-2.741 6.142-6.123 0-3.383-2.75-6.124-6.142-6.124-3.998 0-7.92.84-11.581 2.27.748-3.529 1.024-7.343.057-11.397-1.468-6.156-5.694-12.036-13.032-17.736a6.15 6.15 0 0 0-8.621 1.065 6.114 6.114 0 0 0 1.078 8.595c5.978 4.643 7.952 8.08 8.627 10.909.675 2.829.132 5.864-1.224 10.034-1.733 5.62-3.745 10.637-4.627 15.448-.434 2.368-.471 4.945-.583 7.004-4.305-4.196-5.99-9.736-5.99-17.831-.001-3.382-2.751-6.124-6.142-6.123-3.389.003-6.135 2.743-6.136 6.123 0 11.056 3.233 21.576 11.898 28.594 7.844 7.473 27.791 4.711 27.791 16.708 0 3.386 4.956 5.034 8.347 5.034 3.478 0 7.855-2.325 7.855-5.034 0-13.612 14.345-21.885 37.96-21.849 3.392.005 6.144-2.734 6.149-6.116.006-3.383-2.738-6.13-6.13-6.136a78.226 78.226 0 0 0-4.741.145c2.64-6.209 3.811-13.045 3.569-20.429-.112-3.381-2.95-6.031-6.339-5.921-3.393.11-6.051 2.943-5.94 6.326.32 9.668-.042 18.301-7.245 22.852-2.048 1.293-4.429 2.415-6.687 2.415 1.753-4.768 3.077-9.801 3.619-15.226.346-3.462.383-7.575-.012-10.77-.613-4.95-1.353-10.564.526-14.793 1.688-3.642 5.47-5.167 11.023-5.167 3.389-.003 6.135-2.744 6.136-6.123.002-3.383-2.745-6.127-6.136-6.13-8.252 0-14.507 4.343-18.053 9.59-1.854-3.96-4.112-8.041-6.84-12.265a6.14 6.14 0 0 0-3.86-2.669 6.159 6.159 0 0 0-4.627.831z"
      ></path>
   </svg>
);
const PalmTreeIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.8em"
      height="1.8em"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 229"
   >
      <path
         fill="#F9AB00"
         d="M128 228.542c9.895 0 17.91-8.015 17.91-17.91V55.413h-35.82v155.219c0 9.895 8.015 17.91 17.91 17.91Z"
      ></path>
      <path
         fill="#5BB974"
         d="M199.356 112.053C180.043 92.755 151.193 88.845 128 100.307l76.669 76.67c3.164 3.163 8.612 1.91 9.955-2.344 6.746-21.357 1.657-45.64-15.268-62.58Z"
      ></path>
      <path
         fill="#129EAF"
         d="M56.644 112.053C75.957 92.755 104.807 88.845 128 100.307l-76.669 76.67c-3.164 3.163-8.612 1.91-9.955-2.344-6.746-21.357-1.657-45.64 15.268-62.58Z"
      ></path>
      <path
         fill="#AF5CF7"
         d="M193.67 52.548c-30.507 0-56.402 20-65.67 47.76h121.25c4.97 0 8.283-5.254 6.03-9.687-11.523-22.611-34.776-38.073-61.61-38.073Z"
      ></path>
      <path
         fill="#FF8BCB"
         d="M140.671 20.101C119.09 41.682 114.926 74.114 128 100.307l85.743-85.743c3.523-3.522 2.15-9.582-2.582-11.119-24.148-7.836-51.52-2.313-70.49 16.656Z"
      ></path>
      <path
         fill="#FA7B17"
         d="M115.329 20.101C136.91 41.682 141.074 74.114 128 100.307L42.257 14.564c-3.523-3.522-2.15-9.582 2.582-11.119 24.148-7.836 51.52-2.313 70.49 16.656Z"
      ></path>
      <path
         fill="#4285F4"
         d="M62.33 52.548c30.507 0 56.402 20 65.67 47.76H6.75c-4.97 0-8.283-5.254-6.03-9.687C12.244 68.01 35.497 52.548 62.33 52.548Z"
      ></path>
   </svg>
);
const InstagramIcon = () => (
   <svg
      fill="#FF0069"
      role="img"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
   >
      <title>Instagram</title>
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
   </svg>
);
const LinkedinIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="#4784ff"
      class="mercado-match"
      width="24"
      height="24"
      focusable="false"
   >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
   </svg>
);
const GitHubIcon = () => (
   <svg
      width="1.8em"
      height="1.8em"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.222.687.825.577C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
   </svg>
);
const SlackIcon = () => (
   <svg
      width="1.8em"
      height="1.8em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
   >
      <path
         d="M5.042 15.167a2.521 2.521 0 1 1-5.042 0 2.521 2.521 0 0 1 5.042 0Z"
         fill="#36C5F0"
      ></path>
      <path
         d="M5.042 8.833a2.521 2.521 0 1 1 0 5.042h3.781V8.833H5.042Z"
         fill="#2EB67D"
      ></path>
      <path
         d="M8.823 5.042a2.521 2.521 0 1 1 0-5.042 2.521 2.521 0 0 1 0 5.042Z"
         fill="#ECB22E"
      ></path>
      <path
         d="M15.167 5.042a2.521 2.521 0 1 1-5.042 0v3.781h5.042V5.042Z"
         fill="#E01E5A"
      ></path>
      <path
         d="M18.958 8.823a2.521 2.521 0 1 1 5.042 0 2.521 2.521 0 0 1-5.042 0Z"
         fill="#ECB22E"
      ></path>
      <path
         d="M18.958 15.167a2.521 2.521 0 1 1 0-5.042H15.177v5.042h3.781Z"
         fill="#E01E5A"
      ></path>
      <path
         d="M15.167 18.958a2.521 2.521 0 1 1 0 5.042 2.521 2.521 0 0 1 0-5.042Z"
         fill="#4A154B"
      ></path>
      <path
         d="M8.823 18.958a2.521 2.521 0 1 1 5.042 0v-3.781H8.823v3.781Z"
         fill="#36C5F0"
      ></path>
   </svg>
);
const DiscordIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="1.8em"
      height="1.8em"
      viewBox="0 0 48 48"
   >
      <path
         fill="#8c9eff"
         d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"
      ></path>
   </svg>
);
const ChessIcon = () => (
   <svg
      fill="#81B64C"
      role="img"
      viewBox="0 0 24 24"
      width="1.8em"
      height="1.8em"
   >
      <title>Chess.com</title>
      <path d="M12 0a3.85 3.85 0 0 0-3.875 3.846A3.84 3.84 0 0 0 9.73 6.969l-2.79 1.85c0 .622.144 1.114.434 1.649H9.83c-.014.245-.014.549-.014.925 0 .025.003.048.006.071-.064 1.353-.507 3.472-3.62 5.842-.816.625-1.423 1.495-1.806 2.533a.33.33 0 0 0-.045.084 8.124 8.124 0 0 0-.39 2.516c0 .1.216 1.561 8.038 1.561s8.038-1.46 8.038-1.561c0-2.227-.824-4.048-2.24-5.133-4.034-3.08-3.586-5.74-3.644-6.838h2.458c.29-.535.434-1.027.434-1.649l-2.79-1.836a3.86 3.86 0 0 0 1.604-3.123A3.873 3.873 0 0 0 13.445.275c-.004-.002-.01.004-.015.004A3.76 3.76 0 0 0 12 0Z" />
   </svg>
);
const CenterFlowerIcon = () => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width="100%"
      height="100%"
      className="coolshapes flower-3"
   >
      <g clipPath="url(#cs_clip_1_flower-3)">
         <mask
            id="cs_mask_1_flower-3"
            style={{
               maskType: "alpha",
            }}
            width="200"
            height="200"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
         >
            <path
               fill="#fff"
               d="M200 50c0-27.614-22.386-50-50-50s-50 22.386-50 50c0-27.614-22.386-50-50-50S0 22.386 0 50s22.386 50 50 50c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50c0 27.614 22.386 50 50 50s50-22.386 50-50c0-27.608-22.375-49.989-49.98-50C177.625 99.99 200 77.608 200 50z"
            ></path>
         </mask>
         <g mask="url(#cs_mask_1_flower-3)">
            <path fill="#fff" d="M200 0H0v200h200V0z"></path>
            <path
               fill="url(#paint0_linear_748_4691_v3)"
               fillOpacity="0.55"
               d="M200 0H0v200h200V0z"
            ></path>
            <g filter="url(#filter0_f_748_4691_v3)">
               <path fill="#18A0FB" d="M131 3H-12v108h143V3z"></path>
               <path fill="#FF58E4" d="M190 109H0v116h190V109z"></path>
               <ellipse
                  cx="153.682"
                  cy="64.587"
                  fill="#FFD749"
                  rx="83"
                  ry="57"
                  transform="rotate(-33.875 153.682 64.587)"
               ></ellipse>
            </g>
         </g>
      </g>
      <defs>
         <filter
            id="filter0_f_748_4691_v3"
            width="361.583"
            height="346.593"
            x="-72"
            y="-61.593"
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
         >
            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
            <feBlend
               in="SourceGraphic"
               in2="BackgroundImageFix"
               result="shape"
            ></feBlend>
            <feGaussianBlur
               result="effect1_foregroundBlur_748_4691"
               stdDeviation="30"
            ></feGaussianBlur>
         </filter>
         <linearGradient
            id="paint0_linear_748_4691_v3"
            x1="200"
            x2="0"
            y1="0"
            y2="200"
            gradientUnits="userSpaceOnUse"
         >
            <stop stopColor="#FF1F00"></stop>
            <stop offset="1" stopColor="#FFD600"></stop>
         </linearGradient>
         <clipPath id="cs_clip_1_flower-3">
            <path fill="#fff" d="M0 0H200V200H0z"></path>
         </clipPath>
      </defs>
      <g
         style={{
            mixBlendMode: "overlay",
         }}
         mask="url(#cs_mask_1_flower-3)"
      >
         <path
            fill="gray"
            stroke="transparent"
            d="M200 0H0v200h200V0z"
            filter="url(#cs_noise_1_flower-3_v3)"
         ></path>
      </g>
      <defs>
         <filter
            id="cs_noise_1_flower-3_v3"
            width="100%"
            height="100%"
            x="0%"
            y="0%"
            filterUnits="objectBoundingBox"
         >
            <feTurbulence
               baseFrequency="0.6"
               numOctaves="5"
               result="out1"
               seed="4"
            ></feTurbulence>
            <feComposite
               in="out1"
               in2="SourceGraphic"
               operator="in"
               result="out2"
            ></feComposite>
            <feBlend
               in="SourceGraphic"
               in2="out2"
               mode="overlay"
               result="out3"
            ></feBlend>
         </filter>
      </defs>
   </svg>
);
const IconWrapper = ({
   children,
   className = "",
   isHighlighted = false,
   isActive = false,
}) => (
   <div
      className={`
            backdrop-blur-xl rounded-2xl flex items-center justify-center border
            ${
               isHighlighted
                  ? "dark:bg-gray-700/50 bg-gray-100/80 border-blue-400/50 dark:shadow-blue-500/20 shadow-blue-400/30 shadow-2xl animate-breathing-glow"
                  : `dark:bg-white/5 bg-white/60 dark:border-white/20 border-gray-300/60 ${
                       !isActive && "animate-float"
                    }`
            }
            ${isActive && "border-blue-400/60"}
            ${className}
        `}
      style={{
         transform: isActive ? "scale(1.1)" : "scale(1)",
         backgroundColor: isActive
            ? "rgba(129, 140, 248, 0.2)"
            : "rgba(255, 255, 255, 0.05)",
         transition:
            "transform 0.8s ease-in-out, background-color 0.8s ease-in-out, border-color 0.8s ease-in-out",
      }}
   >
      {children}
   </div>
);
const IconGrid = () => {
   const [activeId, setActiveId] = useState(1);
   const canvasRef = useRef(null);
   const [hoveredId, setHoveredId] = useState(null); // ✅ ini yang kurang
   const particlesRef = useRef([]);
   const outerIcons = useMemo(
      () => [
         {
            id: 1,
            component: <SparkleIcon />,
            url: "",
         },
         {
            id: 2,
            component: <FigmaIcon />,
            url: "",
         },
         {
            id: 3,
            component: <CoralIcon />,
            url: "",
         },
         {
            id: 4,
            component: <SlackIcon />,
            url: "",
         },
         {
            id: 5,
            component: <PalmTreeIcon />,
            url: "",
         },
         {
            id: 6,
            component: <GitHubIcon />,
            url: "https://github.com/dhiyaulhaqaslam",
         },
         {
            id: 7,
            component: <InstagramIcon />,
            url: "https://www.instagram.com/dhiyaulhaq.aslam/",
         },
         {
            id: 8,
            component: <LinkedinIcon />,
            url: "https://www.linkedin.com/in/dhiyaulhaq-aslam/",
         },
         {
            id: 9,
            component: <DiscordIcon />,
            url: "",
         },
         {
            id: 10,
            component: <ChessIcon />,
            url: "https://www.chess.com/member/gmlazarkk",
         },
      ],
      []
   );
   const radius = 160;
   const svgSize = 400;
   const svgCenter = svgSize / 2;
   const numIcons = outerIcons.length;
   const getIconPosition = useCallback(
      (index) => {
         const angle = (-90 + index * (360 / numIcons)) * (Math.PI / 180);
         return {
            transformX: radius * Math.cos(angle),
            transformY: radius * Math.sin(angle),
            svgX: svgCenter + radius * Math.cos(angle),
            svgY: svgCenter + radius * Math.sin(angle),
         };
      },
      [numIcons, radius, svgCenter]
   );
   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      let animationFrameId;
      const render = () => {
         ctx.clearRect(0, 0, svgSize, svgSize);
         particlesRef.current.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.life -= 1;
            if (p.life <= 0) {
               particlesRef.current.splice(index, 1);
            } else {
               ctx.beginPath();
               ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
               ctx.fillStyle = `rgba(59, 130, 246, ${p.life / 60})`;
               ctx.fill();
            }
         });
         animationFrameId = window.requestAnimationFrame(render);
      };
      render();
      return () => window.cancelAnimationFrame(animationFrameId);
   }, []);
   useEffect(() => {
      const interval = setInterval(() => {
         setActiveId((prevId) => {
            const currentIndex = outerIcons.findIndex(
               (icon) => icon.id === prevId
            );
            const nextIndex = (currentIndex + 1) % outerIcons.length;
            const pos = getIconPosition(nextIndex);
            const iconCenterX = svgCenter + pos.transformX;
            const iconCenterY = svgCenter + pos.transformY;
            for (let i = 0; i < 20; i++) {
               particlesRef.current.push({
                  x: iconCenterX,
                  y: iconCenterY,
                  vx: (Math.random() - 0.5) * 2,
                  vy: (Math.random() - 0.5) * 2,
                  size: Math.random() * 2 + 1,
                  life: Math.random() * 60,
               });
            }
            return outerIcons[nextIndex].id;
         });
      }, 2500);
      return () => clearInterval(interval);
   }, [outerIcons, getIconPosition, svgCenter]);
   return (
      <div className="relative w-[400px] h-[400px] scale-75 md:scale-90 lg:scale-100">
         <canvas
            ref={canvasRef}
            width={svgSize}
            height={svgSize}
            className="absolute top-0 left-0 pointer-events-none z-10"
         ></canvas>

         <svg
            width={svgSize}
            height={svgSize}
            className="absolute top-0 left-0"
         >
            <defs>
               <filter id="glow_v6">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                     <feMergeNode in="coloredBlur" />
                     <feMergeNode in="SourceGraphic" />
                  </feMerge>
               </filter>
            </defs>
            <g>
               {outerIcons.map((icon1, i) => {
                  const p1 = getIconPosition(i);
                  return outerIcons.map((icon2, j) => {
                     if (i >= j) return null;
                     const p2 = getIconPosition(j);
                     const isLineActive =
                        activeId === icon1.id || activeId === icon2.id;
                     return (
                        <line
                           key={`line-${i}-${j}`}
                           x1={p1.svgX}
                           y1={p1.svgY}
                           x2={p2.svgX}
                           y2={p2.svgY}
                           strokeWidth="1.5"
                           style={{
                              stroke: isLineActive ? "#3B82F6" : "#6B7280",
                              opacity: isLineActive ? 0.8 : 0.15,
                              filter: isLineActive ? "url(#glow_v6)" : "none",
                              transition: "all 1.2s ease-in-out",
                           }}
                           className="dark:stroke-gray-600"
                        />
                     );
                  });
               })}
            </g>
         </svg>

         <div className="absolute top-1/2 left-1/2">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 z-20">
               <IconWrapper className="w-24 h-24 p-4" isHighlighted={true}>
                  <CenterFlowerIcon />
               </IconWrapper>
            </div>

            {outerIcons.map((icon, i) => {
               const { transformX, transformY } = getIconPosition(i);
               const isActive = activeId === icon.id;
               return (
                  <a
                     key={icon.id}
                     href={icon.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="absolute z-10"
                     onMouseEnter={() => setHoveredId(icon.id)}
                     onMouseLeave={() => setHoveredId(null)}
                  >
                     <div
                        className="absolute z-20"
                        style={{
                           top: 0,
                           left: 0,
                           transform: `translate(${transformX}px, ${transformY}px)`,
                           transition:
                              "transform 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
                        }}
                     >
                        <div className="-translate-x-1/2 -translate-y-1/2 relative">
                           <div
                              className="absolute inset-[-20px] bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-2xl"
                              style={{
                                 opacity: isActive ? 1 : 0,
                                 transition: "opacity 0.8s ease-in-out",
                              }}
                           />
                           <IconWrapper
                              className="w-16 h-16"
                              isActive={isActive}
                           >
                              {icon.component}
                           </IconWrapper>
                        </div>
                     </div>
                  </a>
               );
            })}
         </div>
      </div>
   );
};
export default function NexusOrbSup() {
   return (
      <div className="w-full flex items-center justify-center font-sans p-4 sm:p-8 overflow-hidden">
         <style>
            {`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                    100% { transform: translateY(0px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes breathing-glow {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.2)); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.1); filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.1)); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.3); filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.2)); }
                }
                @keyframes breathing-glow-light {
                    0% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.1)); }
                    50% { box-shadow: 0 0 35px 10px rgba(59, 130, 246, 0.05); filter: drop-shadow(0 0 15px rgba(59, 130, 246, 0.05)); }
                    100% { box-shadow: 0 0 20px 0px rgba(59, 130, 246, 0.2); filter: drop-shadow(0 0 5px rgba(59, 130, 246, 0.1)); }
                }
                .animate-breathing-glow {
                    animation: breathing-glow 4s ease-in-out infinite;
                }
                .dark .animate-breathing-glow {
                    animation: breathing-glow 4s ease-in-out infinite;
                }
                :not(.dark) .animate-breathing-glow {
                    animation: breathing-glow-light 4s ease-in-out infinite;
                }
            `}
         </style>
         <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
         </div>
         <div className="relative z-10 container mx-auto flex items-center justify-center">
            <IconGrid />
         </div>
      </div>
   );
}
