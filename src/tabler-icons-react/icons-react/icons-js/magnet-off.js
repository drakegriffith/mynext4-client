import * as React from "react";

function IconMagnetOff({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-magnet-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 3a2 2 0 0 1 2 2m0 4v4a3 3 0 0 0 5.552 1.578m.448 -3.578v-6a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v8a7.99 7.99 0 0 1 -.424 2.577m-1.463 2.584a8 8 0 0 1 -14.113 -5.161v-8.001c0 -.297 .065 -.58 .181 -.833" /><path d="M4 8h4" /><path d="M15 8h4" /><path d="M3 3l18 18" /></svg>;
}

export default IconMagnetOff;