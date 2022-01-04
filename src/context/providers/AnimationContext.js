import { useEffect } from "react";
import AnimationsContext from "../AnimationsContext";

const AnimationsProvider = ({ children }) => {
  //! State
  const scrolAnimations = () => {
    const animation = (elements, className) => {
      elements.forEach((elements) => {
        const elementPosition = elements.getBoundingClientRect().top;
        const viewPortHeight = window.innerHeight - 100;
        if (elementPosition < viewPortHeight) {
          elements.classList.add(className);
        } else {
          elements.classList.remove(className);
        }
      });
    };

    const elements = document.querySelectorAll(".animation");
    const headingAnimation = document.querySelectorAll(".headingAnimation");
    animation(elements, "animate");
    animation(headingAnimation, "headingAnimate");
  };
  useEffect(() => {
    window.addEventListener("scroll", scrolAnimations);
  }, []);
  return (
    <AnimationsContext.Provider value>{children}</AnimationsContext.Provider>
  );
};

export default AnimationsProvider;
