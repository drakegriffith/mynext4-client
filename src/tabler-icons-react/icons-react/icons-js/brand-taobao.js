import * as React from "react";

function IconBrandTaobao({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-taobao" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 10h-6.5" /><path d="M11 9c-.44 .843 -1 1.5 -2 2" /><path d="M13 10v6.8" /><path d="M9 15c.71 3.675 6 1.366 8.5 .5" /><path d="M17 14.5l1 2" /><path d="M10 13h5" /><path d="M3 10c4.5 1 2.902 4.85 0 8" /><path d="M7 9c1.43 -1.652 2.06 -2.876 2.5 -4" /><path d="M8.5 7c4.333 -.667 7 -1 8 -1c1.5 0 3.5 -.5 4 1.5c.333 1.333 .5 2.833 .5 4.5v4c0 2 -1 3 -5 3" /><circle cx={5} cy={6} r={1} /></svg>;
}

export default IconBrandTaobao;