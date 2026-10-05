import { useEffect, useRef } from "react";
import { SITE } from "@/lib/content";
import { useBooking } from "@/lib/booking-store";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { Button } from "./Button";

function goGallery() {
  const el = document.getElementById("gallery");
  if (!el) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
}

export function Hero() {
  const { openWith } = useBooking();
  const reduced = usePrefersReducedMotion();
  const wrap = useRef<HTMLElement>(null);
  const visual = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;
    const root = wrap.current;
    const card = visual.current;
    if (!root || !card) return;
    const mouse = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) / r.width - 0.5;
      mouse.y = (e.clientY - r.top) / r.height - 0.5;
    };

    const tick = () => {
      const x = mouse.x;
      const y = mouse.y;
      card.style.transform = `perspective(1600px) rotateY(${x * 8}deg) rotateX(${-y * 5}deg) translate3d(${x * 10}px, ${y * 8}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    root.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      root.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section
      ref={wrap}
      className="relative min-h-dvh overflow-hidden bg-ink text-ivory"
      aria-label="Hero"
    >
      <img
        src="/images/hero-studio.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/55 to-ink" />

      <div className="shell relative grid min-h-dvh items-end gap-8 pb-8 pt-28 lg:grid-cols-12 lg:items-center lg:pb-16 lg:pt-24">
        <div className="lg:col-span-6">
          <p className="micro text-champagne">Cosmetic dentistry / India</p>
          <h1 className="mt-6 font-serif text-display text-ivory">
            The art
            <br />
            of your smile.
          </h1>
          <p className="mt-8 max-w-md text-body font-light text-mist">
            Precision cosmetic dentistry where advanced technology meets the art of facial harmony.
          </p>
          <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <Button magnetic arrow onClick={() => openWith()}>
              Book a private consultation
            </Button>
            <Button variant="line" onClick={goGallery}>
              Explore smile transformations
            </Button>
          </div>
        </div>

        <div className="relative h-[58vw] min-h-72 lg:col-span-6 lg:h-[78vh]">
          <div
            ref={visual}
            className="h-full w-full will-change-transform"
          >
            <img
              src="/images/hero-porcelain.jpg"
              alt="A single porcelain veneer standing in studio light, photographed for this demo"
              className="hero-float h-full w-full object-contain object-center"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      <div className="shell relative flex items-end justify-between gap-6 pb-8">
        <p className="micro text-stone">Est. 2026 · Private studio · {SITE.location}</p>
        <p className="micro hidden text-mist sm:block">Scroll to explore</p>
        <p className="micro text-champagne">01 / 09</p>
      </div>
    </section>
  );
}
