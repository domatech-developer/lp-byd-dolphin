"use client";

import { useEffect, useRef, useState } from "react";

type UseInViewOptions = {
  /** Quanto do elemento precisa aparecer para disparar (0 a 1). */
  threshold?: number;
  /** Margem para antecipar/atrasar o disparo, ex: "0px 0px -10% 0px". */
  rootMargin?: string;
  /** Dispara apenas uma vez (não reverte ao sair da tela). */
  once?: boolean;
};

/**
 * Observa quando um elemento entra na viewport.
 * Retorna a ref para anexar ao elemento e um booleano `inView`.
 */
const useInView = <T extends HTMLElement = HTMLDivElement>({
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
  once = true
}: UseInViewOptions = {}) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
};

export default useInView;
