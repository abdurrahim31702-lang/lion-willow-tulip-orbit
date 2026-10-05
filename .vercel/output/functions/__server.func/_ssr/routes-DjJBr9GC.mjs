import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as SITE, c as TREATMENTS, d as usePrefersReducedMotion, i as PageShell, l as cn, n as CASES, o as TECH, r as EXPERIENCE_STEPS, s as TESTIMONIALS, t as Button, u as useBooking } from "./PageShell-00iCeYy8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DjJBr9GC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function BeforeAfter({ src, alt, className }) {
	const [value, setValue] = (0, import_react.useState)(62);
	const wrap = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: wrap,
		className: cn("relative overflow-hidden bg-charcoal", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				draggable: false,
				className: "aspect-3/4 w-full object-cover opacity-90 saturate-50 contrast-75 brightness-75 sepia"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 overflow-hidden",
				style: { clipPath: `inset(0 ${100 - value}% 0 0)` },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt,
					draggable: false,
					className: "h-full w-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-y-0 w-px bg-ivory",
				style: { left: `${value}%` },
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "absolute inset-0 cursor-ew-resize",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "sr-only",
					children: "Reveal demo composite"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 4,
					max: 96,
					value,
					onChange: (e) => setValue(Number(e.target.value)),
					className: "absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-4 top-4 flex justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "micro bg-ink/50 px-2 py-1 text-mist",
					children: "Study"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "micro bg-ink/50 px-2 py-1 text-champagne",
					children: "Refined"
				})]
			})
		]
	});
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			el.dataset.in = "1";
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				el.dataset.in = "1";
				io.disconnect();
			}
		}, {
			threshold: .14,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	const style = { transitionDelay: `${delay}ms` };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", className),
		style,
		children
	});
}
function CaseStudies() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "relative bg-bone text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-24 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "micro text-gold",
					children: "Smile transformations · 05"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-serif text-headline",
					children: "Smiles, refined."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-body font-light text-stone",
					children: "Fictional composites assembled for this demonstration. Drag the divider. These are not patient results and do not represent clinical outcomes."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-20",
				children: CASES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {
						src: c.image,
						alt: c.alt
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex items-start justify-between gap-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "micro text-gold",
								children: [
									"Case ",
									c.num,
									" · Demo case study"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-serif text-title",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-sm text-sm font-light leading-relaxed text-stone",
								children: c.rationale
							})
						] })
					})] })
				}, c.num))
			})]
		})
	});
}
function Contact() {
	const { openWith } = useBooking();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative bg-ink text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-12 py-24 md:grid-cols-12 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "md:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro text-champagne",
						children: "Location · India"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 font-serif text-headline",
						children: [
							"Your smile,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"considered."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-sm text-body font-light text-mist",
						children: "A private studio in Mumbai, imagined for this demonstration. Appointments are by enquiry — in a real practice, they would be unhurried and few."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-12 space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "micro text-gold",
								children: "Studio"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-2 text-lg font-light",
								children: [
									SITE.address,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									SITE.location
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "micro text-gold",
								children: "Contact"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
								className: "mt-2 text-lg font-light",
								children: [
									SITE.email,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									SITE.phone
								]
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "micro text-gold",
								children: "Hours"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-2 text-lg font-light",
								children: SITE.hours
							})] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-12",
						magnetic: true,
						arrow: true,
						onClick: () => openWith(),
						children: "Request a private consultation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro mt-6 text-stone",
						children: SITE.demoNotice
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "md:col-span-7",
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/clinic-facade.jpg",
					alt: "Night facade of the fictional Aurelis studio in Mumbai",
					className: "aspect-4/3 w-full object-cover outline outline-1 -outline-offset-1 outline-ivory/10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-4 flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "micro text-mist",
						children: "Mumbai · India"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "micro text-champagne",
						children: "Demo location"
					})]
				})] })
			})]
		})
	});
}
function Doctor() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative bg-ivory text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid items-end gap-12 py-24 md:grid-cols-12 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "md:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/doctor-portrait.jpg",
					alt: "Editorial portrait of Dr. Aria Mehta, a fictional practitioner created for this demo",
					className: "aspect-3/4 w-full object-cover object-top outline outline-1 -outline-offset-1 outline-ink/10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-4 micro text-stone",
					children: "Demo practitioner · not a real clinician"
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "md:col-span-5 md:pb-8",
				delay: 100,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro text-gold",
						children: "The doctor · 07"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-serif text-headline",
						children: "Dr. Aria Mehta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro mt-4 text-stone",
						children: "Cosmetic & restorative dentist"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 text-body font-light text-stone",
						children: "A fictional portrait, written for this studio demonstration. No degrees, awards or hospital affiliations are claimed. The figure exists to show how a private practice might speak — calmly, precisely, and without spectacle."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-body font-light text-stone",
						children: "In a real atelier the biography would be shorter than the work. Here, the work is imagined; the standard remains: facial harmony, ceramic that holds light, and rooms that do not hurry you."
					})
				]
			})]
		})
	});
}
function Experience() {
	const pin = (0, import_react.useRef)(null);
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const el = pin.current;
		if (!el) return;
		const onScroll = () => {
			const rect = el.getBoundingClientRect();
			const total = el.offsetHeight - window.innerHeight;
			if (total <= 0) return;
			const p = Math.min(.999, Math.max(0, -rect.top / total));
			setIndex(Math.floor(p * EXPERIENCE_STEPS.length));
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	const step = EXPERIENCE_STEPS[index] ?? EXPERIENCE_STEPS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: pin,
		id: "experience",
		className: "relative bg-charcoal text-ivory",
		style: { height: `${EXPERIENCE_STEPS.length * 85}vh` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-0 flex min-h-dvh items-center overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid w-full items-center gap-10 py-24 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "micro text-champagne",
							children: "The Aurelis experience · 08"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 font-serif text-display text-champagne",
							children: step.num
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-serif text-headline",
							children: step.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-body font-light text-mist",
							children: step.copy
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-10 flex flex-wrap gap-3",
							children: EXPERIENCE_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("micro block border px-2 py-1", i === index ? "border-champagne text-ivory" : "border-line text-stone"),
								children: s.num
							}) }, s.num))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-4/3 overflow-hidden lg:col-span-7",
					children: EXPERIENCE_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: s.image,
						alt: s.alt,
						className: cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-luxury", i === index ? "opacity-100" : "opacity-0")
					}, s.num))
				})]
			})
		})
	});
}
function FinalCta() {
	const { openWith } = useBooking();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[80vh] overflow-hidden bg-ink text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-studio.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/55" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell relative flex min-h-[80vh] flex-col items-start justify-end py-24 md:py-32",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro text-champagne",
						children: "By private appointment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 max-w-5xl font-serif text-display",
						children: [
							"Ready to redefine",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"your smile?"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "mt-12",
						magnetic: true,
						arrow: true,
						onClick: () => openWith(),
						children: "Book a private consultation"
					})
				] })
			})
		]
	});
}
function useIsClient() {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => setReady(true), []);
	return ready;
}
var VeneerCanvas = (0, import_react.lazy)(() => import("./VeneerCanvas-DkE-LHTg.mjs"));
function goGallery() {
	const el = document.getElementById("gallery");
	if (!el) return;
	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const top = el.getBoundingClientRect().top + window.scrollY - 72;
	window.scrollTo({
		top,
		behavior: reduced ? "auto" : "smooth"
	});
}
function Hero() {
	const { openWith } = useBooking();
	const client = useIsClient();
	const reduced = usePrefersReducedMotion();
	const wrap = (0, import_react.useRef)(null);
	const mouse = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const [visible, setVisible] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const el = wrap.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: .05 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		if (reduced) return;
		const el = wrap.current;
		if (!el) return;
		const onMove = (e) => {
			const r = el.getBoundingClientRect();
			mouse.current = {
				x: ((e.clientX - r.left) / r.width - .5) * 2,
				y: ((e.clientY - r.top) / r.height - .5) * 2
			};
		};
		el.addEventListener("pointermove", onMove, { passive: true });
		return () => el.removeEventListener("pointermove", onMove);
	}, [reduced]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: wrap,
		className: "relative min-h-dvh overflow-hidden bg-ink text-ivory",
		"aria-label": "Hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero-studio.jpg",
				alt: "",
				className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50",
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-b from-ink/40 via-ink/55 to-ink" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell relative grid min-h-dvh items-end gap-10 pb-10 pt-28 lg:grid-cols-12 lg:items-center lg:pb-16 lg:pt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "micro text-champagne",
							children: "Cosmetic dentistry / India"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-serif text-display text-ivory",
							children: [
								"The art",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"of your smile."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-md text-body font-light text-mist",
							children: "Precision cosmetic dentistry where advanced technology meets the art of facial harmony."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								magnetic: true,
								arrow: true,
								onClick: () => openWith(),
								children: "Book a private consultation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "line",
								onClick: goGallery,
								children: "Explore smile transformations"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-[52vw] min-h-72 max-h-[560px] lg:col-span-5 lg:h-[70vh] lg:max-h-none",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0",
						children: client && visible && !reduced ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
							fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/hero-porcelain.jpg",
								alt: "Porcelain veneer photographed in studio light",
								className: "h-full w-full object-contain"
							}),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VeneerCanvas, { mouse })
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/hero-porcelain.jpg",
							alt: "Porcelain veneer photographed in studio light",
							className: "h-full w-full object-contain object-center"
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell relative flex items-end justify-between gap-6 pb-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "micro text-stone",
						children: ["Est. 2026 · Private studio · ", SITE.location]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro hidden text-mist sm:block",
						children: "Scroll to explore"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro text-champagne",
						children: "01 / 09"
					})
				]
			})
		]
	});
}
function Philosophy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "philosophy",
		className: "relative bg-ivory text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-12 py-24 md:grid-cols-12 md:gap-10 md:py-36",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "md:col-span-7 md:pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro text-gold",
						children: "Philosophy · 02"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-serif text-headline",
						children: [
							"Dentistry, elevated",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"to an art form."
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 120,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 max-w-md text-body font-light text-stone",
							children: "We treat the smile as architecture for the face — a matter of proportion, light, and restraint. Technology is present, but never loud. The result should feel inevitable, as if it had always belonged."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-md text-body font-light text-stone",
							children: "Natural-looking ceramic, facial harmony, and a private tempo. Nothing here is rushed toward a trend. Precision is the luxury."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 180,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-line-dark pt-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "micro text-gold",
									children: "Focus"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 font-serif text-xl italic",
									children: "Harmony"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "micro text-gold",
									children: "Method"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 font-serif text-xl italic",
									children: "Proportion"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "micro text-gold",
									children: "Finish"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-2 font-serif text-xl italic",
									children: "Restraint"
								})] })
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "md:col-span-5 md:col-start-8 md:-mt-8",
				delay: 80,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/philosophy-interior.jpg",
							alt: "Sunlit limestone interior of the fictional Aurelis private studio",
							className: "img-clip aspect-3/4 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10",
							"data-in": "1"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-4 flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "micro text-stone",
							children: "Mumbai · private studio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "micro text-gold",
							children: "Demo interior"
						})]
					})]
				})
			})]
		})
	});
}
function Technology() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "technology",
		className: "relative overflow-hidden bg-ink text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/tech-scan.jpg",
				alt: "Champagne wireframe study of a dental arch in a dark studio",
				className: "absolute inset-0 h-full w-full object-cover opacity-35"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/70" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell relative py-24 md:py-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro text-champagne",
						children: "Infrastructure · 06"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 max-w-3xl font-serif text-headline",
						children: "Precision, powered by technology."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-body font-light text-mist",
						children: "Instruments, not gadgets. Digital design, scanning and planning exist so the hand can be slower, and the result quieter."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-16 divide-y divide-line border-y border-line",
					children: TECH.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "grid gap-4 py-8 md:grid-cols-12 md:items-baseline",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "micro text-gold md:col-span-1",
									children: item.num
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-serif text-title md:col-span-5",
									children: item.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-light leading-relaxed text-mist md:col-span-6",
									children: item.copy
								})
							]
						})
					}) }, item.num))
				})]
			})
		]
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-ivory text-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-24 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "micro text-gold",
				children: "Voices · 09"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-5 font-serif text-headline",
				children: "Held, not performed."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-12 md:grid-cols-3 md:gap-10",
				children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "micro text-gold",
							children: "Demo testimonial"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-6 font-serif text-2xl leading-snug italic text-ink md:text-3xl",
							children: [
								"“",
								t.quote,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-8 micro text-stone",
							children: [t.attrib, " · Composite"]
						})
					] })
				}, t.attrib))
			})]
		})
	});
}
var AnatomyCanvas = (0, import_react.lazy)(() => import("./AnatomyCanvas-fUcyRhyw.mjs"));
function ThreeDExperience() {
	const client = useIsClient();
	const reduced = usePrefersReducedMotion();
	const wrap = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [formStudy, setFormStudy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = wrap.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
			rootMargin: "120px",
			threshold: .05
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	const show3d = client && visible && !reduced;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: wrap,
		id: "precision",
		className: "relative overflow-hidden bg-ink text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-10 py-24 lg:grid-cols-12 lg:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "lg:col-span-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro text-champagne",
						children: "3D smile experience · 04"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-5 font-serif text-headline",
						children: [
							"Precision",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"you can see."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 max-w-sm text-body font-light text-mist",
						children: "A sculptural study of ceramic and form. Drag to rotate. Switch between porcelain and a structural reading — the same object, two temperatures of light."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("btn-line", !formStudy && "border-champagne bg-ivory/6"),
							onClick: () => setFormStudy(false),
							"aria-pressed": !formStudy,
							children: "Porcelain"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("btn-line", formStudy && "border-champagne bg-ivory/6"),
							onClick: () => setFormStudy(true),
							"aria-pressed": formStudy,
							children: "Form study"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "micro mt-8 text-stone",
						children: "Interactive demo · not a clinical simulator"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-[70vw] min-h-80 max-h-[640px] touch-none lg:col-span-8 lg:h-[72vh] lg:max-h-none",
				children: show3d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/hero-porcelain.jpg",
						alt: "Porcelain veneer used as a fallback for the 3D study",
						className: "h-full w-full object-contain"
					}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnatomyCanvas, { formStudy })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero-porcelain.jpg",
					alt: "Porcelain veneer in studio light",
					className: "h-full w-full object-contain"
				})
			})]
		})
	});
}
function Treatments() {
	const { openWith } = useBooking();
	const [active, setActive] = (0, import_react.useState)(0);
	const current = TREATMENTS[active] ?? TREATMENTS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "treatments",
		className: "relative bg-ink text-ivory",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-24 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "micro text-champagne",
					children: "Signature treatments · 03"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-serif text-headline",
					children: "Six instruments."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm font-light leading-relaxed text-mist",
					children: "Each treatment is approached as a luxury object: specified, sequenced, and finished with the same editorial care."
				})]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid items-start gap-12 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "lg:col-span-7",
					onMouseLeave: () => void 0,
					children: TREATMENTS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "border-t border-line last:border-b",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "group flex w-full items-center gap-5 py-6 text-left md:gap-8 md:py-7",
							onMouseEnter: () => setActive(i),
							onFocus: () => setActive(i),
							onClick: () => openWith(t.name),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "micro w-10 shrink-0 text-gold",
									children: t.num
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block font-serif text-title leading-none transition-transform duration-500 ease-luxury group-hover:translate-x-2",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-3 hidden max-w-md text-sm font-light leading-relaxed text-mist md:block",
										children: t.copy
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "micro hidden text-stone sm:block",
									children: t.kicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
									className: "size-4 shrink-0 text-champagne transition-transform duration-500 ease-luxury group-hover:translate-x-1 group-hover:-translate-y-1",
									strokeWidth: 1.3,
									"aria-hidden": "true"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pb-5 pl-16 text-sm font-light text-mist md:hidden",
							children: t.copy
						})]
					}, t.id))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative hidden lg:col-span-5 lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-4/5 overflow-hidden bg-charcoal",
							children: [TREATMENTS.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: t.image,
								alt: t.alt,
								className: cn("absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-luxury", i === active ? "scale-100 opacity-100" : "scale-105 opacity-0")
							}, t.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 bg-linear-to-t from-ink/70 to-transparent p-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "micro text-champagne",
									children: [current.num, " / 06"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-serif text-2xl",
									children: current.name
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "micro mt-4 text-stone",
							children: "Hover a treatment · click to enquire"
						})]
					})
				})]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		id: "main",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Philosophy, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Treatments, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreeDExperience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaseStudies, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Technology, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Doctor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
		type: "application/ld+json",
		dangerouslySetInnerHTML: { __html: JSON.stringify({
			"@context": "https://schema.org",
			"@type": "WebSite",
			name: "Aurelis Dental",
			description: "Fictional premium cosmetic dentistry studio demo website. Not a real clinic.",
			about: "Demo / fictional brand experience"
		}) }
	})] });
}
//#endregion
export { Home as component };
