import { useEffect, useRef } from 'react';

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    if (ref.current) {
      observer.observe(ref.current);
      ref.current.querySelectorAll('.reveal-start').forEach(child => observer.observe(child));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
};

export default useReveal;
