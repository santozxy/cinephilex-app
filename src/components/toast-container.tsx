"use client";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const contextClass = {
    default: "bg-zinc-900",
  };

  return (
    <>
      {children}
      <ToastContainer
        toastClassName={() =>
          contextClass["default"] +
          " relative z-[99999999999] flex p-3 shadow-xl rounded-md justify-between overflow-hidden cursor-pointer"
        }
        position="top-right"
        autoClose={2000}
        pauseOnHover={false}
      />
    </>
  );
}
