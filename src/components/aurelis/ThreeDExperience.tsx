import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useIsClient } from "@/hooks/use-is-client";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

const PorcelainStudio = lazy(() => import("./scenes/PorcelainStudio"));

export function ThreeDExperience() {
  const client = useIsClient();
  const reduced = usePrefersReducedMotion();
  const wrap = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [formStudy, setFormStudy] = useState(false);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      rootMargin: "120px",
      threshold: 0.05,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const show3d = client && visible && !reduced;

  return (
    <section ref={wrap} id="precision" className="relative overflow-hidden bg-ink text-ivory">
      <div className="shell grid gap-10 py-24 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-4">
          <p className="micro text-champagne">3D smile experience · 04</p>
          <h2 className="mt-5 font-serif text-headline">
            Precision
            <br />
            you can see.
          </h2>
          <p className="mt-8 max-w-sm text-body font-light text-mist">
            A studio study of ceramic and light. Drag to rotate. Switch between the porcelain
            photograph and a structural reading — the same object, two ways of looking.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              className={cn("btn-line", !formStudy && "border-champagne bg-ivory/10")}
              onClick={() => setFormStudy(false)}
              aria-pressed={!formStudy}
            >
              Porcelain
            </button>
            <button
              type="button"
              className={cn("btn-line", formStudy && "border-champagne bg-ivory/10")}
              onClick={() => setFormStudy(true)}
              aria-pressed={formStudy}
            >
              Form study
            </button>
          </div>
          <p className="micro mt-8 text-stone">Interactive demo · not a clinical simulator</p>
        </Reveal>

        <div className="relative h-[72vw] min-h-80 max-h-[680px] touch-none lg:col-span-8 lg:h-[72vh] lg:max-h-none">
          {show3d ? (
            <Suspense
              fallback={
                <img
                  src="/images/hero-porcelain.jpg"
                  alt="Porcelain veneer used as a fallback for the 3D study"
                  className="h-full w-full object-contain"
                />
              }
            >
              <PorcelainStudio formStudy={formStudy} />
            </Suspense>
          ) : (
            <img
              src="/images/hero-porcelain.jpg"
              alt="Porcelain veneer in studio light"
              className="h-full w-full object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}
