import { useEffect, useRef } from "react";

function useOutsideClick(handler, listeningCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }

    document.addEventListener("click", handleClick, listeningCapturing);
    return () =>
      document.removeEventListener("click", handleClick, listeningCapturing);
  }, [handler, listeningCapturing]);

  return { ref };
}

export default useOutsideClick;
