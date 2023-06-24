import React, { useEffect, useRef, useState } from "react";
import "./fade-in-wrapper.scss";

export function FadeInWrapper({ children, initialVisibility }) {
  const [isVisible, setVisible] = useState(initialVisibility);
  const domRef = useRef();

  const intersectionObserverSubscribe = (observer) => {
    try {
      observer.unobserve(domRef.current);
    } catch (error) {
      // TODO: do something better here
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => intersectionObserverSubscribe(observer);
  }, []);

  return (
    <div
      className={`column has-text-centered is-vcentered fade-in-section ${
        isVisible ? "is-visible" : ""
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
}
