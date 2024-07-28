import { GoX } from "react-icons/go";
import ToastContext from "./UnToastService";
import React, { useState } from "react";


export default function UnToastProvider({ children }) {
    const [uniToasts, setUniToasts] = useState([])

const open = (component, timeout = 3000) => {
  const id = Date.now();
  setUniToasts((uniToasts) => [...uniToasts, { id, component }]);

  setTimeout(() => close(id), timeout);

  return id;
}
    const close = (id) =>
      setUniToasts((uniToasts) => uniToasts.filter((uniToasts) => uniToasts.id !== id));
    return (
      <ToastContext.Provider value={{open,close}}>
        {children}
        <div className="space-y-2 fixed bottom-12 right-6 shadow-xl">
          {uniToasts.map(({ id, component }) => (
            <div key={id} className="relative">
                  {/* <button
              onClick={() => close(id)}
                className="absolute bottom-2 right-3 p-2 rounded-xl bg-gray-200 text-gray-800/60">
                <GoX size={10} />
                  </button> */}
                  {component}
            </div>
          ))}
        </div>
      </ToastContext.Provider>
    );
}