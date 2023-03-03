import React, { ReactNode } from "react";



function ComponentWrapper({ styles, Gradient, children }) {
  return (
    <div className={`w-full ${styles}`} style={{ background: `${Gradient}` }}>
      <div className="w-full h-full max-w-[1380px] md:px-8 px-4">
        {children}
      </div>
    </div>
  );
}

export default ComponentWrapper;
