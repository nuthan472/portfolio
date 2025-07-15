import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ScrollIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
      setShowButton(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[9999] cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className="relative w-16 h-16 rounded-full shadow-xl flex items-center justify-center"
        style={{
          backgroundImage: `conic-gradient(
            red 0%,
            orange ${scrollPercent * 0.2}%,
            yellow ${scrollPercent * 0.4}%,
            green ${scrollPercent * 0.6}%,
            blue ${scrollPercent * 0.8}%,
            violet ${scrollPercent}%,
            #222 ${scrollPercent}%
          )`,
        }}
      >
        {/* Inner Black Circle */}
        <div className="absolute w-12 h-12 rounded-full bg-black flex flex-col items-center justify-center text-white text-xs font-bold">
          <span>{Math.floor(scrollPercent)}%</span>
          <FaArrowUp className="text-sm mt-1" />
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
