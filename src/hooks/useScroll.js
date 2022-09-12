import React, { useEffect, useState } from "react";
function useScroll() {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const update = () => {
      setPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", update);
    return ()=>window.removeEventListener('scroll',update);
  }, []);
  return position;
}
export default useScroll;
