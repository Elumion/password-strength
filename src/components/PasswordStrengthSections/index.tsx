import React, { useEffect, useRef } from "react";
import "./index.css";
import { SectionsStrength } from "./index.types";

interface Props {
  strengthValue?: SectionsStrength;
}

function resetClass(el: Element) {
  el.setAttribute("class", "password-section");
}

export default function Sections({ strengthValue }: Props) {
  const sectionsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionsContainerRef) {
      const sectionsArr = [...sectionsContainerRef.current?.children!];

      if (strengthValue === SectionsStrength.EMPTY) {
        sectionsArr.forEach((el) => {
          resetClass(el);
        });
      } else if (strengthValue === SectionsStrength.SHORT) {
        sectionsArr.forEach((el) => {
          resetClass(el);
          el.classList.add(SectionsStrength.SHORT);
        });
      } else if (strengthValue === SectionsStrength.EASY) {
        sectionsArr.forEach((el, index) => {
          resetClass(el);
          if (index < 1) el.classList.add(SectionsStrength.EASY);
        });
      } else if (strengthValue === SectionsStrength.MEDIUM) {
        sectionsArr.forEach((el, index) => {
          resetClass(el);
          if (index < 2) el.classList.add(SectionsStrength.MEDIUM);
        });
      } else if (strengthValue === SectionsStrength.HARD) {
        sectionsArr.forEach((el, index) => {
          resetClass(el);
          if (index < 3) el.classList.add(SectionsStrength.HARD);
        });
      }
    }
  }, [strengthValue]);

  return (
    <div ref={sectionsContainerRef} className="password-sections__container">
      <span className="password-section "></span>
      <span className="password-section "></span>
      <span className="password-section "></span>
    </div>
  );
}
