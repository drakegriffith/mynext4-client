import * as React from "react";

function IconBrandVsco({
  size = 24,
  color = "currentColor",
  stroke = 2,
  ...props
}) {
  return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-vsco" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" /><path d="M17 12a5 5 0 1 0 -10 0a5 5 0 0 0 10 0z" /><path d="M12 3v4" /><path d="M21 12h-4" /><path d="M12 21v-4" /><path d="M3 12h4" /><path d="M18.364 5.636l-2.828 2.828" /><path d="M18.364 18.364l-2.828 -2.828" /><path d="M5.636 18.364l2.828 -2.828" /><path d="M5.636 5.636l2.828 2.828" /></svg>;
}

export default IconBrandVsco;