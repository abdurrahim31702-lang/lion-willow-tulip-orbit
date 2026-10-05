import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay, c as DialogTrigger, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as create } from "../_libs/zustand.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowUpRight, r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-00iCeYy8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SITE = {
	name: "Aurelis Dental",
	wordmark: "Aurelis",
	tagline: "The Art of Your Smile.",
	location: "Mumbai, India",
	demoNotice: "Demo website — not a real clinic.",
	email: "studio@aurelis.demo",
	phone: "+91 22 0000 0000",
	address: "Bandra West, Mumbai 400050",
	hours: "By private appointment"
};
var NAV = [
	{
		href: "#treatments",
		label: "Treatments"
	},
	{
		href: "#gallery",
		label: "Smile Gallery"
	},
	{
		href: "#philosophy",
		label: "Philosophy"
	},
	{
		href: "#technology",
		label: "Technology"
	},
	{
		href: "#about",
		label: "About"
	}
];
var TREATMENTS = [
	{
		id: "smile-makeover",
		num: "01",
		name: "Smile Makeover",
		kicker: "Composition",
		copy: "A considered redesign of proportion, brightness and facial harmony — planned as a single composition, never a collection of procedures.",
		image: "/images/smile-editorial.jpg",
		alt: "Editorial close crop of a refined smile, used as campaign imagery for this demo"
	},
	{
		id: "veneers",
		num: "02",
		name: "Porcelain Veneers",
		kicker: "Ceramic",
		copy: "Ultra-thin ceramic shells, designed tooth by tooth, to refine light, edge and symmetry while remaining quietly natural.",
		image: "/images/veneers-still.jpg",
		alt: "Still life of porcelain veneers arranged like jewelry on dark stone"
	},
	{
		id: "aligners",
		num: "03",
		name: "Clear Aligners",
		kicker: "Movement",
		copy: "Discreet, digitally planned tooth movement. An alternative to traditional orthodontics, paced for life rather than spectacle.",
		image: "/images/aligner-product.jpg",
		alt: "Clear aligner photographed as a luxury object on champagne silk"
	},
	{
		id: "whitening",
		num: "04",
		name: "Professional Whitening",
		kicker: "Light",
		copy: "Controlled brightening that respects enamel character. The aim is luminosity, not a flat, artificial white.",
		image: "/images/enamel-macro.jpg",
		alt: "Macro photograph of light moving across a porcelain surface"
	},
	{
		id: "implants",
		num: "05",
		name: "Dental Implants",
		kicker: "Structure",
		copy: "Quiet structural restoration. Planned in three dimensions so the visible result sits in balance with the face.",
		image: "/images/tech-scan.jpg",
		alt: "Dark studio with a champagne wireframe study of a dental arch"
	},
	{
		id: "rehabilitation",
		num: "06",
		name: "Full-Mouth Rehabilitation",
		kicker: "Architecture",
		copy: "A complete recalibration of form, bite and appearance — approached as architecture: sequence, structure, then finish.",
		image: "/images/philosophy-interior.jpg",
		alt: "Sunlit limestone interior of the fictional Aurelis studio"
	}
];
var CASES = [
	{
		num: "01",
		title: "Smile Makeover",
		image: "/images/smile-editorial.jpg",
		alt: "Demo composite of a refined smile used for a fictional case study",
		rationale: "Refining proportion, symmetry and brightness while preserving a natural expression."
	},
	{
		num: "02",
		title: "Porcelain Veneers",
		image: "/images/veneers-still.jpg",
		alt: "Demo still life representing a fictional veneer study",
		rationale: "Thin ceramic, considered edge for edge, to restore light without theatrical opacity."
	},
	{
		num: "03",
		title: "Clear Aligners",
		image: "/images/aligner-product.jpg",
		alt: "Demo product study representing a fictional alignment case",
		rationale: "Quiet movement, digitally rehearsed, so the final composition feels as if it was always there."
	},
	{
		num: "04",
		title: "Light & Enamel",
		image: "/images/enamel-macro.jpg",
		alt: "Demo macro study of enamel-like porcelain and light",
		rationale: "Brightness treated as a material quality — warmth, translucency, and restraint."
	}
];
var TECH = [
	{
		num: "01",
		name: "Digital Smile Design",
		copy: "Proportion studied against the face, not in isolation. A visual rehearsal before anything is committed."
	},
	{
		num: "02",
		name: "3D Scanning",
		copy: "Surface captured at high resolution — a precise record, without the theatre of conventional impressions."
	},
	{
		num: "03",
		name: "Digital Treatment Planning",
		copy: "Every sequence modelled in advance, so chairside time is calm, short, and exact."
	},
	{
		num: "04",
		name: "High-Precision Imaging",
		copy: "Imaging used as a design instrument: structure, airway of light, and the architecture of the smile."
	},
	{
		num: "05",
		name: "Minimally Invasive Techniques",
		copy: "Where possible, subtract less. Preserve what is already in harmony; refine only what is not."
	}
];
var EXPERIENCE_STEPS = [
	{
		num: "01",
		title: "Private consultation",
		copy: "A quiet first conversation. Photographs, proportion, and intention — not a sales floor. You are seen, not processed.",
		image: "/images/philosophy-interior.jpg",
		alt: "Sunlit consultation interior of the fictional studio"
	},
	{
		num: "02",
		title: "Digital smile analysis",
		copy: "The face is recorded in three dimensions. We study midlines, incisal edges, and how light meets enamel.",
		image: "/images/tech-scan.jpg",
		alt: "Abstract digital smile analysis visualization"
	},
	{
		num: "03",
		title: "Personalized treatment design",
		copy: "A design, not a menu. Materials, sequence and finish are specified with the same care as a bespoke atelier.",
		image: "/images/veneers-still.jpg",
		alt: "Porcelain studies arranged as a design composition"
	},
	{
		num: "04",
		title: "Precision treatment",
		copy: "Calm rooms. Measured time. Technology in service of a still hand — never the other way around.",
		image: "/images/hero-porcelain.jpg",
		alt: "A single porcelain veneer in studio light"
	},
	{
		num: "05",
		title: "Refined final result",
		copy: "The work should recede. What remains is a face in proportion, and a smile that does not announce itself.",
		image: "/images/smile-editorial.jpg",
		alt: "Editorial beauty crop used as a demo of a refined result"
	}
];
var TESTIMONIALS = [
	{
		quote: "The process felt closer to a private atelier than a clinic. Every decision was about proportion, not spectacle.",
		attrib: "A. S., Mumbai"
	},
	{
		quote: "I was not asked to want a brighter smile. I was asked what the rest of my face should still say.",
		attrib: "R. M., Delhi"
	},
	{
		quote: "Quiet rooms, exact language, no theatre. It is the first time dentistry has felt like design.",
		attrib: "N. K., Bengaluru"
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var useBooking = create((set) => ({
	open: false,
	treatment: null,
	openWith: (treatment) => set({
		open: true,
		treatment: treatment ?? null
	}),
	close: () => set({ open: false })
}));
function Button({ variant = "solid", magnetic = false, arrow = false, className, children, onMouseMove, onMouseLeave, ...rest }) {
	const ref = (0, import_react.useRef)(null);
	function handleMove(e) {
		onMouseMove?.(e);
		if (!magnetic || !ref.current) return;
		if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;
		const r = ref.current.getBoundingClientRect();
		const x = e.clientX - r.left - r.width / 2;
		const y = e.clientY - r.top - r.height / 2;
		ref.current.style.transform = `translate(${x * .18}px, ${y * .22}px)`;
	}
	function handleLeave(e) {
		onMouseLeave?.(e);
		if (ref.current) ref.current.style.transform = "";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		ref,
		type: rest.type ?? "button",
		className: cn(variant === "solid" && "btn-solid", variant === "line" && "btn-line", variant === "ghost" && "btn-ghost", "will-change-transform", className),
		onMouseMove: handleMove,
		onMouseLeave: handleLeave,
		...rest,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col items-stretch gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center justify-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children }), arrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
					className: "size-3.5 shrink-0",
					strokeWidth: 1.4,
					"aria-hidden": "true"
				}) : null]
			}), variant === "ghost" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ghost-rule",
				"aria-hidden": "true"
			}) : null]
		})
	});
}
function usePrefersReducedMotion() {
	const [reduced, setReduced] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const apply = () => setReduced(mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);
	return reduced;
}
var STORAGE_KEY = "aurelis-demo-inquiries";
function BookingDialog() {
	const { open, treatment, close, openWith } = useBooking();
	const formId = (0, import_react.useId)();
	const [sent, setSent] = (0, import_react.useState)(false);
	const [choice, setChoice] = (0, import_react.useState)(treatment ?? "");
	(0, import_react.useEffect)(() => {
		if (open) {
			setSent(false);
			setChoice(treatment ?? "");
		}
	}, [open, treatment]);
	function onSubmit(e) {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const record = {
			at: (/* @__PURE__ */ new Date()).toISOString(),
			name: String(data.get("name") ?? ""),
			email: String(data.get("email") ?? ""),
			phone: String(data.get("phone") ?? ""),
			treatment: String(data.get("treatment") ?? ""),
			note: String(data.get("note") ?? ""),
			demo: true
		};
		try {
			const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
			localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...prev].slice(0, 20)));
		} catch {}
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (v) => v ? openWith(choice) : close(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-overlay bg-ink/80 backdrop-blur-sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
			className: "fixed inset-0 z-overlay overflow-y-auto bg-ink text-ivory md:inset-4 md:border md:border-line",
			"aria-describedby": `${formId}-desc`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell relative flex min-h-full flex-col py-10 md:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-12 flex items-start justify-between gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "micro text-champagne",
							children: "Private consultation · Demo enquiry"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "flex size-11 items-center justify-center border border-line text-ivory transition-colors hover:border-champagne",
								"aria-label": "Close consultation form",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
									className: "size-4",
									strokeWidth: 1.4
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
						className: "font-serif text-headline text-ivory",
						children: [
							"Request a private",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"consultation."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						id: `${formId}-desc`,
						className: "mt-6 max-w-xl text-body font-light text-mist",
						children: "This form stores a local demo enquiry on your device. Aurelis Dental is a fictional studio — no message is sent to a clinic, and nothing here is medical advice."
					}),
					sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-16 max-w-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "micro text-champagne",
								children: "Enquiry recorded locally"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 font-serif text-title text-ivory",
								children: "Thank you."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-body font-light text-mist",
								children: "In a real studio this would reach a concierge. Here, it remains a demonstration of the booking ritual."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								className: "mt-10",
								onClick: close,
								children: "Close"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "mt-14 grid gap-10 md:grid-cols-2 md:gap-x-16",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "micro text-mist",
									children: "Full name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field mt-2",
									name: "name",
									required: true,
									autoComplete: "name"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "micro text-mist",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field mt-2",
									name: "email",
									type: "email",
									required: true,
									autoComplete: "email"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "micro text-mist",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									className: "field mt-2",
									name: "phone",
									type: "tel",
									autoComplete: "tel",
									placeholder: "+91"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "micro text-mist",
									children: "Interest"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "field mt-2",
									name: "treatment",
									value: choice,
									onChange: (e) => setChoice(e.target.value),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "A general conversation"
									}), TREATMENTS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: t.name,
										children: t.name
									}, t.id))]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "micro text-mist",
									children: "Note — optional"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									className: "field mt-2 min-h-24 resize-y",
									name: "note",
									rows: 3
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-start gap-3 md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									required: true,
									className: "mt-1 size-4 shrink-0 accent-champagne"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-light leading-relaxed text-mist",
									children: "I understand this is a demonstration website and not a real clinic, and that no clinical relationship is created by submitting this form."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									magnetic: true,
									arrow: true,
									children: "Submit demo enquiry"
								})
							})
						]
					})
				]
			})
		})] })
	});
}
function Grain() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grain",
		"aria-hidden": "true"
	});
}
function ScrollProgress() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		let raf = 0;
		const update = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
			el.style.transform = `scaleX(${p})`;
		};
		const onScroll = () => {
			cancelAnimationFrame(raf);
			raf = requestAnimationFrame(update);
		};
		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: "progress-bar",
		style: {
			transform: "scaleX(0)",
			width: "100%"
		},
		"aria-hidden": "true"
	});
}
function Cursor() {
	const dot = (0, import_react.useRef)(null);
	const ring = (0, import_react.useRef)(null);
	const reduced = usePrefersReducedMotion();
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reduced) return;
		setOn(true);
		document.documentElement.classList.add("has-cursor");
		const pos = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2
		};
		const ringPos = { ...pos };
		let hover = false;
		let raf = 0;
		const onMove = (e) => {
			pos.x = e.clientX;
			pos.y = e.clientY;
		};
		const onOver = (e) => {
			hover = !!e.target?.closest("a, button, [role='button'], input, textarea, select, [data-cursor]");
			if (ring.current) ring.current.dataset.hover = hover ? "1" : "0";
		};
		const tick = () => {
			ringPos.x += (pos.x - ringPos.x) * .18;
			ringPos.y += (pos.y - ringPos.y) * .18;
			if (dot.current) dot.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
			if (ring.current) ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
			raf = requestAnimationFrame(tick);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		document.addEventListener("mouseover", onOver);
		raf = requestAnimationFrame(tick);
		return () => {
			document.documentElement.classList.remove("has-cursor");
			window.removeEventListener("pointermove", onMove);
			document.removeEventListener("mouseover", onOver);
			cancelAnimationFrame(raf);
		};
	}, [reduced]);
	if (!on) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dot,
		className: "cursor-dot",
		"aria-hidden": "true"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: ring,
		className: "cursor-ring",
		"aria-hidden": "true"
	})] });
}
var LINKS = [
	{
		href: "#treatments",
		label: "Treatments"
	},
	{
		href: "#gallery",
		label: "Smile Gallery"
	},
	{
		href: "#technology",
		label: "Technology"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-ink text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-12 py-16 md:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-2xl tracking-[0.18em] uppercase",
						children: SITE.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 font-serif text-xl italic text-mist",
						children: SITE.tagline
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-wrap gap-x-8 gap-y-3 md:col-span-5",
					"aria-label": "Footer",
					children: [
						LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "micro text-mist hover:text-ivory",
							children: l.label
						}, l.href)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/privacy",
							className: "micro text-mist hover:text-ivory",
							children: "Privacy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/terms",
							className: "micro text-mist hover:text-ivory",
							children: "Terms"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "micro self-end text-gold md:col-span-2 md:text-right",
					children: "Est. 2026"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex flex-wrap items-center justify-between gap-4 border-t border-line py-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "micro text-champagne",
				children: SITE.demoNotice
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "micro text-stone",
				children: "Fictional studio · no clinical services offered"
			})]
		})]
	});
}
function go(href) {
	if (href.startsWith("/")) return;
	const id = href.replace("#", "");
	const el = document.getElementById(id);
	if (!el) return;
	const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const top = el.getBoundingClientRect().top + window.scrollY - 72;
	window.scrollTo({
		top,
		behavior: reduced ? "auto" : "smooth"
	});
}
function Navbar() {
	const { openWith } = useBooking();
	const [compact, setCompact] = (0, import_react.useState)(false);
	const [menu, setMenu] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setCompact(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ease-luxury", compact ? "border-b border-line bg-ink/78 backdrop-blur-md" : "border-b border-transparent bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:bg-ivory focus:px-3 focus:py-2 focus:text-ink",
			children: "Skip to content"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("shell grid grid-cols-[1fr_auto] items-center gap-4 transition-[height] duration-500 ease-luxury lg:grid-cols-[1fr_auto_1fr]", compact ? "h-16" : "h-[var(--nav-h)]"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "justify-self-start font-serif text-xl tracking-[0.22em] text-ivory uppercase",
					onClick: () => window.scrollTo({
						top: 0,
						behavior: "smooth"
					}),
					children: SITE.wordmark
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 lg:flex",
					"aria-label": "Primary",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: "micro text-mist transition-colors hover:text-ivory",
						onClick: (e) => {
							e.preventDefault();
							go(item.href);
						},
						children: item.label
					}, item.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "line",
						className: "hidden sm:inline-flex",
						magnetic: true,
						onClick: () => openWith(),
						children: "Book consultation"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
						open: menu,
						onOpenChange: setMenu,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "flex size-11 items-center justify-center border border-line lg:hidden",
								"aria-label": "Open menu",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
									className: "size-4",
									strokeWidth: 1.4
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-overlay bg-ink/70" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
							className: "fixed inset-0 z-overlay flex flex-col bg-ink text-ivory",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
									className: "sr-only",
									children: "Menu"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "shell flex h-16 items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-serif tracking-[0.22em] uppercase",
										children: SITE.wordmark
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "flex size-11 items-center justify-center border border-line",
											"aria-label": "Close menu",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
												className: "size-4",
												strokeWidth: 1.4
											})
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
									className: "shell flex flex-1 flex-col justify-center gap-2 pb-16",
									children: [
										NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: item.href,
											className: "font-serif text-headline text-ivory",
											onClick: (e) => {
												e.preventDefault();
												setMenu(false);
												window.setTimeout(() => go(item.href), 80);
											},
											children: item.label
										}, item.href)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "mt-10 self-start font-serif text-title text-champagne",
											onClick: () => {
												setMenu(false);
												openWith();
											},
											children: "Book consultation"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "micro mt-10 text-stone",
											children: SITE.demoNotice
										})
									]
								})
							]
						})] })]
					})]
				})
			]
		})]
	});
}
function PageShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-dvh bg-ink text-ivory",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grain, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingDialog, {})
		]
	});
}
//#endregion
export { SITE as a, TREATMENTS as c, usePrefersReducedMotion as d, PageShell as i, cn as l, CASES as n, TECH as o, EXPERIENCE_STEPS as r, TESTIMONIALS as s, Button as t, useBooking as u };
