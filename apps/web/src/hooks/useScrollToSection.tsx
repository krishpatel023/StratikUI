"use client";

const useScrollToSection = () => {
  const scrollToComponent = (componentName: string) => {
    if (!componentName) return;
    const elem = document.getElementById(componentName);
    if (elem) elem.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return scrollToComponent;
};

export default useScrollToSection;
