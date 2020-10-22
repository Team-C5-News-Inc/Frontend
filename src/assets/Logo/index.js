// import react
import * as React from 'react'

function Logo(props) {
  return (
    <svg
      width={200}
      height={90}
      viewBox="80.88 0.187 338.24 149.625"
      style={{
        background: '0 0',
      }}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <defs>
        <filter
          id="prefix__editing-extrusion"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feFlood result="color1" floodColor="#2e2e32" />
          <feConvolveMatrix
            order="9,9"
            divisor={1}
            kernelMatrix="1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 0 1"
            in="SourceAlpha"
            result="extrude"
          />
          <feComposite
            in="color1"
            in2="extrude"
            result="comp-extrude"
            operator="in"
          />
          <feOffset
            dx={4.5}
            dy={4.5}
            in="comp-extrude"
            result="offset-extrude"
          />
          <feMerge>
            <feMergeNode in="offset-extrude" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* eslint-disable-next-line max-len */}
      <g filter="url(#prefix__editing-extrusion)">
        <path
          d="M136.43 101.435v-51.84h4.93l14.72 34.43v-34.43h6.02v51.84h-4.61l-14.91-35.39v35.39h-6.15zm33.79 0v-51.84h20.1v5.38h-12.86v17.15h10.43v5.12h-10.43v19.01h12.99v5.18h-20.23zm32.77 0l-8.45-51.84h6.02l5.57 37.25 6.97-37.06h5.12l7.04 37.25 5.44-37.44h5.89l-8.32 51.84h-5.25l-7.23-38.4-7.29 38.4h-5.51zm52.16.58q-6.53 0-9.95-4.04-3.42-4.03-3.81-11.07l6.4-1.73q.32 5 1.95 8.07 1.64 3.07 5.41 3.07 2.82 0 4.26-1.57t1.44-4.51q0-3.2-1.35-5.31-1.34-2.11-4.28-4.67l-8.71-7.68q-2.62-2.31-3.81-4.96-1.18-2.66-1.18-6.5 0-5.7 3.26-8.83 3.27-3.14 8.9-3.14 6.14 0 9.28 3.27 3.14 3.26 3.78 10.11l-6.15 1.66q-.32-4.54-1.76-7.01-1.44-2.46-5.15-2.46-2.75 0-4.22 1.44-1.48 1.44-1.48 4.26 0 2.3.77 3.87.77 1.57 2.63 3.17l8.76 7.68q3.4 3 5.41 6.52 2.02 3.52 2.02 8 0 5.7-3.46 9.03-3.45 3.33-8.96 3.33zm33.09-.58v-51.84h7.1v51.84h-7.1zm15.49 0v-51.84h4.93l14.72 34.43v-34.43h6.01v51.84h-4.61l-14.91-35.39v35.39h-6.14zm46.78.58q-7.68 0-10.81-4.58-3.14-4.58-3.14-12.64v-18.3q0-8.52 3.07-12.93 3.07-4.42 10.88-4.42 6.98 0 10.02 3.78 3.04 3.77 3.04 11.13v4.1h-6.85v-3.65q0-3.58-.32-5.5t-1.63-3.07q-1.31-1.16-4.19-1.16-2.95 0-4.39 1.25-1.44 1.25-1.89 3.46-.44 2.21-.44 5.92v20.54q0 3.97.64 6.21.64 2.24 2.08 3.2t4 .96q2.75 0 4.09-1.22 1.35-1.21 1.7-3.32.35-2.12.35-5.76v-3.84h6.85v3.84q0 7.74-2.91 11.87-2.92 4.13-10.15 4.13z"
          fill="#fff"
        />
      </g>
      <style />
    </svg>
  )
}

export default Logo
