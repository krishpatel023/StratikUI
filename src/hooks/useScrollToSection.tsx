"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useEffect } from "react";

const useScrollToSection = () => {
  const param = usePathname();

  // console.log("PARAM", param);

  const componentName = param.split("#")[1];
  // console.log(componentName);

  const scrollToComponent = () => {
    if (!componentName) return;
    const elem = document.getElementById(componentName);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
      //   window.scrollTo({
      //     top: elem?.getBoundingClientRect().top,
      //     behavior: "smooth",
      //   });
    }
  };

  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    console.log("Params:", params);
    if (params) {
      console.log("Hash:", window.location.hash);
    }
    console.log("Hash:", window.location.hash);
  }, [params]);

  useEffect(() => {
    scrollToComponent();
  }, []);
};
export default useScrollToSection;
