import React, { ReactNode } from "react";



function ComponentWrapper({ styles, Gradient, children }) {
  return (
    <div className={`w-full max-w-[1280px]  ${styles}`} style={{ background: `${Gradient}` }}>
      <div className="w-full h-full md:px-8 px-4">
        {children}
      </div>
    </div>
  );
}

export default ComponentWrapper;
