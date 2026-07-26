import { r as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { _ as require_react, g as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, k as redirect, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Instagram, S as Leaf, _ as Phone, b as MapPin, k as Facebook, n as X, t as Youtube, x as Mail, y as Menu } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-gMDxf9lj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C9Q4vnaa.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/success-stories",
		label: "Success Stories"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		if (open) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-40 w-full transition-all duration-300", scrolled ? "backdrop-blur-md bg-white/80 border-b border-border/70 shadow-[0_4px_20px_-12px_rgba(46,125,50,0.15)]" : "bg-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "group flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-leaf-gradient text-primary-foreground shadow-soft transition group-hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-lg font-bold tracking-tight text-foreground sm:text-xl",
							children: ["Nourish ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "with Dn. Minahal"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 lg:flex",
						children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							className: cn("relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary", pathname === n.to && "text-primary bg-secondary"),
							activeOptions: { exact: n.to === "/" },
							children: n.label
						}, n.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-white/80 text-foreground lg:hidden cursor-pointer",
						onClick: () => setOpen(true),
						"aria-label": "Open menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden transition-opacity duration-300",
				onClick: () => setOpen(false)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("fixed inset-y-0 right-0 z-50 w-full h-[100dvh] bg-white p-6 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden", open ? "translate-x-0" : "translate-x-full"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "group flex items-center gap-2",
							onClick: () => setOpen(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-10 w-10 place-items-center rounded-xl bg-leaf-gradient text-primary-foreground shadow-soft",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg font-bold tracking-tight text-foreground",
								children: ["Nourish ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-primary",
									children: "with Dn. Minahal"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-muted/40 text-foreground cursor-pointer",
							onClick: () => setOpen(false),
							"aria-label": "Close menu",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex flex-col gap-6 flex-1",
						children: nav.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							onClick: () => setOpen(false),
							className: cn("font-display text-2xl font-semibold text-muted-foreground transition-all duration-200 hover:text-primary pl-2 border-l-4 border-transparent hover:border-primary/50", pathname === n.to && "text-primary border-primary font-bold pl-3"),
							style: { animation: open ? `rise-in .3s ease-out ${i * 50}ms both` : void 0 },
							children: n.label
						}, n.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-auto space-y-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: "Move Better Clinic, Faisalabad"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1",
								children: "Mon–Fri: 2:00 PM – 7:00 PM"
							})]
						})
					})
				]
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-muted",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-10 w-10 place-items-center rounded-xl bg-leaf-gradient text-primary-foreground shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg font-bold",
							children: "Nourish with Dn. Minahal"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xs text-sm text-muted-foreground",
						children: "Personalised, evidence-based nutrition care rooted in Pakistani lifestyles and homemade food."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex gap-3",
						children: [
							Instagram,
							Facebook,
							Youtube
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "social",
							className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-white text-muted-foreground transition hover:text-primary hover:border-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-wider text-foreground",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-primary",
							children: "About"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services",
							className: "hover:text-primary",
							children: "Services"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/success-stories",
							className: "hover:text-primary",
							children: "Success Stories"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-primary",
							children: "Contact"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-wider text-foreground",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 text-primary" }), " +92 300 1234567"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 text-primary" }), " info@nourishpakistan.com"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 text-primary" }), " Move Better Clinic, East Canal Road, Faisalabad"]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm font-semibold uppercase tracking-wider text-foreground",
					children: "Hours"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mon – Fri: 2:00 PM – 7:00 PM" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Sat – Sun: Closed" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Online consultations across Pakistan" })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6 lg:px-8",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Nourish with Dn. Minahal. All rights reserved. Crafted with care in Pakistan."
				]
			})
		})]
	});
}
var WhatsAppIcon = ({ className = "h-6 w-6" }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
	className,
	fill: "currentColor",
	viewBox: "0 0 24 24",
	xmlns: "http://www.w3.org/2000/svg",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008 0c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 12.003-2.002-.001-3.973-.5-5.739-1.45L0 24.002zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436-.002 9.858-4.427 9.861-9.867.002-2.637-1.03-5.112-2.905-6.99C16.654 1.86 14.178 1.83 11.54 1.83c-5.437 0-9.857 4.426-9.86 9.868-.001 1.637.425 3.235 1.238 4.646l-.993 3.63 3.722-.975zm11.367-5.321c-.314-.157-1.859-.918-2.143-1.021-.284-.103-.491-.157-.698.157-.207.314-.799 1.002-.98 1.21-.181.207-.362.232-.676.075-.314-.157-1.328-.49-2.53-1.562-.935-.834-1.566-1.863-1.748-2.178-.181-.314-.019-.484.138-.64.14-.139.314-.366.472-.549.157-.183.21-.314.314-.524.103-.21.052-.393-.026-.549-.078-.157-.698-1.683-.957-2.308-.252-.607-.51-.524-.698-.534-.18-.01-.387-.012-.594-.012s-.543.078-.826.393c-.284.314-1.086 1.063-1.086 2.593 0 1.53 1.112 3.01 1.268 3.222.156.21 2.19 3.344 5.305 4.688.741.32 1.318.51 1.77.653.745.237 1.423.203 1.959.123.598-.089 1.859-.76 2.122-1.455.263-.695.263-1.288.185-1.414-.078-.126-.284-.21-.598-.367z" })
});
function FloatingActions() {
	if (useRouterState({ select: (s) => s.location.pathname }) === "/book") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "https://wa.me/923001234567?text=Salam!%20I%27d%20like%20to%20book%20a%20nutrition%20consultation.",
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-8 right-5 z-40 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-glow animate-pulse-ring transition hover:scale-105",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "h-5 w-5 sm:h-6 sm:w-6" })
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-hero-gradient px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-primary",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "/",
					className: "mt-6 inline-flex items-center justify-center rounded-full bg-leaf-gradient px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition hover:opacity-95",
					children: "Go home"
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try refreshing or head home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border px-5 py-2 text-sm",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Nourish with Dn. Minahal Farrukh — Certified Dietitian" },
			{
				name: "description",
				content: "Personalised nutrition consultations across Pakistan. Weight loss, diabetes, PCOS, pregnancy and family nutrition — online and onsite with a certified dietitian."
			},
			{
				name: "author",
				content: "Nourish with Dn. Minahal Farrukh"
			},
			{
				property: "og:title",
				content: "Nourish with Dn. Minahal Farrukh — Certified Dietitian"
			},
			{
				property: "og:description",
				content: "Warm, evidence-based nutrition care for Pakistani lifestyles. Book a consultation today."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
					richColors: true,
					position: "top-center"
				})
			]
		})
	});
}
var $$splitComponentImporter$5 = () => import("./routes-CPXtaIld.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Nourish with Dn. Minahal Farrukh — Certified Dietitian & Nutritionist" },
		{
			name: "description",
			content: "Personalised online nutrition consultations across Pakistan — weight loss, diabetes, PCOS, pregnancy & family nutrition."
		},
		{
			property: "og:title",
			content: "Nourish with Dn. Minahal Farrukh — Certified Dietitian & Nutritionist"
		},
		{
			property: "og:description",
			content: "Warm, evidence-based nutrition care rooted in Pakistani lifestyles. Book your consultation."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./about-udfAHLSY.mjs");
var Route$4 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Dn. Minahal Farrukh — Nutritionist & Dietitian in Pakistan" },
		{
			name: "description",
			content: "Meet Dn. Minahal Farrukh, a certified clinical dietitian with 3+ years of experience helping families across Pakistan build healthier lives."
		},
		{
			property: "og:title",
			content: "About Dn. Minahal Farrukh — Nutritionist & Dietitian"
		},
		{
			property: "og:description",
			content: "Personal story, philosophy and qualifications of Nourish with Dn. Minahal Farrukh."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./book-7lnKueG_.mjs");
var Route$3 = createFileRoute("/book")({
	beforeLoad: () => {
		throw redirect({ to: "/" });
	},
	head: () => ({ meta: [
		{ title: "Book a Consultation — Nourish with Dn. Minahal Farrukh" },
		{
			name: "description",
			content: "Book your personalised online nutrition consultation. A friendly step-by-step health assessment to help us prepare for your session."
		},
		{
			property: "og:title",
			content: "Book a Nutrition Consultation"
		},
		{
			property: "og:description",
			content: "Complete a short health assessment and pick a time that works for you."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-Bd1ILllp.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Nourish with Dn. Minahal Farrukh, Dietitian in Pakistan" },
		{
			name: "description",
			content: "Get in touch with Dn. Minahal Farrukh for nutrition consultations, questions or collaborations. WhatsApp, email and clinic address."
		},
		{
			property: "og:title",
			content: "Contact Nourish with Dn. Minahal Farrukh"
		},
		{
			property: "og:description",
			content: "Reach out via WhatsApp, email or visit our Faisalabad clinic."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-B4zLAXFK.mjs");
var Route$1 = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Personalised Nutrition Care in Pakistan" },
		{
			name: "description",
			content: "Weight loss, diabetes, PCOS, pregnancy, sports and child nutrition — see all services offered by Nourish with Dn. Minahal Farrukh."
		},
		{
			property: "og:title",
			content: "Nutrition Services in Pakistan"
		},
		{
			property: "og:description",
			content: "Explore personalised nutrition services for every stage and goal."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./success-stories-DvoJx8rS.mjs");
var Route = createFileRoute("/success-stories")({
	head: () => ({ meta: [
		{ title: "Success Stories — Real Results with Nourish with Dn. Minahal Farrukh" },
		{
			name: "description",
			content: "Before & after stories from Pakistani clients — weight loss, diabetes control, PCOS relief and lifestyle transformations."
		},
		{
			property: "og:title",
			content: "Client Success Stories"
		},
		{
			property: "og:description",
			content: "Real journeys, real results, real Pakistani families."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AboutRoute: Route$4.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$6
	}),
	BookRoute: Route$3.update({
		id: "/book",
		path: "/book",
		getParentRoute: () => Route$6
	}),
	ContactRoute: Route$2.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$6
	}),
	ServicesRoute: Route$1.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$6
	}),
	SuccessStoriesRoute: Route.update({
		id: "/success-stories",
		path: "/success-stories",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
